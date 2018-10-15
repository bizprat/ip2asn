# IP2ASN

Find ASN, country, CIDR, registrar, registration date and description of IP address (works for both IPv4 and IPv6). There is no limit for the query.

## How to install

* Make sure you have [yarn](https://yarnpkg.com/en/) installed.
* Run ``` yarn install ``` command in the current directory.

## How to use

Deploy the code to server and open the URL in the browser. To find the details of any IP pass it in the URL like the example given below.

**Example:**

https://example.com/8.8.8.8

or separate multiple IP addresses by comma

https://example.com/8.8.8.8,1.1.1.1

If no parameters passed, it will automatically pick up requester's IP

**Response:**

```
{
  "8.8.8.8": {
    "range": "8.8.8.0/24",
    "countryCode": "US",
    "ASN": "15169",
    "registrar": "arin",
    "dateString": "1992-12-01",
    "description": "GOOGLE - Google LLC, US"
  },
  "1.1.1.1": {
    "range": "1.1.1.0/24",
    "countryCode": "AU",
    "ASN": "13335",
    "registrar": "apnic",
    "dateString": "2011-08-11",
    "description": "CLOUDFLARENET - Cloudflare, Inc., US"
  }
}
```

# Maintainer

This code is maintained by [Prateek Anand](https://www.facebook.com/prateek707), contact for any type of query.