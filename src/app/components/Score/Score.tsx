export interface scoreProps {
  name?: string;
  score: number;
  isActive: boolean;
}
export function Score(props: scoreProps) {
  return (
    <div
      className={`flex flex-col text-3xl  items-center rounded-lg bg-secondary-100 mb-4 ${
        props.isActive ? 'border-2 border-primary-400 animate-pulse' : ''
      }`}
    >
      <h1 className="text-4xl font-bold whitespace-nowrap  text-dark">
        {props.name}
      </h1>
      <h1 className="text-4xl font-bold whitespace-nowrap text-dark">
        {props.score}
      </h1>
    </div>
  );
}
