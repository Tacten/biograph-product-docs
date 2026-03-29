# Biograph Documentation Maintenance Guide

Welcome to the Biograph documentation team! This guide will explain how to update existing pages, add new ones, and ensure they show up correctly in the sidebar navigation.

## 1. Where Does the Content Live?

All Biograph documentation files are located in the `docs/guide/biograph-docs/` directory of the project.

- The main landing page is `index.md`.
- Content is organized into functional folders like `getting-started/`, `clinical-workflows/`, `patient-care/`, etc.

## 2. Updating Existing Pages

To update a page that already exists:
1. Navigate to the `docs/guide/biograph-docs/` directory and open the relevant Markdown (`.md`) file.
2. Edit the content using standard Markdown syntax.
3. Save the file. If you are running the site locally, changes will appear immediately. 

> [!TIP]
> You can use standard Markdown features like `**bold**`, `*italics*`, `[links](url)`, and `![images](path)` to format your text. Image files should be kept in a logical folder, like `docs/guide/biograph-docs/assets/`.

## 3. Adding New Pages

Adding a new page is a two-step process: First, you write the content, and second, you update the configuration file so the new page appears in the website's sidebar navigation.

### Step 3a: Create the Markdown File
1. Identify the correct subdirectory in `docs/guide/biograph-docs/` (e.g., `clinical-workflows/`).
2. Create your new file ending in `.md` (e.g., `new-procedure.md`).
3. Add a primary heading at the very top of your file using a single `#` (e.g., `# New Procedure Guidelines`).
4. Write your content below the title and save the file.

### Step 3b: Update the Sidebar Menu (`config.mts`)
The sidebar menu lets users find your page. It is controlled by the `docs/.vitepress/config.mts` file. 

1. Open `docs/.vitepress/config.mts`.
2. Scroll down to the `themeConfig: { sidebar: { ... } }` section and locate `'/guide/': [...]`.
3. Inside, you will see a `Biograph Docs` list, which contains sections like "Getting Started", "Clinical Consultation", "Nursing & Tasks", etc.
4. Find the section where your new page belongs.
5. Add a new entry to the `items` list following this exact format:
   `{ text: 'Your Sidebar Title', link: '/guide/biograph-docs/folder-name/file-name' }`

**Example:**
If you added `new-procedure.md` to the `clinical-workflows/` folder, the entry in `config.mts` under the `Clinical Procedures` section would look like this:

```typescript
{
    text: 'Clinical Procedures',
    collapsed: true,
    items: [
        { text: 'Procedure Creation', link: '/guide/biograph-docs/clinical-workflows/procedure-creation' },
        { text: 'Procedure Templates', link: '/guide/biograph-docs/clinical-workflows/procedure-templates' },
        // Add your new page link exactly like this:
        { text: 'New Procedure', link: '/guide/biograph-docs/clinical-workflows/new-procedure' },
    ]
}
```

> [!IMPORTANT]
> - Do **not** include the `.md` extension in the link path within `config.mts`.
> - Always start the link path with `/guide/biograph-docs/`. The system uses this exact path to find your file.

## 4. Quick Checklist Before Publishing

- [ ] Did I save the new/edited `.md` file?
- [ ] If I added a new file, did I add its path to `docs/.vitepress/config.mts`?
- [ ] Does the link in `config.mts` omit the `.md` extension?
- [ ] Did I test the changes locally to make sure formatting is correct?
