import React, { useState } from 'react'
import Container from '@material-ui/core/Container';
import { AccordionScreen } from '../sections/AccordionScreen';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';


export const StepThree = () => {
    const [activate, setactivate] = useState({
        padre: true,
        madre: true,
        acudiente: true
    });

    const handleChange = ({ target }) => {
        setactivate({ ...activate, [target.name]: !target.checked });
    }



    return (
        <>
            <Container>
                <h1>PASO 3: Datos del padre, madre o acudiente</h1>
                <p>Persona/s a cargo del estudiante. Debe selecionar como mínimo una opción.</p>
                <FormControlLabel
                    control={<Checkbox
                        name="padre"
                        onChange={handleChange}
                        color="primary"
                        labe
                    />}
                    label="Padre"
                />
                <FormControlLabel
                    control={<Checkbox
                        name="madre"
                        onChange={handleChange}
                        color="primary"
                        labe
                    />}
                    label="Madre"
                />
                <FormControlLabel
                    control={<Checkbox
                        name="acudiente"
                        onChange={handleChange}
                        color="primary"
                        labe
                    />}
                    label="Acudiente"
                />
                <AccordionScreen title={"Padre"} activate={activate.padre} />
                <AccordionScreen title={"Madre"} activate={activate.madre} />
                <AccordionScreen title={"Acudiente"} activate={activate.acudiente} />

            </Container>
        </>
    )
}
