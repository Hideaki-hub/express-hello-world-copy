const express = require('express');
const request = require('request');
const app = express();
const PORT = process.env.PORT || 3001;

app.use((req, res) => {
  const targetUrl = req.query.url;
  if (!targetUrl) {
    return res.status(400).send("URL parameter is required");
  }

  request(targetUrl).pipe(res);
});

app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});
