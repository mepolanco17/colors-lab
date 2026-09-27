# COLORS LAMP Stack Application

## Description

COLORS is a simple web application built on a LAMP stack (Linux, Apache, MySQL, PHP) that lets a registered user log in and manage a personal list of favorite colors. After logging in, a user can add new colors to their list and search their existing colors by name. Each user's color list is private to their account.

## Technologies Used

- **Linux** — Ubuntu server (DigitalOcean droplet)
- **Apache** — web server
- **MySQL** — relational database storing Users and Colors tables
- **PHP** — server-side API endpoints (Login, AddColor, SearchColors)
- **HTML/CSS/JavaScript** — front-end interface
- **XMLHttpRequest** — used client-side to call the PHP API endpoints and exchange JSON
- **MD5 hashing** (via a third-party JavaScript MD5 library) — used for basic password hashing

## Project Structure

```
colors-lab/
  api/                  PHP API endpoints (Login, AddColor, SearchColors)
  public/               Front-end files served to the browser
    css/                Stylesheet
    js/                 Client-side JavaScript (including MD5 hashing library)
    index.html          Login page
    color.html          Main app page (search/add colors) after login
  README.md
  LICENSE.md
  .gitignore
```

## High-Level Setup Instructions

1. Provision a LAMP server (e.g., a DigitalOcean Droplet using the LAMP one-click image), which comes with Apache, MySQL, and PHP pre-installed.
2. Create a MySQL database and the following tables: `Users` (ID, FirstName, LastName, Login, Password) and `Colors` (ID, Name, UserID).
3. Create a dedicated MySQL user and grant it privileges on the database.
4. Upload the contents of `api/` to the server's `LAMPAPI` directory under the Apache web root (e.g., `/var/www/html/LAMPAPI`).
5. In each PHP file inside `api/`, replace the placeholder database credentials (`your_db_username`, `your_db_password`, `your_db_name`) with your actual MySQL username, password, and database name.
6. Upload the contents of `public/` to the Apache web root (e.g., `/var/www/html`), preserving the `css/` and `js/` subfolders.
7. Point a domain name to the server's IP address (this project uses Cloudflare for DNS).

## How to Run and Access the Application

1. Open the deployed site's URL in a browser (this loads `index.html`).
2. Log in using a valid username and password stored in the `Users` table.
3. On successful login, you're redirected to `color.html`, where you can:
   - Search your existing colors by typing a search term and clicking **Search Color**
   - Add a new color to your list by typing a color name and clicking **Add Color**
4. Click **Log Out** to end the session and return to the login page.

## Assumptions, Limitations, and AI Usage

- Passwords are stored as MD5 hashes, which is not considered cryptographically secure by modern standards; this project uses it for educational/demonstration purposes only.
- There is no user registration flow in this version — user accounts must be inserted directly into the database.
- Basic input validation and error handling are minimal, consistent with the scope of a class lab exercise.
- AI assistance (Claude) was used during development to help debug server configuration issues (DNS, SSL/mixed-content errors, PSFTP file transfer commands) and to help organize this repository and write this documentation. All application logic, database schema, and API code originate from the COLORS lab assignment materials provided in COP4331.
