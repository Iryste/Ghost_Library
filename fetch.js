const apiUrl = 'http://localhost:3000'

export async function fetchData(path) {
    const options = {
        method: 'GET',
        headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify()
    }
    const result = await fetch(`${apiUrl}${path}`, options)
    if (result.ok) {
        return result.json();
    } else {
        throw new Error('Erreur', {cause:result});
    };
};