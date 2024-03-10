import { createContext } from "react";

export type StatusContextType = {
  loading: boolean;
  setLoading: (loading: boolean) => void;
  error: null | string;
  setError: (error: null | string) => void;
};

export const StatusContext = createContext({
  loading: false,
  setLoading: () => {},
  error: null,
  setError: () => {},
});
