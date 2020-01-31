const axios = require('axios');

module.exports.getUrlData = (url, callback) => {
    axios.get(url)
        .then(function (response) {
            callback(response);
        })
        .catch(function (e) { })
        .finally(function () { });
}