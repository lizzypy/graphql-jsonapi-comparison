import {Button} from "@mui/material";
import React from "react";

interface requestButtonProps {
    onClick: () => void;
}

const RequestButton = ({ onClick }: requestButtonProps ) => {
    return (
        <Button onClick={onClick}>Request</Button>
    )
}

export default RequestButton;
