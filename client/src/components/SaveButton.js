import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveProgress } from "../components/utils/saveProgress";
import { logout } from "../store/actions/authActions";

// Komponentti, joka renderöi tallennuspainikkeen ja kutsuu saveProgress-funktiota.

export const SaveButton = () => {
  const dispatch = useDispatch();
  const userId = localStorage.getItem("userId");
  const reduxState = useSelector((state) => state);

  const handleSaveProgress = () => {
    //dispatch(saveProgress(userId, reduxState));
    dispatch(logout());
  };

  return <button class={`border btn btn-light mx-1`}onClick={handleSaveProgress}>Tallenna</button>;
};
