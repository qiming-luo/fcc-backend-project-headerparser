const express = require('express');
const router = express.Router();

//parent path  '/api'
router.get('/whoami', (req, res)=>{
    console.log(req);
    const language = req.headers['accept-language'];
    const software = req.headers['user-agent'];
    const ipaddress = req.ip;
    res.json({ipaddress, language, software});
})


module.exports = router;