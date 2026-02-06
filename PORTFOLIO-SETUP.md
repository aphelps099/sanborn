# Portfolio Submission Setup Guide

This guide walks you through setting up a **Google Form + Google Sheets + Google Drive** pipeline so clients (or you) can submit portfolio projects via a simple form, upload an image, and have approved items appear automatically on the website.

---

## How It Works

1. **Client** fills out a Google Form (project name, location, type, description, photo)
2. **Google** stores the response in a Google Sheet and the uploaded image in Google Drive
3. **You** review submissions in the spreadsheet and mark rows as `TRUE` in the "Approved" column
4. **The website** reads the published sheet on page load and displays only approved projects

No server, no database, no monthly costs. Just Google's free tools.

---

## Step 1: Create the Google Form

1. Go to [Google Forms](https://docs.google.com/forms/) and create a new blank form
2. Title it something like **"Sanborn Design — Submit a Project"**
3. Add these questions in order:

| # | Question Text     | Type              | Required? |
|---|-------------------|-------------------|-----------|
| 1 | Project Name      | Short answer      | Yes       |
| 2 | Location          | Short answer      | Yes       |
| 3 | Project Type      | Dropdown          | Yes       |
| 4 | Description       | Paragraph         | No        |
| 5 | Project Photo     | File upload       | Yes       |

For **Project Type** dropdown, add options like:
- Restoration
- New Build
- Remodel
- Addition
- Commercial
- Other

For **Project Photo** file upload:
- Click the file upload question settings
- Allow only: **Image** file types
- Set max file size to **10 MB**
- Set max number of files to **1**

4. Click **Send** and copy the form URL (you'll need this later)

---

## Step 2: Set Up the Google Sheet

When someone submits the form, responses automatically go to a Google Sheet.

1. In your Google Form, click the **Responses** tab
2. Click the green Sheets icon to create a linked spreadsheet
3. Open the spreadsheet — you'll see columns: Timestamp, Project Name, Location, Project Type, Description, Project Photo
4. **Add a new column G** and name it: `Approved`
5. In column G, you'll type `TRUE` for projects you want to show on the site

Your sheet should look like:

```
| Timestamp | Project Name | Location | Project Type | Description      | Project Photo       | Approved |
|-----------|-------------|----------|-------------|------------------|---------------------|----------|
| 2/5/2026  | Deck Build  | Ferndale | New Build   | Beautiful cedar  | (Drive file link)   | TRUE     |
| 2/6/2026  | Bath Remod  | Eureka   | Remodel     | Full gut remodel | (Drive file link)   |          |
```

Only the first row (Approved = TRUE) would appear on the website.

---

## Step 3: Publish the Sheet to the Web

This allows the website's JavaScript to read the sheet data (read-only, no editing possible).

1. In Google Sheets, go to **File > Share > Publish to the web**
2. Under "Link", select the sheet tab (usually "Form Responses 1")
3. Format: **Web page** (default is fine)
4. Click **Publish**
5. Copy the **Sheet ID** from the URL bar. It's the long string between `/d/` and `/edit`:
   ```
   https://docs.google.com/spreadsheets/d/THIS_IS_YOUR_SHEET_ID/edit
   ```

---

## Step 4: Make Uploaded Images Public

Google Form file uploads go to your Google Drive. The website needs public access to display them.

1. Go to [Google Drive](https://drive.google.com)
2. Find the folder where form uploads are stored
   - It's usually inside **My Drive** in a folder named after your form
3. Right-click the folder > **Share**
4. Under "General access", change to **"Anyone with the link"** > **Viewer**
5. Click **Done**

This makes uploaded images viewable (but not editable) by anyone with the direct link.

---

## Step 5: Configure the Website

Open `index.html` and find the `PORTFOLIO_CONFIG` object near the bottom of the file. Fill in your values:

```javascript
const PORTFOLIO_CONFIG = {
    // Paste your Google Sheet ID here
    sheetId: '1AbCdEfGhIjKlMnOpQrStUvWxYz_0123456789',

    // Name of the sheet tab (Google Forms default)
    sheetName: 'Form Responses 1',

    // Your Google Form URL (shows a "Submit a Project" button on the site)
    formUrl: 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform',

    // Column positions (0-indexed) — only change if your form has different columns
    cols: {
        name: 1,        // Column B
        location: 2,    // Column C
        type: 3,        // Column D
        description: 4, // Column E
        image: 5,       // Column F
        approved: 6     // Column G
    }
};
```

---

## Step 6: Test It

1. Open your Google Form and submit a test entry with an image
2. Go to the Google Sheet, verify the response appears
3. Type `TRUE` in the **Approved** column for that row
4. Open/refresh the website — your project should appear in the Work section
5. Click the project image to verify the lightbox opens

---

## Approval Workflow

The approval process is simple:

1. You receive a Google Forms notification (or check the spreadsheet periodically)
2. Review the submission in the spreadsheet
3. If approved: type `TRUE` in column G
4. If rejected: leave column G empty, or type `FALSE`, or delete the row
5. The website automatically shows only approved items on next page load

**Accepted values for the Approved column:** `TRUE`, `YES`, `APPROVED` (case-insensitive)

---

## Optional: Email Notifications

To get notified when someone submits:

1. In Google Forms, click the three-dot menu (top right)
2. Select **Get email notifications for new responses**

---

## Optional: Google Apps Script for Auto-Sharing

If you want uploaded images to be automatically shared (instead of sharing the whole folder), add this Apps Script to your Sheet:

1. In Google Sheets, go to **Extensions > Apps Script**
2. Paste this code:

```javascript
function onFormSubmit(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var lastRow = sheet.getLastRow();
  var imageCell = sheet.getRange(lastRow, 6).getValue(); // Column F

  // Extract file ID from the Drive URL
  var match = imageCell.match(/id=([^&]+)/) || imageCell.match(/\/d\/([^\/]+)/);
  if (match) {
    var file = DriveApp.getFileById(match[1]);
    file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
  }
}
```

3. Click **Save**
4. Go to **Triggers** (clock icon) > **Add Trigger**
5. Set: `onFormSubmit`, `From spreadsheet`, `On form submit`
6. Authorize when prompted

This automatically makes each uploaded image publicly viewable when submitted.

---

## Troubleshooting

**Images not loading?**
- Verify the Drive folder (or individual files) is shared as "Anyone with the link"
- Check the browser console for errors

**No projects showing up?**
- Verify the Sheet ID in `PORTFOLIO_CONFIG.sheetId` is correct
- Verify the sheet is published to the web (Step 3)
- Verify at least one row has `TRUE` in the Approved column
- Check the browser console for fetch errors

**Wrong columns?**
- If your form has different questions or order, update the `cols` mapping in `PORTFOLIO_CONFIG`
- Columns are 0-indexed: A=0, B=1, C=2, etc.

---

## Security Notes

- The Google Sheet is **read-only** from the website (published to web = view only)
- Form responses can only be edited by the sheet owner (you)
- The "Approved" column gives you full control over what appears on the site
- No credentials or API keys are stored in the website code
