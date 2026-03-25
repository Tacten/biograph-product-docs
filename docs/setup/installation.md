# Installation and Environment Setup

## Prerequisites

| Requirement | Details |
|-------------|---------|
| **ERPNext** | Version 15 or later, fully configured |
| **Python** | 3.10 or higher |
| **Frappe Bench** | Latest stable version |
| **Database** | MariaDB 10.6+ or PostgreSQL 14+ |

## Installation

```bash
# Navigate to your bench directory
cd frappe-bench

# Download Biograph
bench get-app https://github.com/Tacten/biograph

# Install on your site
bench --site your-site.com install-app healthcare

# Restart the bench
bench restart
```

After installation, Biograph automatically:
- Creates the Healthcare module and workspace
- Sets up default roles (Healthcare Administrator, Physician, Nursing User, Laboratory User, etc.)
- Adds healthcare-specific fields to Sales Invoice and Payment Entry
- Creates the Patient Portal for patient self-service access
