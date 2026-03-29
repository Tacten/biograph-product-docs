# Appointment Billing Integration

Biograph can automatically generate invoices when appointments are booked:

## Automatic Invoicing

When **Automate Appointment Invoicing** is enabled in Healthcare Settings:

1. A **Sales Invoice** is automatically created when the appointment is saved
2. The invoice includes the practitioner's consultation charges
3. The appointment is linked to the invoice for tracking
4. If the appointment is cancelled, the invoice can be cancelled too

## Manual Invoicing

When automatic invoicing is off:
1. Book the appointment without generating an invoice
2. Create the invoice manually from the appointment record
3. Or generate invoices in bulk at the end of the day

## Fee Validity Integration

- If a patient has a valid **Fee Validity** record, follow-up appointments within the validity period **do not generate a new invoice**
- This is useful for post-consultation follow-ups that are included in the original consultation fee
