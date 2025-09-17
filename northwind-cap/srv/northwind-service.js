'use strict';

const cds = require('@sap/cds');

module.exports = cds.service.impl(async function () {
  // Connect once to the remote Northwind OData V2 service as configured in package.json (cds.requires.Northwind)
  const northwind = await cds.connect.to('Northwind');

  // Minimal proxy: forward READ queries for our entities to the remote service
  this.on('READ', 'Products', req => northwind.run(req.query));
  this.on('READ', 'Categories', req => northwind.run(req.query));
});
