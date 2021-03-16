// const URL = 'https://schoolarapp-usco.herokuapp.com/api';
const URL = 'http://192.168.1.25:8081/api';

const fetchSinToken = ( endpoint, data, method = 'GET' ) => {

    const url = `${ URL }/${ endpoint }`;

    if ( method === 'GET' ) {
        return fetch( url );
    } else {
        return fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify( data )
        });
    }
}

const fetchConToken = ( endpoint, data, method = 'GET' ) => {

    const url = `${ URL }/${ endpoint }`;

    const {token} = JSON.parse(localStorage.getItem('Authorization')) || '';

    if ( method === 'GET' ) {
        return fetch( url, {
            method,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    } else {
        return fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify( data )
        });
    }
}



export {
    fetchSinToken,
    fetchConToken
}