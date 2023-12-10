import React from "react";
import {TextField} from "@mui/material";
import { makeStyles } from '@mui/styles';
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools"

const useStyles = makeStyles((theme) => ({
    multilineInput: {
        width: '300px',
        border: '2px solid black',
        borderRadius: '4px', // optional: add border-radius for a rounded look
    },
}));

const JsonBox = ({ query }: { query: string }) => {
    const classes = useStyles();

    // const inputJson = JSON.stringify(jsonToRender, null, 2)
    return (
        // <TextField
        //     className={classes.multilineInput}
        //     id="outlined-multiline-static"
        //     label="Multiline"
        //     value={inputJson}
        //     multiline
        //     rows={10}
        //     variant="outlined"
        // />
        <AceEditor
            mode="graphql"
            theme="github"
            value={query}
            name="UNIQUE_ID_OF_DIV"
            editorProps={{$blockScrolling: true}}
            setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true
            }}
        />
    );
}

export default JsonBox;
