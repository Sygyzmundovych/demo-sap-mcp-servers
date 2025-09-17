'use strict';

const cds = require('@sap/cds');

// Extra diagnostics to verify that services are discovered and mounted
cds.once('served', (services) => {
  for (const s of services) {
    const name = s.name || '(anonymous)';
    const path = s.path || '(no path)';
    console.log(`[cds] serving ${name} at ${path}`);
  }
});

cds.once('listening', (url) => {
  console.log(`[cds] listening on ${url}`);
});

// Bootstraps the CAP server and serves all defined services
cds.server();
