# Northwind CAP Proxy (Minimal)

This is the simplest possible CAP Node.js service that proxies read requests to the public Northwind OData V2 service at:
https://services.odata.org/northwind/northwind.svc/

It exposes an OData V4 service locally, mapping two entity sets:
- Products
- Categories

The handlers forward READ requests to the remote Northwind OData V2 API.

## Project Structure

- package.json — Minimal dependencies and configuration (only @sap/cds)
- server.js — Boots the CAP server via cds.server()
- srv/northwind-service.cds — Defines a minimal service with Products and Categories entities
- srv/northwind-service.js — Proxies READ requests to the remote OData V2 service
- srv/external/Northwind.xml — Downloaded Northwind service doc/$metadata (not required at runtime for this simplest proxy)

## Install

Requirements:
- Node.js 18+ (recommended LTS)
- npm

Install dependencies:
- cd northwind-cap
- npm install

Note: If you run into an npm/npx environment issue like “npm error could not determine executable to run”, ensure your Node.js/npm installation is healthy. For macOS users, it can help to:
- Close all terminals, reopen a new terminal
- Verify Node.js version: node -v (should be >=18)
- Verify npm version: npm -v
- If needed, reinstall Node.js from nodejs.org or via your package manager

## Run

- npm start

By default CAP serves at http://localhost:4004/.
Service endpoint is derived from the service name “NorthwindService” as /northwind/.

Examples:
- Service document: http://localhost:4004/northwind/
- Metadata: http://localhost:4004/northwind/$metadata
- Top 3 products: http://localhost:4004/northwind/Products?$top=3
- Top 3 categories: http://localhost:4004/northwind/Categories?$top=3

cURL example:
- curl "http://localhost:4004/northwind/Products?\$top=3"

## How It Works

- cds.requires.Northwind is configured in package.json with kind "odata-v2" and the remote URL.
- At runtime, srv/northwind-service.js connects to that remote using cds.connect.to('Northwind') and forwards incoming READ queries:
  - this.on('READ', 'Products', req => northwind.run(req.query))
  - this.on('READ', 'Categories', req => northwind.run(req.query))

This is sufficient for a read-only proxy use case without importing the external model.

## Notes

- This minimal setup does NOT require @sap/cds-dk or the cds CLI to run. The server is started via “node server.js”.
- If you prefer a model-driven approach (projections against the real external schema), you can import the Northwind $metadata into CDS when your npm/npx setup allows the cds CLI:
  - curl -fsSL "https://services.odata.org/V2/Northwind/Northwind.svc/$metadata" -o srv/external/Northwind.xml
  - npx @sap/cds-dk import srv/external/Northwind.xml --as cds
  - Then reference the generated CDS model under cds.requires.Northwind.model
- For the simplest working app, the above proxy implementation is enough.

# Vibe coding with Cline

Initial prompt: "Create the simplest CAP service application for the external https://services.odata.org/northwind/northwind.svc/"

Tokens: up **1.2m** down **67.3k** with GPT-5

## Focus Chain List for Task 1758122301628

<!-- Edit this markdown file to update your focus chain focusChain list -->
<!-- Use the format: - [ ] for incomplete items and - [x] for completed items -->

- [x] Analyze requirements
- [x] Scaffold minimal CAP proxy (package.json, server.js, srv/*.cds, srv/*.js)
- [x] Configure cds.requires for remote Northwind (odata-v2, URL)
- [x] Install dependencies (including SAP Cloud SDK http client/resilience)
- [x] Set service path to /northwind
- [x] Start server and verify endpoints (Categories and Products)
- [x] Provide README with run instructions and notes

<!-- Save this file and the focusChain list will be updated in the task -->


# License

Sample use only.
