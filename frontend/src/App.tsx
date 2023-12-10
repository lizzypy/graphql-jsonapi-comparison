import React, {useEffect, useState} from 'react';
import './App.css';
import JsonBox from "./components/JsonBox";
import RequestButton from "./components/RequestButton";
import {Box} from "@mui/material";
import {makeStyles} from "@mui/styles";
import getGraphQLResource from "./api/getGraphQLResource";

const useStyles = makeStyles((theme) => ({
    flexContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: `calc(100% - 400px)`, // Take up 100% width minus 200px for the margins
        margin: `0 200px`,
    },
}));

function App() {
    const classes = useStyles();
    const [records, setRecords] = useState({})
    const [getRecords, setGetRecords] = useState(false)

    useEffect(() => {
        const fetch = async () => {
            const response = await getGraphQLResource('students')
            setRecords(response);
            setGetRecords(false)
        }
        fetch();

    }, [getRecords])

    const onClick = async () => {
        setGetRecords(true);
    }

    const studentsRequest = ` 
        query {
            students {
              id
              firstName
              lastName
              birthdate 
            }
          }
        `;

    return (
        <div className="App">
            <header className="App-header">
                <div className={classes.flexContainer}>
                    <Box>
                        <p>Students Request</p>
                        <RequestButton onClick={onClick} />
                        <JsonBox query={studentsRequest}/>
                    </Box>
                    <Box>
                        <p>Students Response</p>
                        <JsonBox query={""}/>
                    </Box>
                </div>
            </header>
        </div>
    );
}

export default App;
