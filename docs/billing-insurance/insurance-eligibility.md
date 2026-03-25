# Insurance Eligibility

## Item Eligibility

**Item Insurance Eligibility** defines which healthcare services and items are covered under specific insurance plans.

| Field | Description |
|-------|-------------|
| **Item** | The healthcare service or product |
| **Insurance Payor** | Which payor covers this item |
| **Coverage Percentage** | What percentage the insurance covers (e.g., 80%) |
| **Maximum Amount** | Cap on the coverage amount |
| **Pre-authorization Required** | Whether prior approval is needed |

## Coverage Plans (Eligibility Plans)

**Insurance Payor Eligibility Plans** group eligibility rules into named plans:

| Field | Description |
|-------|-------------|
| **Plan Name** | e.g., "Gold Plan", "Silver Plan", "Basic Coverage" |
| **Insurance Payor** | The insurance company offering this plan |
| **Covered Items** | List of items/services covered under this plan |
| **Coverage Details** | Percentage, limits, and conditions for each item |

**Example: Gold Plan Coverage**

| Service | Coverage % | Max Amount | Pre-auth |
|---------|-----------|-----------|----------|
| OPD Consultation | 100% | Rs. 1,000 | No |
| Lab Tests | 100% | Rs. 10,000 | No |
| Minor Procedures | 80% | Rs. 25,000 | No |
| Major Surgery | 80% | Rs. 5,00,000 | Yes |
| Room Charges | 100% | Rs. 5,000/day | No |
