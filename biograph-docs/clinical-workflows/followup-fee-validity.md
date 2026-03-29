# Follow-up & Fee Validity

## Follow-up Appointments

From a completed encounter, you can:

1. Click **Create > Patient Appointment** to schedule a follow-up
2. The new appointment is linked to the original encounter
3. The practitioner and patient details are pre-filled

## Fee Validity

When a consultation fee is paid, a **Fee Validity** record is created:

| Field | Description |
|-------|-------------|
| **Patient** | The patient who paid |
| **Practitioner** | The consulting practitioner |
| **Valid Till** | Expiration date of the fee validity |
| **Status** | Active or Expired |

**How it works:**
- If the patient returns for a follow-up within the validity period, no additional consultation fee is charged
- The validity period is configurable (e.g., 7 days, 14 days, 30 days)
- The system checks fee validity automatically when creating appointments
- Expired validities are marked as "Completed" by a daily scheduled task
