import fetch from 'node-fetch';

function manejaErros(erro) {
    throw new Error('erro.massage');    
}

async function checaStatus(arrayUrls) {
    try {
        const arrayStatus = await Promise
        .all(arrayUrls
            .map(async url => {
                const res = await fetch(url);
                return res.status;
    }))
    return arrayStatus;
    } catch(erro) {
        manejaErros(erro);
    }
}

function geraArrayDeUrls(arrayLinks) {
    // Object.values(objeto)

    return arrayLinks
        .map(objetoLink => Object
            .values(objetoLink).join())
}

export async function validaURLs(arrayLinks) {
    const links = geraArrayDeUrls(arrayLinks);
    const statusLinks = await checaStatus(links);

    const resultados = arrayLinks
        .map((objeto, indice) => ({
            ...objeto,
            status: statusLinks[indice]
        })) 
    return resultados;   
}