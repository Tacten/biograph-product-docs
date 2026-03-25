# Insurance Claim Workflow

The insurance claim process tracks reimbursement requests from your facility to insurance companies.

## Claim Creation

Claims can be created:
- **From invoices** — After services are rendered and invoiced
- **From coverage records** — Based on pre-calculated coverage

## Claim Details

| Field | Description |
|-------|-------------|
| **Patient** | The insured patient |
| **Insurance Payor** | The insurance company |
| **Policy Number** | Patient's policy reference |
| **Claim Amount** | Total amount being claimed |
| **Coverage Details** | Breakdown of covered services |
| **Supporting Documents** | Clinical documents, invoices, prescriptions |

## Claim Status Workflow

```
+----------+      +----------+      +----------+      +----------+
|  Draft   | ---> |Submitted | ---> | Approved | ---> | Settled  |
|          |      |          |      |          |      |          |
+----------+      +----------+      +----------+      +----------+
                        |                 |
                        v                 v
                  +----------+      +----------+
                  | Rejected |      | Partially|
                  +----------+      | Approved |
                                    +----------+
```

| Status | Description |
|--------|-------------|
| **Draft** | Claim being prepared |
| **Submitted** | Claim sent to insurance payor |
| **Approved** | Payor has approved the full claim |
| **Partially Approved** | Payor approved part of the claim |
| **Rejected** | Claim was denied (with reason) |
| **Settled** | Payment received from the payor |

## Claim Status Update

Track the progress of submitted claims:

1. Update the claim status as responses are received from the payor
2. Record approval/rejection reasons
3. For partial approvals, document which items were approved and which were denied
4. Track appeal submissions for rejected claims

## Payor Payment Handling

When the insurance company settles a claim:

1. Record the payment received via **Payment Entry**
2. The system links the payment to the corresponding insurance claim
3. The claim status updates to **Settled**
4. The patient's invoice reflects the insurance payment
5. Any remaining balance becomes the patient's responsibility

> **Integration:** Payment entries are automatically validated against insurance claims to ensure correct allocation of insurance payments.
