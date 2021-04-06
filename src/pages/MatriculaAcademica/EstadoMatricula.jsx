import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Button } from '@material-ui/core';
import ArrowBack from '@material-ui/icons/ArrowBack';
import { ArrowBackIos } from '@material-ui/icons';


const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
    img: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 10,
    },

}));

const EstadoMatricula = () => {
    const classes = useStyles();
    return (
        <>
            <Container fixed>
                <div className={classes.root}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <ArrowBack />
                            <h1>Estado de la matrícula</h1>
                        </Grid>
                        <Grid item xs={12} sm={12} className={classes.img}>
                            <img src="/assets/img/estado1.png" />
                            <h3>Sin registros</h3>
                            <p>No posee registro del estado de la matrícula. Realice el proceso de matrícula o diríjase al módulo de matrículas.</p>
                            <Button variant="contained" color="primary">
                                INICIAR PROCESO
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </>
    )
}
export default EstadoMatricula;
