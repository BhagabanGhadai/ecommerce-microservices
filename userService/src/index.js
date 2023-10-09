import express from 'express';
import env from './env.js'
import { expressApp } from './server.js';

const startServer = async() => {
    const app = express();
    await expressApp(app);
    // await connectDB()
    app.listen(env.PORT, () => {
    console.log("⚙️  Server is running on port: " + env.PORT);
    }).on('error', (err) => {
        console.log(err)
        process.exit()
    })
    
  };
  startServer();