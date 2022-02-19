import React from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

    const Answer = (props) => {
        return(
            <Stack spacing={2}>
                <Button variant="contained">
                    {props.content}
                </Button>
            </Stack>
        );
    }

export default Answer
