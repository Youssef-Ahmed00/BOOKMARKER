📑 BookMarker Documentation
🌐 Overview
BookMarker is a simple yet powerful web application that allows users to save, manage, and access their favorite websites in one place.
Built using Bootstrap, CSS, and Vanilla JavaScript, this project showcases the full CRUD cycle — Create, Read, Update, and Delete — along with form validations to ensure only valid data is stored.

✨ Features
🆕 Add New Bookmarks

Input Site Name and Site URL.

Real-time validation ensures:

Name ➡️ at least 3 characters.

URL ➡️ valid format (must start with http:// or https://).

📋 Display Bookmarks

Bookmarks shown in a responsive table.

Each entry includes:

🔗 Visit button — opens the link in a new tab.

❌ Delete button — removes the bookmark.

🛠 CRUD Operations (Learned & Applied)

Create ➡️ Add new bookmarks.

Read ➡️ Display saved bookmarks.

Update ➡️ (Feature can be added later).

Delete ➡️ Remove bookmarks from the list.

🎨 Responsive Design

Styled with Bootstrap for responsiveness.

Custom CSS for better visuals and error messages.

✅ Form Validations

Prevents submission until:

The site name is valid.

The URL is properly formatted.

Displays inline error messages for guidance.

🖥 How to Use
✏️ Enter a Site Name (min 3 characters).

🌍 Enter a Valid URL (e.g., https://example.com).

📌 Click Submit.

✅ If valid → Bookmark is added to the list.

❌ If invalid → Error message appears.

🔗 Click Visit to open the bookmarked site.

🗑 Click Delete to remove it.

📂 Project Structure
css
Copy
Edit
index.html
│   ├── Bootstrap & CSS includes
│   ├── Form (site name + URL)
│   └── Table to display bookmarks
│
├── style.css       # Custom styling
└── script.js       # CRUD logic & validation
🧠 Skills Learned
📚 Understanding and applying CRUD operations in JavaScript.

🎨 Using Bootstrap for responsive UI design.

✍️ Writing custom CSS for polished visuals.

🧾 Implementing client-side form validations.

⚡ Mastering DOM manipulation with Vanilla JS.

🚀 Future Improvements
✏️ Edit bookmarks feature.

💾 Local Storage support for persistent bookmarks.

🔍 Search & filter functionality.

🏷 Category tags for better organization.

🖌 Enhanced animations for add/delete actions.

📌 Live Demo: BookMarker on GitHub Pages

