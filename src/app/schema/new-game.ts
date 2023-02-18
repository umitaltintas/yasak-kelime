import * as Yup from 'yup';

export const newGameSchema = Yup.object().shape({
  userName: Yup.string()
    .required('User name is required')
    .min(3, 'User name is too short')
    .max(20, 'User name is too long'),
  userCount: Yup.number().required('User count is required'),
  gameDuration: Yup.number().required('Game duration is required'),
  teamAName: Yup.string()
    .required('Team A name is required')
    .min(3, 'Team A name is too short')
    .max(20, 'Team A name is too long'),
  teamBName: Yup.string()
    .required('Team B name is required')
    .min(3, 'Team B name is too short')
    .max(20, 'Team B name is too long'),
});
