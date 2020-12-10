import express from 'express';

const router = express.Router();

export const exampleRoute = router.use(function(req, res, next){
    console.log(req.url + "@" + Date.now());
    next();
});

router.get('/testGet', function(req, res){
    res.send({
        message: "Test Successful"
    })
    return console.log("test successul");
});

router.post('/testPost', function(req, res){
    res.send({
        title: "Test Successful, heres the proof",
        data: req.body.data
    });
    return console.log("test successul");
});