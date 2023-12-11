import React, {useEffect, useState} from 'react';
import './App.css';
import ActionButton from "./components/ActionButton";
import {Box} from "@mui/material";
import {makeStyles} from "@mui/styles";
import getGraphQLResource from "./api/getGraphQLResource";
import MyCodeBlock from "./components/MyCodeBlock";

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

    const studentsRequest = ` query {
            students {
                id
                firstName
                lastName
                birthdate 
            }
          }
        `;

    useEffect(() => {
        const fetch = async () => {
            const response = await getGraphQLResource(studentsRequest)
            setRecords(response);
            setGetRecords(false)
        }
        fetch();

    }, [getRecords])

    const onClick = async () => {
        setGetRecords(true);
    }

    return (
        <div className="App">
            <header className="App-header">
                <div className={classes.flexContainer}>
                    <Box>
                        <p>Students Request</p>
                        <ActionButton onClick={onClick} title={'Request'} />
                        <MyCodeBlock code={studentsRequest} language={'graphql'} showLineNumbers={true}/>
                    </Box>
                    <Box>
                        <p>Students Response</p>
                        <ActionButton onClick={()=> { return } } title={'Clear'} />
                        <MyCodeBlock code={JSON.stringify(records)} language={'json'} showLineNumbers={true}/>
                    </Box>
                </div>
            </header>
        </div>
    );
}

export default App;
