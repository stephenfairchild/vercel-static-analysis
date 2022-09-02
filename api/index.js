const { resolve } = require('path')

const config = dynamicLoader();

export default async function (req, res) {
    res.status(200).json(config)
}

function dynamicLoader() {
    return require(resolve(__dirname, "../config.js"))
}
