import dotenv from "dotenv";

/** Configure environment variables. */
dotenv.config();

/** Get environment variables for  */
const MONGO_USERNAME = process.env.MONGO_USERNAME || "";
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || "";
const MONGO_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@expressmongotut.qxyrkqq.mongodb.net`;

const SERVER_PORT = process.env.PORT
    ? Number(process.env.PORT)
    : 53073;

export const Config = {
    mongo: {
        url: MONGO_URL,
    },
    server: {
        port: SERVER_PORT,
    },
};
