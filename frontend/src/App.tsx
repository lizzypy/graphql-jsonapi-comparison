import React, {useState} from 'react';
import StudentsRequest from "./components/graphql/StudentsRequest";
import { FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
    palette: {
        background: {
            default: 'rgb(98, 114, 164)', // Set the desired background color
        },
    },
});

function App() {
    const [specificationSelection, setSpecificationSelection] = useState('graphql')
    return (
        <ThemeProvider theme={theme}>
            <div style={{display: "flex", flexDirection: "row", paddingTop: "100px", justifyContent: "center"}}>
                <div style={{ fontFamily: "Montserrat", fontSize: "32px", fontWeight: "bold", paddingRight: "10px" }}>Selected Specification:</div>
                <FormControl style={{ width: '300px' }}>
                    <InputLabel id="select-label">Select Spec</InputLabel>
                    <Select
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
            {specificationSelection === 'graphql' ? <StudentsRequest/> : <div>COMING SOON!</div>}
        </ThemeProvider>
    )
}

export default App;
