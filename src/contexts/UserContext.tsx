import { createContext } from "react";

interface IUserContextProviderProps {
  children: JSX.Element[];
}

export const UserContext = createContext();

export const UserContextProvider = ({
  children,
}: IUserContextProviderProps) => {
  return <UserContext.Provider value={}>{children}</UserContext.Provider>;
};
