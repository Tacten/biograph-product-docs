# Diagnostic Reports

**Diagnostic Reports** are the final, formal reports generated from lab test results. They follow FHIR standards and serve as the official record of laboratory findings.

## Report Contents

| Section | Description |
|---------|-------------|
| **Patient Information** | Name, age, gender, patient ID |
| **Test Details** | Test name, date, requesting practitioner |
| **Results** | All observations with values and reference ranges |
| **Interpretation** | Overall interpretation by the lab |
| **Conclusion** | Summary findings |
| **Verified By** | Lab technician / approver details |

## Print Formats

Biograph includes customizable print formats for lab reports:
- **Standard format** — Clean, professional layout
- **Custom formats** — Create your own using Frappe's print format builder
- **Barcode support** — Include patient and report barcodes
- **Multi-test reports** — Combine multiple test results into a single report

## Approval Workflow

For labs requiring a review before results are released:
1. Lab technician enters results and submits the test
2. **LabTest Approver** reviews the results
3. Approver can approve, reject, or request re-testing
4. Once approved, the diagnostic report is finalized and becomes available to the requesting practitioner

> **Patient Portal:** When configured, patients can view their lab results through the patient portal once reports are finalized.
