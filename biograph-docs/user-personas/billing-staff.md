# Billing Staff – Daily Workflows & Navigation

A Billing Staff is responsible for managing patient billing, including charge capture, invoice generation, payment processing, and insurance claim handling to ensure accurate and timely financial operations.  
This page provides a structured overview of billing workflows to help users efficiently navigate financial processes.

## How to Use This Page
Use this page as a quick navigation guide. Each workflow represents a common billing task and shows the exact system path to follow.

## Core Billing Workflow (Primary Loop)

This is the most common workflow followed for patient billing and payment processing.

**Workflow:**  
[Service Item Mapping](../billing-insurance/service-items.md) → [Patient Billing](../billing-insurance/patient-billing.md) → [Invoice Workflow](../billing-insurance/invoice-workflow.md) → [Payment Processing](../billing-insurance/payment-processing.md) → Optional: [Insurance Eligibility](../billing-insurance/eligibility.md) → [Insurance Claim](../billing-insurance/claim-workflow.md) → [Financial Reports](../billing-insurance/financial-reports.md)

## Explanation

- **Service Item Mapping** – Map healthcare services (consultation, lab, procedures) to billable items  
- **Patient Billing** – Capture services using Get Items from Healthcare Services  
- **Invoice Workflow** – Manage invoice lifecycle (Draft → Submitted → Outstanding → Paid / Partly Paid / Cancelled)  
- **Payment Processing** – Record payments (cash, UPI, card, etc.)  
- **Insurance Claim (Optional)** – Submit and track insurance claims  
- **Financial Reports** – Monitor revenue, outstanding, and performance  

---

## Daily Jobs To Be Done

### 1. Capture Patient Services for Billing  
Workflow:  
[Service Item Mapping](../billing-insurance/service-items.md) → [Patient Billing](../billing-insurance/patient-billing.md) (Sales Invoice → Get Items from Healthcare Services)  

### 2. Generate Patient Invoices  
Workflow:  
[Patient Billing](../billing-insurance/patient-billing.md) → [Invoice Workflow](../billing-insurance/invoice-workflow.md)  

### 3. Process Payments  
Workflow:  
[Invoice Workflow](../billing-insurance/invoice-workflow.md) → [Payment Processing](../billing-insurance/payment-processing.md) (Payment Entry)  

### 4. Verify Charges & Billing Accuracy  
Workflow:  
[Patient Billing](../billing-insurance/patient-billing.md) → [Invoice Workflow](../billing-insurance/invoice-workflow.md) → Review → Submit  

### 5. Track Billing & Financial Status  
Workflow:  
[Invoice Workflow](../billing-insurance/invoice-workflow.md) → [Payment Processing](../billing-insurance/payment-processing.md) → [Financial Reports](../billing-insurance/financial-reports.md)  

### 6. Handle Billing Corrections & Adjustments  
Workflow:  
[Invoice Workflow](../billing-insurance/invoice-workflow.md) → [Patient Billing](../billing-insurance/patient-billing.md) → Update Invoice  

### 7. Process Refunds  
Workflow:  
[Invoice Workflow](../billing-insurance/invoice-workflow.md) → Amend Invoice / Cancel → Update → Resubmit  

### 8. Handle Partial Payments  
Workflow:  
[Invoice Workflow](../billing-insurance/invoice-workflow.md) → Partly Paid → [Payment Processing](../billing-insurance/payment-processing.md)  

### 9. Manage Healthcare Packages  

**Option 1: Billing-based Package**  
Workflow:  
[Patient Billing](../billing-insurance/patient-billing.md) → Get Items from Healthcare Services → Select Package Items → [Invoice Workflow](../billing-insurance/invoice-workflow.md) → [Payment Processing](../billing-insurance/payment-processing.md)  

**Option 2: Subscription-based Package**  
Workflow:  
[Healthcare Package](../billing-insurance/healthcare-package.md) → Package Subscription → [Payment Processing](../billing-insurance/payment-processing.md) → Package Utilization  
### 10. Handle Insurance Billing  
Workflow:  
[Patient Billing](../billing-insurance/patient-billing.md) → [Invoice Workflow](../billing-insurance/invoice-workflow.md) → [Insurance Eligibility](../billing-insurance/eligibility.md) → [Insurance Claim](../billing-insurance/claim-workflow.md) → [Payment Processing](../billing-insurance/payment-processing.md) (if partial/self-pay)  

## Key Navigation Insight

Most billing activities revolve around three core areas:

- **Patient Billing** – Entry point for capturing services and charges  
- **Sales Invoice (Invoice Workflow)** – Central hub for billing lifecycle and status tracking  
- **Payment Entry** – Manage payments, settlements, and adjustments  

From these, billing staff can:

- capture services from appointments, encounters, and lab tests  
- generate and manage invoices  
- process full and partial payments  
- handle refunds and credit notes  
- track outstanding dues and financial status  

Understanding these core modules enables efficient and accurate billing operations.
