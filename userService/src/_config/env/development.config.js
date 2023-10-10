import dotenv from 'dotenv';
dotenv.config({path:'./.env'});


export default {
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV,
    mongo: {
        DATABASE_URL: process.env.DATABASE_URL,
        DB_NAME: process.env.DB_NAME
    }
}
