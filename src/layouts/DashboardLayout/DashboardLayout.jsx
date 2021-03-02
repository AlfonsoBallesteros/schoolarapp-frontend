import { useStyles } from './styles';
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { useState } from 'react';
import CopyRight from '../../components/CopyRight/CopyRight';
import Chart from '../../components/Chart'
import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';
import DashboardRouter from '../../routers/DashboardRouter';

const DashboardLayout = () => {
    const classes = useStyles();

    const [open, setOpen] = useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };


    const fixedHeightPaper = classNames(classes.paper, classes.fixedHeight);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Header open={open}
                handleDrawerOpen={handleDrawerOpen}
            />
            <SideBar open={open} handleDrawerClose={handleDrawerClose}/>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        {/* Formularios */}
                        <Grid item xs={12} md={8} lg={9}>
                            {/* <Paper className={fixedHeightPaper}>
                                <Chart/>
                            </Paper> */}
                            <DashboardRouter/>
                        </Grid>
                    </Grid>
                    <Box pt={4}>
                        <CopyRight />
                    </Box>
                </Container>
            </main>
        </div>
    )
}

export default DashboardLayout
