const getGeneral = () => {
    return {
        "Project": "SKL Project > API",
        "Owner": "Im_JVallejo",
        "Host": "Not exist for the moment",
        "Description": "About me https://sklconnect.com/",
        "IG": "https://www.instagram.com/Im_JVallejo"
    }
}

const getError = () => {
    return {
        "status": 400,
        "message": "La funcion a la que intentas acceder no existe.",
        "result": "About this project https://sklconnect.com/",
    }
}

export { getGeneral, getError };
