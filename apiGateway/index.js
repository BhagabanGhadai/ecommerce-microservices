const express=require('express');
const proxy=require('express-http-proxy')
const app=express()

/**for user service */
app.use(proxy('http://localhost:8081'))

app.listen(8000,()=>{
    console.log('ApiGate is Active✅')
}).on('error',()=>{
    console.log(error)
    process.exit()
})

/**
 * routing
 * caching
 * error handling
 * montoring
 * logging
 * authentication
 * ratelimit
 */