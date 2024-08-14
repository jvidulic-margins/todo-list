interface Props {
  children?: React.ReactNode;
}

export const OnboardingLayoutBase = ({ children }: Props) => {
  return (
    <div className="min-h-screen grid place-items-center max-[450px]:p-4 p-8">
      {children}
    </div>
  );
};
