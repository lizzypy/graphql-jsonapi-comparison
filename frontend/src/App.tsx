import React, {useEffect, useState} from 'react';
import './App.css';
import ActionButton from "./components/ActionButton";
import {Box} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {gql, useApolloClient, useQuery} from '@apollo/client';
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
    const [getRecords, setGetRecords] = useState(false);
    const [records, setRecords] = useState({data: {}});
    const client = useApolloClient();

    const studentsRequest = `query GetStudents {
            students {
                id
                firstName
                lastName
                birthdate 
            }
          }
        `;
    const GET_STUDENTS = gql`${studentsRequest}`;

    useEffect(() => {
        const fetch = async () => {
            const response = await client.query( { query:GET_STUDENTS })
            setRecords(response);
            setGetRecords(false)
        }
        fetch();
    }, [getRecords]);
    // const { loading, error, data } = useQuery(GET_STUDENTS);

    const onClick = async () => {
        setGetRecords(true);
        return
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
                        <ActionButton onClick={()=> { setRecords({data: {}}); return } } title={'Clear'} />
                        <MyCodeBlock code={JSON.stringify(records.data, null, 2)} language={'json'} showLineNumbers={true}/>
                    </Box>
                </div>
            </header>
        </div>
    );
}

export default App;
