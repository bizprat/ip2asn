const express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  IPToASN = require("ip-to-asn");

const client = new IPToASN();

// var addresses = ["139.167.218.94", "8.8.8.8"];

app.get("/:ip", (req, res) => {
  let addresses = req.params.ip.split(",");
  client.query(addresses, function(err, results) {
    if (err) {
      // console.error(err);
      res.send("Error");
      return;
    }

    // console.log(results);
    res.send(results);
    // res.send(req.params.ip);
  });
});

app.listen(port, () => {
  console.log("Server is running on port:", port);
});
