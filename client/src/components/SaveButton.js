import React from "react";
import { useDispatch, useSelector } from "react-redux";
//import { saveProgress } from "../actions/saveProgress";

// Komponentti, joka renderöi tallennuspainikkeen ja kutsuu saveProgress-funktiota.

const SaveButton = () => {
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.auth.userId);
    const reduxState = useSelector((state) => state);

    const handleSaveProgress = () => {
        //dispatch(saveProgress(userId, reduxState));
    }
    
    return (
        <button onClick={handleSaveProgress}>Tallenna</button>
    );
};

export default SaveButton;