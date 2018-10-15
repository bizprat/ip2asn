const express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  IPToASN = require("ip-to-asn");

const client = new IPToASN();

app.get("/:ip?", (req, res) => {
  let ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  let separateIP = ip.split(":");
  let addresses = req.params.ip
    ? req.params.ip.split(",")
    : [separateIP[separateIP.length - 1]];

  console.log(separateIP);

  client.query(addresses, (err, results) => {
    if (err) return err;
    res.send(separateIP);
  });
});

app.listen(port, () => {
  console.log("Server is running on port:", port);
});
