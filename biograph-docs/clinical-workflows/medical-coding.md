# Medical Coding

Biograph supports standardized medical coding for diagnoses, procedures, and observations. The coding system is built around three interconnected concepts — Code System, Code Value Set, and Code Value — which together allow clinicians to attach internationally recognised terminology to every clinical event.

![Medical Coding](..assets/Medical-coding1.png)

Medical Coding Configuration

---

## Supported Code Standards

### ICD-10
International Classification of Diseases, 10th Revision  
Used globally for diagnosis coding and medical billing  
Codes are linked directly to diagnosis entries inside a Patient Encounter  
Can be searched by code (e.g. I20.9) or by description (e.g. "Angina Pectoris")  
Supports hierarchical drill-down from chapter → block → category → code  

---

### SNOMED CT
Systematized Nomenclature of Medicine — Clinical Terms  
Rich, concept-based clinical terminology covering disorders, findings, procedures, substances, and more  
Can be used alongside ICD-10 for more granular clinical documentation  
Particularly useful for lab observations, clinical findings, and nursing assessments  

---

### Custom Code Systems
Biograph allows facilities to define custom institutional code systems (e.g., internal procedure codes, local diagnosis groupings)  
Custom systems follow the same Code System → Code Value hierarchy and integrate seamlessly with standard systems  

---

## Core Data Structures

### Code System

A Code System defines which coding vocabulary is in use. Each code system record specifies:

| Field | Description |
|------|------------|
| Name | Unique identifier (e.g. ICD-10, SNOMED CT) |
| Standard | The governing standard body |
| Description | Human-readable description of the system |

Set up your active code systems under Healthcare Settings → Medical Coding.

---

### Code Value

A Code Value is an individual entry within a Code System — the actual code paired with its description.

| Field | Description |
|------|------------|
| Code | The alphanumeric code (e.g. I20.9) |
| Code Value | Display label / preferred term |
| System | Parent Code System |
| Definition | Clinical definition or scope note |

---

### Code Value Set (Codification Table)

The Codification Table is a section that appears on clinical templates (Lab Test Templates, Observation Templates, Clinical Procedure Templates, etc.). It maps one or more codes from one or more systems to a single clinical concept, enabling cross-system code equivalence.

Code Value Set is used to group related codes, whereas the Codification Table is used to map multiple codes from different systems to a single clinical concept.

| Field | Description |
|------|------------|
| Code System | The coding standard (ICD-10, SNOMED CT, custom) |
| Code | The actual code from that system |
| Code Value | Display label for the code |
| Definition | Optional clinical description |

> TIP  
> Attaching both an ICD-10 code and a SNOMED CT concept to the same template entry allows Biograph to export data in either format — useful when integrating with payers that require ICD-10 and with FHIR-based EHR systems that prefer SNOMED CT.

Multiple coding systems are used together because ICD supports billing and reporting, while SNOMED provides detailed clinical representation and interoperability.

---

## Hierarchical Code Structure

Medical coding systems such as ICD-10 and SNOMED CT support hierarchical relationships between codes, where broader categories contain more specific subtypes.

### Example Hierarchy:

- Disorder of cardiovascular system
  - Heart disease
    - Ischemic heart disease
      - Angina pectoris
      - Acute myocardial infarction
    - Heart failure
      - Left heart failure
      - Right heart failure

### Purpose of Hierarchy

#### Structured Code Organization
Code systems can be imported with their native parent–child structure, instead of maintaining a flat list of codes.

#### Improved Code Selection
Hierarchy enables grouping of related conditions, allowing users to navigate from general categories to specific diagnoses.

#### Dynamic Grouping
Related codes can be automatically grouped based on hierarchy, reducing the need for manual configuration of value sets.

#### Aggregated Reporting
Analytics can be performed at different levels, such as:
- Specific diagnosis level  
- Category level (e.g., Heart disease)  
- System level (e.g., Cardiovascular disorders)  

#### Backward Compatibility
Flat code lists continue to function as before.  
Hierarchy is optional and can be enabled per Code System.

---

## How Medical Codes Flow Through Biograph

Medical codes move through the system in a predictable path:

Administrators configure Code Systems and load Code Values (via bulk import or manual entry).  
Clinical template authors attach relevant codes to templates via the Codification Table.  
Clinicians select diagnoses and procedures during documentation — the linked codes are automatically captured on the encounter.  
Billing & reporting systems pull the stored codes for claim generation, analytics, and FHIR export.  

This workflow ensures that once codes are configured and attached, they automatically flow from clinical documentation into billing, reporting, and external integrations.

---

## Attaching Codes in a Patient Encounter

When documenting an encounter, clinicians can add diagnosis entries and link them to a medical code from the configured Code Systems. Codes can be found by typing a description (e.g. "Angina") or entering the code directly (e.g. I20.9). Both ICD-10 and SNOMED CT lookups are available depending on which Code Systems are active in Healthcare Settings.

Each diagnosis row on the encounter stores the selected code alongside the diagnosis name, ensuring the code is available for billing, reporting, and export without any extra steps.

Medical coding is applied at multiple levels in the system, including Diagnosis records, clinical templates, and Patient Encounters, ensuring codes are consistently captured throughout the workflow.

---

## Configuring Medical Coding

### Step 1 — Enable Code Systems
Navigate to Healthcare Settings → Medical Coding and activate the standards your facility uses (ICD-10, SNOMED CT, or custom).

---

### Step 2 — Load Code Values
Import: Use Biograph's Data Import tool with a CSV of code + description pairs.  
Manual: Add individual Code Value records under the relevant Code System.  

---

### Step 3 — Attach Codes to Templates

Open any clinical template (Lab Test Template, Observation Template, Clinical Procedure Template) and add entries to its Codification Table section:

| Code System | Code | Code Value | Definition |
|------------|------|-----------|------------|
| ICD-10 | J18.9 | Pneumonia, unspecified | ... |
| SNOMED CT | 233604007 | Pneumonia | ... |

---

### Step 4 — Use in Encounters
Clinicians will see code suggestions auto-populated from the template when ordering tests or documenting diagnoses.

---

## Integration & Interoperability

| Scenario | How Codes Are Used |
|--------|-------------------|
| Billing / Claims | ICD-10 codes from encounter diagnoses flow into invoice line items for claim submission |
| FHIR Export | Codes stored in the Codification Table map to FHIR CodeableConcept elements |
| Lab Reporting | LOINC or custom codes on Lab Test Templates appear in result PDFs |
| Analytics | Code values are queryable for population health reports and quality metrics |
