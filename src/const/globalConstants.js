require('dotenv').config();

const parsePort = (value) => {
    const port = Number(value || 5000);

    if (!Number.isInteger(port) || port < 1 || port > 65535) {
        throw new Error(`Invalid PORT value: ${value}`);
    }

    return port;
}

module.exports = {
    PORT: parsePort(process.env.PORT),
    DB_NAME: process.env.DB_NAME,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
}
