import {Box, FormControl, MenuItem, Select} from "@mui/material";
import React, {useContext} from "react";
import {RequestContext} from "../../App";

const RequestModificationSelection = () => {
    const selectStyle = {
        border: '2px solid #FFFFFF', // White border
        color: '#FFFFFF', // White text color
        height: '35px',
        width: '600px',
    };
    const formControlStyle= {
        paddingBottom: '15px'
    }
    const { currentRequest, setCurrentRequest } = useContext(RequestContext)
    const handleChange = (event: any) => {
        setCurrentRequest(event.target.value)
    }
    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl style={formControlStyle} fullWidth>
                <Select
                    style={selectStyle}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={currentRequest}
                    label="requestSelect"
                    onChange={handleChange}
                >
                    <MenuItem value={'getStudents'}>Get All Students</MenuItem>
                    <MenuItem value={'getOneStudent'}>Get One Student</MenuItem>
                    <MenuItem value={'getStudentsWithClasses'}>Get Students and their class</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}

export default RequestModificationSelection
