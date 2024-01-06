import {gql, useApolloClient} from "@apollo/client";
import React, {useContext, useEffect, useState} from "react";
import {Box} from "@mui/material";
import ActionButton from "../ActionButton";
import MyCodeBlock from "../MyCodeBlock";
import {makeStyles} from "@mui/styles";
import RequestModificationSelection from "../shared/RequestModificationSelection";
import {RequestContext} from "../../App";

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
    const { currentRequest } = useContext(RequestContext)

    const studentsRequest = `query GetStudents {
            students {
                id
                firstName
                lastName
                birthdate 
            }
          }
        `;

    const singleStudentsRequest = `query GetStudents {
            student(id: 2) {
                id
                firstName
                lastName
                birthdate 
            }
          }
        `;

    const studentsWithClassRequest = `query GetStudents {
            students {
                id
                firstName
                lastName
                birthdate
                studentsClass {
                    teacherFirst
                    teacherLast
                    room
                } 
            }
          }
        `;

    const requestMappings: Record<string, string> = {
        getStudents: studentsRequest,
        getOneStudent: singleStudentsRequest,
        getStudentsWithClasses: studentsWithClassRequest,
    }

    useEffect(() => {
        const fetch = async () => {
            const response = await client.query({query: gql`${requestMappings[currentRequest]}`})
            setRecords(response);
            setGetRecords(false)
        }
        fetch();
    }, [getRecords]);

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
                <RequestModificationSelection/>
                <MyCodeBlock code={requestMappings[currentRequest]} language={'graphql'} showLineNumbers={true}/>
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
                    <div style={{height: '50px'}}></div>
                    <MyCodeBlock code={JSON.stringify(records.data, null, 2)} language={'json'}
                                 showLineNumbers={true}/>
            </Box>
        </div>
    );
}

export default StudentsRequest
