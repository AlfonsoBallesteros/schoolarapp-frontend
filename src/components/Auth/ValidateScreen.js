import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { fetchSinToken } from '../../helpers/AuthFetch';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router';

export const ValidateScreen = () => {
    const history = useHistory()
    const {token} = useParams();

    useEffect(() => {
        const handleAutenticate = async() => {
            try {
                const res = await fetchSinToken(`activate/${token}`);
                const ResJ = await res.json();
                if (!res.ok) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: ResJ.message,
                        confirmButtonColor: "#219653"
                    }).then((result) => {
                        if (result.isConfirmed) {
                            history.replace('/auth')
                        }
                    })
                }

                if(res.ok){
                    Swal.fire({
                        icon: 'success',
                        title: 'Estudiante Validado',
                        text: ResJ.message,
                        confirmButtonColor: "#219653"
                    }).then((result) => {
                        if (result.isConfirmed) {
                            history.replace('/auth')
                        }
                    })

                }

            } catch (error) {
                console.log(error)
            }
            
        }
        handleAutenticate();
    }, [token])

    return (
        <div>
            
        </div>
    )
}
