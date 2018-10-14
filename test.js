const express = require("express"),
    app = express(),
    port = process.env.PORT || 3000,
    IPToASN = require("ip-to-asn");

const client = new IPToASN();

var addresses = ["139.167.218.94", "8.8.8.8"];

client.query(addresses, (err, results) => {
    if (err) return err;
    // console.log(JSON.stringify(results, null, 4))
})

app.get('/:ip?', (req, res) => {
    let addresses1 = (req.params.ip) ? req.params.ip.split(",") : (req.headers['x-forwarded-for'] || req.connection.remoteAddress)
    let addresses = req.params.ip.split(",");
    let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    res.send(addresses1);
    // console.log(req.socket.address());
    // res.send(JSON.stringify(req, undefined, 4));
})

app.listen(port, () => {
    console.log("Server is running on port:", port);
});