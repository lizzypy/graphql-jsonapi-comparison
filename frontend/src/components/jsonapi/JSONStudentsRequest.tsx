import React, {useContext, useEffect, useState} from "react";
import {Box, TextField} from "@mui/material";
import ActionButton from "../ActionButton";
import MyCodeBlock from "../MyCodeBlock";
import {makeStyles} from "@mui/styles";
// import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import RequestModificationSelection from "../shared/RequestModificationSelection";
import {RequestContext} from "../../App";

const useStyles = makeStyles((theme) => ({
    flexContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: `calc(100% - 400px)`, // Take up 100% width minus 200px for the margins
        margin: `0 200px`,
    },
    sectionHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "600px",
        alignItems: 'baseline'
    },
    codeSectionLabel: {
        fontFamily: "Montserrat",
        fontSize: "28px",
        color: "white"
    }
}));


const JSONStudentsRequest = () => {
    const classes = useStyles();
    const [getRecords, setGetRecords] = useState(false);
    const [records, setRecords] = useState({data: {}});
    const { currentRequest } = useContext(RequestContext)

    const requestMappings: Record<string, string> = {
        getStudents: 'api/v1/students',
        getOneStudent: 'api/v1/students/2',
        getStudentsWithClasses: 'api/v1/students?include=students_class'
    }

    useEffect(() => {
        axios
            .get(`http://localhost:3000/${requestMappings[currentRequest]}`)
            .then((res) => {
                setRecords({data: {...res.data}})
                setGetRecords(false)
            })
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
                <TextField
                    style={{minWidth: "600px",}}
                    InputProps={{
                        style: {
                            color: 'white',
                            border: '2px solid #FFFFFF',
                            height: '35px'
                        },
                    }}
                    value={`${requestMappings[currentRequest]}`}
                />
            </Box>
            <Box>
                <Box className={classes.sectionHeader}>
                    <p className={classes.codeSectionLabel}>Students
                        Response</p>
                    <ActionButton onClick={() => {
                        setRecords({data: {}})
                        return
                    }} title={'Clear'}/>
                </Box>
                <MyCodeBlock code={JSON.stringify(records.data, null, 2)} language={'json'}
                             showLineNumbers={true}/>
            </Box>
        </div>
    );
}

export default JSONStudentsRequest
