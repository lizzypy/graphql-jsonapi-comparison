import {Button} from "@mui/material";
import React from "react";

interface requestButtonProps {
    onClick: () => void;
    title: string;
}

const ActionButton = ({ onClick, title }: requestButtonProps ) => {
    return (
        <Button onClick={onClick}>{title}</Button>
    )
}

export default ActionButton;
