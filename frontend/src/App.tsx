import React, {useState} from 'react';
import StudentsRequest from "./components/graphql/StudentsRequest";
import { FormControl, MenuItem, Select} from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import JSONStudentsRequest from "./components/jsonapi/JSONStudentsRequest";


const theme = createTheme({
    palette: {
        background: {
            default: 'rgb(98, 114, 164)', // Set the desired background color
        },
    },
});

function App() {
    const selectStyle = {
        border: '2px solid #FFFFFF', // White border
        color: '#FFFFFF', // White text color
        height: '50px',
        paddingTop: '10px',
    };
    const [specificationSelection, setSpecificationSelection] = useState('graphql')
    return (
        <ThemeProvider theme={theme}>
            <div style={{display: "flex", flexDirection: "row", paddingTop: "100px", paddingLeft: "200px", justifyContent: "left"}}>
                <div style={{ fontFamily: "Montserrat", fontSize: "32px", fontWeight: "bold", paddingRight: "10px" }}>Selected Specification:</div>
                <FormControl style={{ width: '300px' }}>
                    <Select
                        style={selectStyle}
                        labelId="select-label"
                        id="select"
                        value={specificationSelection}
                        label="Select Option"
                        onChange={(event) => setSpecificationSelection(event.target.value)}
                    >
                        <MenuItem value="graphql">GraphQL</MenuItem>
                        <MenuItem value="jsonapi">JSONAPI</MenuItem>
                    </Select>
                </FormControl>
            </div>
            {specificationSelection === 'graphql' ? <StudentsRequest/> : <JSONStudentsRequest/>}
        </ThemeProvider>
    )
}

export default App;
