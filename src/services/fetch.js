export const request = (url) => {

    return fetch(url)
        .then((response) => {

            return response.json();
        });
}