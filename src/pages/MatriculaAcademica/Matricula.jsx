import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';

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

const Matricula = () => {

   /*  const [value, setInputValue] = useState({}); */
    const classes = useStyles();
    const history = useHistory();


    const handleNew = () => {
        history.replace('/dashboard/new')
    }
    const handleState = () =>{
        history.replace('/dashboard/state')
    }

    return (
        <>
            <Container fixed>
                <div className={classes.root}>
                    <Grid container spacing={2}>
                        <h1>Modulo de Matrículas</h1>
                        <p>Hola, Juana García. Bienvenido al módulo de MATRÍCULA ACADÉMICAS.
                        Aquí podrá iniciar o consultar el estado de la matrícula.
                            El proceso de matrícula consta de 3 pasos.</p>
                        <Grid item xs={12} sm={6} className={classes.img}>
                            <img src="./assets/img/icon1.png" />
                            <h3>Matricula 2021</h3>
                            <Button variant="contained" color="primary" onClick={handleNew}>
                                INICIAR PROCESO
                            </Button>
                        </Grid><br></br>
                        <Grid item xs={12} sm={6} className={classes.img}>
                            <img src="./assets/img/icon2.png" />
                            <h3>Ver estado de la matricula</h3>
                            <Button variant="contained" color="primary" onClick={handleState}>
                                VER ESTADO
                            </Button>
                        </Grid><br></br>
                    </Grid>
                </div>
            </Container>
        </>
    )
}

export default Matricula;
