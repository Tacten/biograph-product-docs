# User Management

## Creating Users

Users are created through ERPNext's standard user management:

1. Go to **User** list
2. Click **+ Add User**
3. Enter email and full name
4. Assign appropriate roles (see below)
5. Set up the user's workspace preferences

## Roles & Permissions

Biograph defines these healthcare-specific roles:

| Role | Access Level |
|------|-------------|
| **Healthcare Administrator** | Full access to all healthcare settings, configurations, and data |
| **Physician** | Access to patient encounters, prescriptions, clinical procedures, and patient records |
| **Nursing User** | Access to nursing tasks, vital signs, medication administration, and patient care activities |
| **Laboratory User** | Access to lab tests, sample collection, observations, and diagnostic reports |
| **LabTest Approver** | Authority to approve and finalize lab test results |
| **Patient** | Portal access for patients to view their own records, appointments, and prescriptions |

> **Tip:** Users can have multiple roles. A doctor who also manages the clinic can have both "Physician" and "Healthcare Administrator" roles.

## Practitioner Setup

Every clinical user who provides patient care must have a **Healthcare Practitioner** record:

1. Go to **Healthcare Practitioner** list
2. Click **+ Add Healthcare Practitioner**
3. Link to the **Employee** record and **User** account
4. Set the practitioner's **Department** and **Designation**
5. Configure their **consultation charges**
6. Set up their **schedule** and **availability**
