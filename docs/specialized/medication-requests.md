# Medication Requests

**Medication Requests** formalize the communication between the clinical and pharmacy teams.

## Workflow

1. When a practitioner submits an encounter with drug prescriptions, **Medication Requests** can be generated
2. The pharmacy team views pending requests
3. Each request tracks:

| Field | Description |
|-------|-------------|
| **Patient** | Who the medication is for |
| **Medication** | Which drug is requested |
| **Dosage & Instructions** | How to take it |
| **Quantity** | Amount to dispense |
| **Status** | Draft > Submitted > Completed/Cancelled |
| **Source Encounter** | Which consultation generated this request |

4. Once dispensed, the pharmacist marks the request as **Completed**

## Override Reason Codes

In some cases, medications may need to be substituted or overridden. The system supports **Medication Override Reason Codes** to document why a change was made:

| Reason | Example |
|--------|---------|
| **Out of stock** | Prescribed drug unavailable, substitute provided |
| **Patient preference** | Patient requests a different brand |
| **Cost** | Insurance doesn't cover the prescribed brand |
| **Allergy** | Alternative prescribed due to patient allergy |

> **Audit trail:** All medication changes and overrides are recorded for compliance and quality assurance purposes.
