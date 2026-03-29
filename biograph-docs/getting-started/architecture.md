# System Architecture Overview

Biograph operates as a module within the Frappe/ERPNext ecosystem:

| Layer | Technology |
|-------|-----------|
| **User Interface** | Frappe Desk (web-based, responsive) |
| **Patient Portal** | Frappe Website (self-service for patients) |
| **Application Logic** | Python (server-side), JavaScript (client-side) |
| **Database** | MariaDB or PostgreSQL |
| **Platform** | Frappe Framework + ERPNext |

## Integrated ERPNext Modules

Biograph works alongside these ERPNext modules:

- **Accounts** — Financial management, invoicing, and payment processing
- **Stock / Inventory** — Pharmacy stock management and medical supplies
- **HR** — Staff management for healthcare practitioners
- **Buying** — Procurement of medical equipment and supplies
- **Asset Management** — Medical equipment tracking
