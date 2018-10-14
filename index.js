const express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  IPToASN = require("ip-to-asn");

const client = new IPToASN();

var addresses = ["139.167.218.94", "8.8.8.8"];

app.get('/:ip?', (req, res) => {
  let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  let separateIP = ip.split(":");
  let addresses = (req.params.ip) ? req.params.ip.split(",") : [separateIP[separateIP.length - 1]];

  client.query(addresses, (err, results) => {
    if (err) return err;
    res.send(results);
  });
});

app.listen(port, () => {
  console.log("Server is running on port:", port);
});