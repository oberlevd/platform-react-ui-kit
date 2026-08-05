interface Typography {
  children: React.ReactNode;
}
export const TypographyH1 = ({ children }: Typography) => {
  return (
    <h1 className="text-xl font-bold tracking-tight text-balance">
      {children}
    </h1>
  );
};

export const TypographyH2 = ({ children }: Typography) => {
  return (
    <h2 className="text-l font-bold tracking-tight text-balance">{children}</h2>
  );
};
