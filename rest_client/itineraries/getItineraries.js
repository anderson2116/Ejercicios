const request = require("request");
module.exports = (routeId) => {
    return new Promise((resolve, reject) => {
        request.get({
            headers: { 'content-type': 'application/json' },
            auth: {
                user: "M2M@OTPRUEBA", pass: "M2M@OTPRUEBA"
            },
            url: 'https://sitirio.somosmovilidad.gov.co/api/external-system-gateway/rest/itineraries',
            body: JSON.stringify({ "routeId":routeId })
        }, (error, response, body) => {
            if (error) {
                reject(error);
            }
            resolve(JSON.parse(body));
        });
    });
}


