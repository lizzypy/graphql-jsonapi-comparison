import {Button} from "@mui/material";
import React from "react";

interface requestButtonProps {
    onClick: () => void;
    title: string;
}

const ActionButton = ({ onClick, title }: requestButtonProps ) => {
    return (
        <div style={{ paddingBottom: "20px" }}>
            <Button color="primary" style={{ color: '#FFFFFF' }} onClick={onClick}>{title}</Button>
        </div>
    )
}

export default ActionButton;
