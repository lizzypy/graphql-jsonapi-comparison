import {Button} from "@mui/material";
import React from "react";

interface requestButtonProps {
    onClick: () => void;
    title: string;
}

const buttonStyle = {
    border: '2px solid #FFFFFF', // Set the border color to white
    borderRadius: '8px', // Set the border radius for rounded corners
    color: '#FFFFFF', // Set the text color to white
};

const ActionButton = ({ onClick, title }: requestButtonProps ) => {
    return (
        <div style={{ paddingBottom: "20px" }}>
            <Button color="primary" style={buttonStyle} onClick={onClick}>{title}</Button>
        </div>
    )
}

export default ActionButton;
