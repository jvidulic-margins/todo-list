interface Props {
  children?: React.ReactNode;
}

export const OnboardingLayoutBase = ({ children }: Props) => {
  return <div className="min-h-screen grid place-items-center">{children}</div>;
};
