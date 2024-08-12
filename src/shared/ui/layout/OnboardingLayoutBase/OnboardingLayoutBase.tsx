interface Props {
  children?: React.ReactNode;
}

export const OnboardingLayoutBase = ({ children }: Props) => {
  return (
    <div className="min-h-screen grid place-items-center">
      <div className="w-96 max-w-[90vw]">{children}</div>
    </div>
  );
};
