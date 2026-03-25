# Security & Compliance

## Authentication & Session Management

Biograph inherits Frappe's robust security features:

- **Two-factor authentication** — Available for all users
- **Session timeout** — Configurable idle session expiry
- **Password policies** — Minimum strength requirements
- **Login attempts** — Account lockout after failed attempts

## Data Encryption

- **HTTPS/TLS** — All data transmitted over encrypted connections
- **Database encryption** — Supports encrypted database connections
- **File storage** — Attachments stored securely with access controls

## Audit Trail

Every action in Biograph is tracked:

- **Version history** — All document changes are versioned with timestamp and user
- **Activity log** — User actions are logged for compliance auditing
- **Medical records** — Automatic medical record creation on document submission, with deletion tracking on cancellation
- **Document workflow states** — Draft > Submitted > Cancelled workflow ensures data integrity
