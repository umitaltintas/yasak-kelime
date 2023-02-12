export function Timer(props: TimerProps) {
  return (
    <div className="flex flex-row justify-center">
      <h1 className="text-4xl font-bold whitespace-nowrap mb-16  text-primary-400">
        {props.time}
      </h1>
    </div>
  );
}

export interface TimerProps {
  time: number;
}
