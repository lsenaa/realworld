import { createContext } from "react";
import { useIsLogin } from "../hooks/useIsLogin";

interface IUserContextProviderProps {
  children: JSX.Element[];
}

export const UserContext = createContext({} as ReturnType<typeof useIsLogin>);

export const UserContextProvider = ({
  children,
}: IUserContextProviderProps) => {
  return (
    <UserContext.Provider value={useIsLogin()}>{children}</UserContext.Provider>
  );
};
