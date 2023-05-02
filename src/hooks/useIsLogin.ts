import { useState } from "react";

export const useIsLogin = () => {
  const [isLogin, setIsLogin] = useState(localStorage.getItem("accessToken"));

  return {
    isLogin,
    setIsLogin,
  };
};
