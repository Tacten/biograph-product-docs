# Quick Start Guide

Getting Biograph up and running involves these essential steps:

## Step 1: Install Biograph

Biograph is installed as a Frappe app on top of ERPNext:

```bash
bench get-app https://github.com/Tacten/biograph
bench --site your-site.com install-app healthcare
```

> **Prerequisites:** A working Frappe/ERPNext installation (v15 or later) with Python 3.10+.

## Step 2: Initial Configuration

After installation, navigate to **Healthcare Settings** to configure:

1. **Company** — Select your healthcare organization
2. **Default Medical Code Standard** — Choose ICD-10, SNOMED, or your preferred coding system
3. **Patient Registration** — Enable auto-naming and configure naming series
4. **Appointment Settings** — Set appointment durations and reminder preferences

## Step 3: Set Up Your Facility

1. Create **Medical Departments** (Cardiology, General Medicine, etc.)
2. Create **Healthcare Service Units** (OPD rooms, wards, labs)
3. Set up **Healthcare Service Unit Types** (examination rooms, beds, procedure rooms)

## Step 4: Register Practitioners

1. Create **Healthcare Practitioner** records for your doctors and staff
2. Define **Practitioner Schedules** with working hours
3. Set **Practitioner Availability** for appointment booking

## Step 5: Start Using Biograph

1. **Register your first patient** — Go to Patient list and create a new record
2. **Book an appointment** — Create a Patient Appointment for the patient
3. **Conduct a consultation** — Create a Patient Encounter from the appointment
4. **Generate a bill** — The system can automatically create invoices for services rendered

> **Tip:** Use the **Healthcare workspace** as your home screen for quick access to all key features.
