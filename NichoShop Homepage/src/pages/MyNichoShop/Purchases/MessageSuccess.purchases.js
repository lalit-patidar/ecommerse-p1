import React, { useState } from "react";

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Button, ButtonBase, CssBaseline, Divider, FormControl, Grid, MenuItem, Pagination, Select, Tab, Tabs } from "@mui/material";
import { Box, styled } from "@mui/system";
import { red, blue, grey, green } from "@mui/material/colors";
import { Dropdown, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {setDetailItem, setPublicPage} from '../../../actions/actions'
import CheckIcon from '@mui/icons-material/Check';


function MessageSuccess() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed>
                <Box sx={{border: "1px solid #2AAC27", borderRadius: "5px", mt: 2, p: 2, width: "60%"}}>
                    <Typography variant="h5" component="h5" sx={{color : green[500]}}>
                        <CheckIcon /> Message sent
                    </Typography>
                    <Typography variant="subtitle1" component="h6">
                    Your message has been sent to username
                    </Typography>
                    <Typography variant="body2" component="p" style={{margin : "5px 0"}}>
                    You should expect a response within 1-2 working days. A copy of this message is in your Messages Sent folder.
                    </Typography>
                    <Divider sx={{mt: 2, mb : 2}} />
                    <Typography variant="subtitle1" component="h6">
                    What Would you like next? 
                    </Typography>
                    <Typography variant="subtitle1" component="h6" color={blue[500]}>
                    Return to previous page
                    </Typography>
                    <Typography variant="subtitle1" component="h6" color={blue[500]}>
                    Go to Message
                    </Typography>
                    <Typography variant="subtitle1" component="h6" color={blue[500]}>
                    Go to My MyNichoShop
                    </Typography>
                </Box>
            </Container>
        </React.Fragment>
    );
}

export default MessageSuccess;