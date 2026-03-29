# ABDM Integration (India)

Biograph includes integration support for **Ayushman Bharat Digital Mission (ABDM)** — India's national digital health infrastructure initiative.

## What is ABDM?

ABDM is the Government of India's program to create a unified digital health ecosystem across the country. It provides:

- **ABHA (Ayushman Bharat Health Account)** — A unique health ID for every citizen
- **Health Information Exchange** — Standardized sharing of health records between facilities
- **Digital Health Records** — Linking patient records across healthcare providers
- **Health Facility Registry** — National registry of healthcare facilities

## ABDM Settings

Configure your facility's ABDM integration in **ABDM Settings**:

| Setting | Description |
|---------|-------------|
| **Facility ABHA ID** | Your healthcare facility's registered ABDM identifier |
| **API Credentials** | Authentication credentials for ABDM APIs |
| **Environment** | Sandbox (testing) or Production |
| **Enable ABDM** | Toggle ABDM features on/off |

## ABDM Features in Biograph

| Feature | Description |
|---------|-------------|
| **ABHA Number Linking** | Link patients' ABHA numbers to their Biograph records |
| **Consent Management** | Handle patient consent for sharing health records |
| **Health Record Sharing** | Share clinical documents with the ABDM network |
| **Facility Registration** | Register your facility in the Health Facility Registry |

## ABDM Requests

**ABDM Requests** track interactions with the ABDM network:

| Field | Description |
|-------|-------------|
| **Request Type** | Type of ABDM interaction (Consent, Data Share, Verification) |
| **Patient** | The patient involved |
| **Status** | Pending, Completed, Failed |
| **Response** | Data received from ABDM |

## Consent Workflow

1. Patient provides consent for health data sharing
2. Consent details are attached to the Patient record (automatically on patient creation)
3. When another facility requests the patient's records through ABDM, the consent is verified
4. Approved records are shared through the ABDM Health Information Exchange

## Getting Started with ABDM

To enable ABDM integration:

1. Register your facility on the **ABDM Health Facility Registry** (https://facility.abdm.gov.in)
2. Obtain API credentials from the ABDM Sandbox/Production environment
3. Configure the credentials in **ABDM Settings**
4. Begin linking patient ABHA numbers during registration

> **Important:** ABDM integration is specific to healthcare facilities operating in India. The integration follows the standards and protocols defined by the National Health Authority (NHA).

---

## Future Regional Support

Biograph's architecture supports adding regional integrations for other countries. The modular design allows healthcare-specific regulations, coding systems, and government integrations to be added without modifying the core application.

| Region | Potential Integrations |
|--------|----------------------|
| **India** | ABDM, CGHS, ECHS, Ayushman Bharat claims |
| **US** | HL7 FHIR compliance, CMS reporting |
| **UK** | NHS integration standards |
| **Middle East** | DHA/HAAD reporting (UAE) |
| **Africa** | DHIS2 integration |

> If you need a regional integration that isn't currently available, Biograph's open-source nature means you can develop custom modules or contribute to the project.
