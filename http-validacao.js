import fetch from 'node-fetch';

async function checaStatus(arrayUrls) {
    const arrayStatus = await Promise
        .all(arrayUrls
            .map(async url => {
                const res = await fetch(url);
                return res.status;
    }))
    return arrayStatus;
}

function geraArrayDeUrls(arrayLinks) {
    // Object.values(objeto)

    return arrayLinks
        .map(objetoLink => Object
            .values(objetoLink).join())
}

export default async function validaURLs(arrayLinks) {
    const links = geraArrayDeUrls(arrayLinks);
    const statusLinks = await checaStatus(links);
    return statusLinks;
}