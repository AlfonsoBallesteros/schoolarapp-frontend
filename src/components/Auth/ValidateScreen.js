import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { fetchSinToken } from '../../helpers/AuthFetch';

export const ValidateScreen = () => {

    const {token} = useParams();

    useEffect(() => {
        const handleAutenticate = async() => {
            try {
                const res = await fetchSinToken(`activate/${token}`);
                const ResJ = await res.json();
                console.log(ResJ)
            } catch (error) {
                console.log(error)
            }
            
        }
        handleAutenticate();
    }, [token])

    return (
        <div>
            {
                token
            }
        </div>
    )
}
