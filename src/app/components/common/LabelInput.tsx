export interface LabelInputProps {
  hasError: boolean;
  errorMessage: string;
}
export function LabelInput({ children, hasError, errorMessage }: any) {
  return (
    <div className="mb-4">
      {children}
      {hasError && <div className="text-red-500">{errorMessage}</div>}
    </div>
  );
}
