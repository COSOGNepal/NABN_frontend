
# 🌐 NAGN Website Editing Guide

Welcome! This guide helps you update your website by modifying **text and images** using GitHub's online editor.

---

## 🗂 Where to Edit

**Most website content is stored in `src/data/`**. Here's what each file corresponds to:

| File | Controls | Page |
|------|----------|------|
| `about.js` | Text and image on the About page | /about |
| `events.js` | List of past events | /events |
| `home.js` | Hero image, mission, impact stats, call-to-action | / |
| `team.js` | Names, roles, bios, and images of board members | /team |

---

## ✏️ How to Edit Content (Step-by-Step)

### 1. Open the File on GitHub

- Go to the repository.
- Navigate to `src/data/`
- Click on the file you want to change (e.g. `about.js`)
- Click the ✏️ **Edit (pencil icon)** in the top right

---

### 2. Make Your Edits

Each file contains a structured format. You can **safely edit any text inside quotation marks** and replace **image URLs** or imports.

🔹 Do **not** change anything that looks like:
- `import something from ...`
- `{` or `}` brackets
- variable names like `const data = [...]`

---
### 3. Saving Changes

Once you’re done:

1. Click the green **"Commit changes"** box in the top right.
   - A popup box will appear.
   - In the **"Commit Message"**, add a short explanation like `Updated About Us text`
   - Make sure the **"Commit directly to the `main` branch"** option is selected
2. Click the green **"Commit changes"** button again to confirm.

---

## 📄 About Page – `about.js`

This file contains multiple **sections**. Each section includes:
- A `title`
- An array of `descriptions` (you can add line breaks or bullet points using `\n` or `-`)

To edit:
- Open `about.js`
- Scroll to `contentSections`
- Update any text in quotes.

---

## 📅 Events Page – `events.js`

This file holds a **large list of events**. Each one includes:
- `id` (must be unique)
- `date` (format: YYYY-MM-DD)
- `title`
- `description`
- `image.url` (imported image)

To add a new event:
1. Scroll to the end of the array.
2. Copy and paste an existing block.
3. Change `id`, `date`, `title`, `description`.
4. Add a new `import` at the top for the image:
   ```js
   import newEventImage from "../assets/images/events/event71.png";
   ```
5. Then use it like this:
   ```js
   {
     id: "71",
     date: "2025-03-01",
     title: "New Event Title",
     description: "Details about the new event...",
     image: { url: newEventImage }
   }
   ```

---

## 🏠 Home Page – `home.js`

This file controls all sections on the homepage:
- **Hero Section** (top banner title, subtitle, CTA button, image)
- **Mission Section** (three core missions with icons)
- **Impact Section** (numbers and descriptions)
- **Call-To-Action Section** (final CTA area)

You can safely change:
- Text in quotes
- Button links
- Stats

Example:
```js
heroSection: {
  title: "National Adolescent Girls' Network Nepal",
  subtitle: "Empowering Nepal's youth",
  CTAbutton: "Get Involved",
  CTAbuttonlink: "https://www.facebook.com/kishorisanjal",
}
```

---

## 👥 Team Page – `team.js`

This file includes an array of **team member profiles**. Each one has:
- `name`
- `position`
- `description`
- `image.url`

To update:
- Open `team.js`
- Edit name, role, or description inside quotation marks

To add someone new:
1. Import their photo at the top:
   ```js
   import NewMember from "../assets/images/team/New_Member.jpg";
   ```
2. Add a new object like this:
   ```js
   {
     name: "New Name",
     position: "New Role",
     description: "City, Province",
     image: { url: NewMember }
   }
   ```

---

## 📬 Contact Page

No editing needed unless you want to change the **email address**. To do so:

1. Open `Contact.jsx` in `src/pages/`
2. Find:
```js
const mailtoLink = \`mailto:nationaladolescentgirlnetwork@gmail.com?...`
```
3. Replace the email if needed.

---

## ✅ Summary

| Page | What to Edit | File |
|------|---------------|------|
| Homepage | Hero, mission, stats | `src/data/home.js` |
| About | All sections | `src/data/about.js` |
| Events | Add/edit events | `src/data/events.js` |
| Team | Bios & roles | `src/data/team.js` |
| Contact | Email (optional) | `src/pages/Contact.jsx` |

---