import React, {createContext, useState} from 'react';
import StudentsRequest from "./components/graphql/StudentsRequest";
import {FormControl, MenuItem, Select} from "@mui/material";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import JSONStudentsRequest from "./components/jsonapi/JSONStudentsRequest";

const theme = createTheme({
    palette: {
        background: {
            default: 'rgb(98, 114, 164)', // Set the desired background color
        },
    },
});

export const RequestContext = createContext({
    currentRequest: 'getStudents',
    setCurrentRequest: (req: string) => {}
});

// Step 3: Create a provider
const RequestContextProvider = ({children}: any) => {
    const [request, setRequest] = useState('getStudents')
    const contextValue = {
        currentRequest: request,
        setCurrentRequest: setRequest
    }

    return (
        <RequestContext.Provider value={contextValue}>
            {children}
        </RequestContext.Provider>
    );
};

function App() {
    const selectStyle = {
        border: '2px solid #FFFFFF', // White border
        color: '#FFFFFF', // White text color
        height: '35px',
    };
    const [specificationSelection, setSpecificationSelection] = useState('graphql')
    const [open, setOpen] = useState(false)

    const toggleDrawer = (input: boolean) => {
        setOpen(input)
    }

    return (
        <ThemeProvider theme={theme}>
            <RequestContextProvider>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    paddingTop: "100px",
                    paddingLeft: "200px",
                    justifyContent: "left"
                }}>
                    {/*<Menu open={open} toggleDrawer={toggleDrawer}/>*/}
                    <div style={{fontFamily: "Montserrat", fontSize: "40px", paddingRight: "10px"}}>Selected
                        Specification:
                    </div>
                    <FormControl style={{width: '300px', paddingTop: "10px"}}>
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
            </RequestContextProvider>
        </ThemeProvider>
    )
}

export default App;
