# Coverage Creation

## Automatic Coverage

When a patient with active insurance receives healthcare services, Biograph can **automatically calculate insurance coverage**:

1. The system checks the patient's active insurance policy
2. Matches the service item against the payor's eligibility plan
3. Calculates the **covered amount** based on coverage percentage and limits
4. Creates a **Patient Insurance Coverage** record

## Coverage from Service Request

Coverage can also be triggered when specific service requests are made:

1. A practitioner orders a lab test, procedure, or medication
2. The system checks if the patient has insurance coverage for that service
3. A coverage record is created showing:

| Field | Description |
|-------|-------------|
| **Patient** | The insured patient |
| **Insurance Policy** | Which policy applies |
| **Service Item** | The healthcare service being covered |
| **Total Amount** | Full cost of the service |
| **Coverage Amount** | Amount covered by insurance |
| **Patient Liability** | Amount the patient must pay (co-pay) |
| **Status** | Active / Claimed / Settled |
