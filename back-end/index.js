let rebrandlyClient = require("./rebrandly.js");
const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");
app.use(cors());
app
  .get("/:url", (req, res) => {

    const url = `https://www.${req.params.url}`;
    let slashtag = `test-${Math.floor(Math.random() * 999999)}`;

    let linkDef = {
      title: "My first link",
      slashtag: slashtag,
      destination: url,
    };

    let onError = (err) => {
      console.log(JSON.stringify(err));
    };

    let onLinkCreated = (link) => {
      res.status(200).json({
        shortUrl: link.shortUrl,
      });
    };

    rebrandlyClient.createNewLink(linkDef, onLinkCreated, onError);
  })
  .listen(port);
