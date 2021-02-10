const request = require("request");
module.exports = () => {
    return new Promise((resolve, reject) => {
        request.get(
            {
                auth: {
                    user: "M2M@OTPRUEBA", pass: "M2M@OTPRUEBA"
                },
                url: "https://sitirio.somosmovilidad.gov.co/api/external-system-gateway/rest/routes",

            }
            , (error, response, body) => {
                if (error) {
                    reject(error);
                }
                resolve(JSON.parse(body));
            });
    });
}
