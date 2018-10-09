var IPToASN = require("ip-to-asn");

var client = new IPToASN();

var addresses = ["139.167.2.172"];

client.query(addresses, function(err, results) {
  if (err) {
    console.error(err);
    return;
  }

  console.log(results);
});