import * as React from 'react';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '../Paper/Paper';
import ImgCurve from "../../img/productCurvyLines.png"

function AppForm(props) {
    const { children } = props;

    return (
        <Box
            sx={{
                display: 'flex',
                backgroundImage: {ImgCurve},
                backgroundRepeat: 'no-repeat',
            }}
        >
            <Container maxWidth="sm">
                <Box sx={{ mt: 7, mb: 12 }}>
                    <Paper
                       sx={{ py: { xs: 4, md: 8 }, px: { xs: 3, md: 6 } }}
                        background={"light"}>
                        {children}
                    </Paper>
                </Box>
            </Container>
        </Box>
    );
}

AppForm.propTypes = {
    children: PropTypes.node,
};

export default AppForm;
