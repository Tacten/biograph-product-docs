# Service & Medication Requests

## Service Requests

**Service Requests** are formal orders for healthcare services. They can be generated from:
- Patient Encounters (when a practitioner orders a test, procedure, or therapy)
- Inpatient Records (for inpatient care activities)

Each service request tracks:
| Field | Description |
|-------|-------------|
| **Patient** | Who the service is for |
| **Ordered By** | The requesting practitioner |
| **Service** | What was ordered (Lab Test, Procedure, Therapy, etc.) |
| **Status** | Draft, Active, Completed, Cancelled |
| **Priority** | Routine, Urgent, STAT |

## Medication Requests

**Medication Requests** track the fulfillment of medication prescriptions:

| Field | Description |
|-------|-------------|
| **Patient** | The patient |
| **Medication** | The prescribed drug |
| **Dosage & Frequency** | How much and how often |
| **Status** | Draft, Submitted, Cancelled |
| **Prescription Reference** | Link back to the originating encounter |

> Medication requests bridge the gap between what the doctor prescribes and what the pharmacy dispenses, ensuring complete tracking of the medication workflow.
