import { useEffect } from "react";
import { loadState } from "../app/localStorageMiddleware.js";
import { useNavigate } from "react-router-dom";

export const Landing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (loadState() !== undefined) {
      navigate("app");
    } else {
      navigate("create");
    }
  });
  return null;
};
