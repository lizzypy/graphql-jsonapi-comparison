import React, {useEffect, useState} from "react";
import {Box, TextField} from "@mui/material";
import ActionButton from "../ActionButton";
import MyCodeBlock from "../MyCodeBlock";
import {makeStyles} from "@mui/styles";
// import {useQuery} from "@tanstack/react-query";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    flexContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: `calc(100% - 400px)`, // Take up 100% width minus 200px for the margins
        margin: `0 200px`,
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
    const [studentsRequest, setStudentsRequest] = useState('api/v1/students')

    useEffect(() => {
        axios
            .get(`http://localhost:3000/${studentsRequest}`)
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
                <p className={classes.codeSectionLabel}>Students Request</p>
                <ActionButton onClick={onClick} title={'Request'}/>
                <TextField
                    style={{minWidth: "500px"}}
                    InputProps={{
                        style: {
                            color: 'white',
                            border: '2px solid #FFFFFF',
                        },
                    }}
                    value={studentsRequest}
                    onChange={(event)=>setStudentsRequest(event.target.value)}
                />
            </Box>
            <Box>
                <p className={classes.codeSectionLabel}>Students
                    Response</p>
                <ActionButton onClick={() => {
                    setRecords({data: {}})
                    return
                }} title={'Clear'}/>
                <MyCodeBlock code={JSON.stringify(records.data, null, 2)} language={'json'}
                             showLineNumbers={true}/>
            </Box>
        </div>
    );
}

export default JSONStudentsRequest
