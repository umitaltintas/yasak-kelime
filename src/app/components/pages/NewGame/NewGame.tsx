import { Field, Form, Formik, FormikHelpers } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Team } from 'src/app/models/team.model';
import { newGameSchema } from 'src/app/schema/new-game';
import * as Yup from 'yup';
import { useGameContext } from '../../../context/Providers/GameProvider';
import { LabelInput } from '../../common/LabelInput';
import { GameProps } from '../Game/Game';
/* eslint-disable-next-line */
export interface NewGameProps {}

export function NewGame(props: NewGameProps) {
  const { gameState, updateGameState } = useGameContext();
  const initialValues = {
    userName: '',
    userCount: 4,
    gameDuration: 1,
    teamAName: '',
    teamBName: '',
  };
  const navigate = useNavigate();
  const [gameCode] = useState(123);
  function handleStartGame(
    values: any,
    formikHelpers: FormikHelpers<typeof initialValues>
  ) {
    const { userName, userCount, gameDuration, teamAName, teamBName } = values;
    updateGameState({
      id: gameCode,
      activeTeamIndex: 0,
      teams: gameState.teams.map((team: Team, index: number) => ({
        ...team,
        name: index === 0 ? teamAName : teamBName,
      })),
      passRight: 3,
      tabooRight: 3,
      time: new Date(),
    });

    // navigate to game page
    navigate('/game');
  }

  return (
    // a taboo game login screen will be here
    // has user name, game user count, game duration
    // user count option 4 6 8
    <div className="flex flex-col text-3xl gap-y-4 rounded-lg bg-secondary-100 p-4">
      <h1 className="self-center text-4xl text-primary-400 font-bold">
        New Game
      </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={newGameSchema}
        onSubmit={handleStartGame}
      >
        {({ errors, touched }) => (
          <Form className="flex justify-center flex-col ">
            <LabelInput
              hasError={errors.userName && touched.userName}
              errorMessage={errors.userName}
            >
              <label
                htmlFor="userName"
                className=" block text-gray-700 font-semibold mb-2"
              >
                User Name
              </label>
              <Field
                type="text"
                as="input"
                name="userName"
                className="w-full rounded p-2 "
                placeholder="Enter your name"
              />
            </LabelInput>
            <LabelInput
              hasError={errors.userCount && touched.userCount}
              errorMessage={errors.userCount}
            >
              <label
                htmlFor="userCount"
                className=" block text-gray-700 font-semibold mb-2"
              >
                User Count
              </label>
              <Field
                name="userCount"
                id="userCount"
                as="select"
                className=" p-2 w-full rounded bg-white"
              >
                <option
                  className="
                    text-gray-400
                "
                  disabled
                >
                  Select user count
                </option>

                <option value="4">4</option>
                <option value="6">6</option>
                <option value="8">8</option>
              </Field>
            </LabelInput>
            <LabelInput
              hasError={errors.gameDuration && touched.gameDuration}
              errorMessage={errors.gameDuration}
            >
              <label
                htmlFor="gameDuration"
                className=" block text-gray-700 font-semibold mb-2"
              >
                Game Duration
              </label>
              <Field
                as="select"
                name="gameDuration"
                id="gameDuration"
                className="p-2 w-full rounded  bg-white"
              >
                <option
                  className="
                    text-gray-400
                "
                  disabled
                >
                  Select game duration
                </option>
                <option value="1">1 </option>
                <option value="2">2</option>
                <option value="3">3</option>
              </Field>
            </LabelInput>
            <LabelInput
              hasError={errors.teamAName && touched.teamAName}
              errorMessage={errors.teamAName}
            >
              <label
                htmlFor="teamAName"
                className=" block text-gray-700 font-semibold mb-2"
              >
                Team A Name
              </label>
              <Field
                type="text"
                as="input"
                name="teamAName"
                className=" w-full rounded p-2"
                placeholder="Enter team A name"
              />
            </LabelInput>
            <LabelInput
              hasError={errors.teamBName && touched.teamBName}
              errorMessage={errors.teamBName}
            >
              <label
                htmlFor="teamBName"
                className=" block text-gray-700 font-semibold mb-2"
              >
                Team B Name
              </label>
              <Field
                type="text"
                as="input"
                name="teamBName"
                className="   w-full rounded p-2"
                placeholder="Enter team B name"
              />
            </LabelInput>

            <button
              className="self-center bg-primary-400 text-white font-semibold py-2 px-4 rounded hover:bg-hover-500 "
              type="submit"
            >
              Start
            </button>
          </Form>
        )}
      </Formik>
      {/* a fancy start button */}

      {/* formik version of this form */}
    </div>
  );
}

export default NewGame;
