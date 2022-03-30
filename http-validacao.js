function geraArrayDeUrls(arrayLinks) {
    // Object.values(objeto)

    return arrayLinks
        .map(objetoLink => Object
            .values(objetoLink).join())
}


export default function validaURLs(arrayLinks) {
    return geraArrayDeUrls(arrayLinks)
}