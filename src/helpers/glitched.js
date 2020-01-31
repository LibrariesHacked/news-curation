const axios = require('axios');

module.exports.getUrlData = (url, callback) => {
    axios.get(url)
        .then(function (response) {
            callback(response);
        })
        .catch(function (e) { })
        .finally(function () { });
}

module.exports.extractContentTrustIndicators = (data) => {
    return {
        positive: data.content.trustIndicators.positive,
        negative: data.content.trustIndicators.positive,
        counts: {
            positive: data.content.trustIndicators.positive.length,
            negative: data.content.trustIndicators.negative.length
        }
    }
}