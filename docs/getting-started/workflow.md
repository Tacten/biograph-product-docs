# Healthcare Workflow Overview

Biograph supports the complete healthcare delivery workflow:

<pre>
Patient Registration
        │
        ▼
Appointment Booking ◄──── Practitioner Availability
        │
        ▼
Check-in & Vitals Recording
        │
        ▼
Patient Encounter (Consultation)
        │
        ├──► Medication Prescription ──► Pharmacy Dispensing
        │
        ├──► Lab Test Order ──► Sample Collection ──► Results ──► Report
        │
        ├──► Procedure Order ──► Clinical Procedure
        │
        ├──► Therapy Order ──► Therapy Plan ──► Sessions
        │
        └──► Inpatient Admission ──► Bed Assignment ──► Ward Care ──► Discharge
                                                                         │
        ┌────────────────────────────────────────────────────────────────┘
        ▼
Billing & Invoice Generation
        │
        ├──► Direct Patient Payment
        │
        └──► Insurance Claim ──► Payor Processing ──► Settlement
<pre>
