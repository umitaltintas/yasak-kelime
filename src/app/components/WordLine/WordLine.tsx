export interface WordLineProps {
  word: string;
}
export function WordLine(props: WordLineProps) {
  return (
    <div className="bg-primary-400 text-white text-center font-bold py-2 px-4 rounded mb-4">
      {props.word}
    </div>
  );
}
