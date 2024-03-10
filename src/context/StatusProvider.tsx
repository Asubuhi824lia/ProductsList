import { useState, ReactNode } from "react";
import { StatusContext } from "./StatusContext";

interface Props {
  children: ReactNode;
}

export const StatusContextProvider = ({ children, ...props }: Props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <StatusContext.Provider
      value={{
        loading,
        setLoading,
        error,
        setError,
      }}
      {...props}
    >
      {children}
    </StatusContext.Provider>
  );
};
