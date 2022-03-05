import React from "react";
import { makeStyles, createStyles } from "@mui/material";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { style } from "@mui/system";

// const useStyles = makeStyles( () => (
//     createStyles( {
//         "button": {
//             borderColor: 'FFB549',
//             color: 'FFB549',
//             fontWeight: 600,
//             marginBottom: '8px',
//             "&:hover": {
//                 backgroundColor: 'FFB549',
//                 color: '#fff'
//             }
//         }
//     })
// ));

const Answer = (props) => {
    return(
        <Stack spacing={2} >
            <Button
                sx={{
                    borderColor: 'orange',
                    color: 'orange',
                    fontWeight: 600,
                    marginBottom: '8px',
                    "&:hover": {
                        borderColor: 'orange',
                        backgroundColor: 'orange',
                         color: '#fff'
                    }
                }}
                variant="outlined"
                onClick={() => props.select(props.content,props.nextId)}
            >
                {props.content}
            </Button>
        </Stack>
    );
}

export default Answer
