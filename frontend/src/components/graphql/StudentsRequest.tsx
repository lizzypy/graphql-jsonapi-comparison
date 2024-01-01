import {gql, useApolloClient} from "@apollo/client";
import React, {useEffect, useState} from "react";
import {Box} from "@mui/material";
import ActionButton from "../ActionButton";
import MyCodeBlock from "../MyCodeBlock";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    flexContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: `calc(100% - 400px)`, // Take up 100% width minus 200px for the margins
        margin: `0 200px`,
    },
    sectionHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline'
    },
    codeSectionLabel: {
        fontFamily: "Montserrat",
        fontSize: "28px",
        color: "white"
    },
}));

const StudentsRequest = () => {
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
            const response = await client.query({query: GET_STUDENTS})
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
        <div className={classes.flexContainer}>
            <Box>
                <Box className={classes.sectionHeader}>
                    <p className={classes.codeSectionLabel}>Students Request</p>
                    <ActionButton onClick={onClick} title={'Request'}/>
                </Box>
                <Box>
                    <MyCodeBlock code={studentsRequest} language={'graphql'} showLineNumbers={true}/>
                </Box>
            </Box>
            <Box>
                <Box className={classes.sectionHeader}>
                    <p className={classes.codeSectionLabel}>Students
                        Response</p>
                    <ActionButton onClick={() => {
                        setRecords({data: {}});
                        return
                    }} title={'Clear'}/>
                </Box>
                <Box>
                    <MyCodeBlock code={JSON.stringify(records.data, null, 2)} language={'json'}
                                 showLineNumbers={true}/>
                </Box>
            </Box>
        </div>
    );
}

export default StudentsRequest
