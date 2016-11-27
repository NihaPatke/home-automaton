const express = require('express');
const app = express();
const resources = {};

app.get('/api/v1/resource/:resourceId', function(req, res) {
  const resourceId = req.params.resourceId;
  res.send(resources[resourceId] || 'OFF');
});

app.put('/api/v1/resource/:resourceId', function(req, res) {
  const resourceId = req.params.resourceId;
  resources[resourceId] = req.query.state;
  res.send(resources[resourceId]);
});

app.use(express.static('public'));

app.listen(3001);
