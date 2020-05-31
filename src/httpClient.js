export default class HttpClient {
    constructor() {
        this.data = null;
        this.defaultOptions = {
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        }
    }
    async fetch({ url, method, headers, data, credentials }) {
        const options = Object.create(this.defaultOptions);
        options.headers = headers;
        options.method = method;
        options.data = JSON.stringify(data);
        options.credentials = credentials;

        if (this.data) {
            return this.data;
        } else {
            try {
                const response = await fetch(url, options);
                return response.json()
            } catch (error) {
                console.log(error);
                return error;
            }
        }
    }
}