# 🎓 Department Portal - Frontend

A modern, role-based React application for managing departmental data including faculty, publications, projects, conferences, and more.

![React](https://img.shields.io/badge/React-19.1.1-blue)
![React Router](https://img.shields.io/badge/React_Router-7.9.4-red)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.16-38bdf8)


## ✨ Features

### 🔐 Authentication & Authorization
- **JWT-based authentication** with secure token storage
- **Role-based access control** (Admin & Faculty)
- **Password visibility toggle** for better UX
- **Browser password save** functionality
- **First-time login** password change flow
- **Forgot password** recovery system
- **Protected routes** with automatic redirect

### 👥 Role-Based Dashboards
- **Admin Dashboard**: Full access to all features (12 quick actions)
- **Faculty Dashboard**: Limited to relevant features (10 quick actions)
- **Dynamic UI** that adapts based on user role

### 📝 Data Management
- Add and manage multiple resource types:
  - Faculty members
  - Publications
  - Research projects
  - Conference papers
  - PhD theses
  - Patents
  - Published books
  - Department events
  - Invited talks
  - Faculty awards

### 🚀 Additional Features
- **Bulk data upload** (Admin only) via Excel files
- **Clean, minimal UI** without navigation clutter
- **Responsive design** for mobile and desktop
- **Form validation** and error handling
- **Loading states** for better user feedback
- **Session management** with automatic logout

---

## 🛠️ Tech Stack

- **React** 19.1.1 - UI library
- **React Router DOM** 7.9.4 - Client-side routing
- **Tailwind CSS** 4.1.16 - Utility-first CSS framework
- **React Select** 5.10.2 - Enhanced select components
- **Axios/Fetch** - HTTP client for API calls

### Development Tools
- **Create React App** - Project scaffolding
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** (v6 or higher) - Comes with Node.js
- **Git** - [Download](https://git-scm.com/)
- **Backend API** running (see backend repository)

---

## 📥 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/department-frontend.git
cd department-frontend
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages listed in `package.json`.

---

## ⚙️ Environment Setup

### Backend API Configuration

By default, the frontend connects to `http://localhost:8080`. If your backend runs on a different URL, update the API endpoints in these files:

**Files to update:**
- `src/pages/auth/Login.js`
- `src/pages/auth/ChangePassword.js`
- `src/pages/auth/ForgotPassword.js`
- `src/pages/Dashboard.js`
- All form components in `src/pages/forms/`

**Search and replace:**
```javascript
// Change from:
fetch("http://localhost:8080/api/v1/...")

// Change to:
fetch("https://your-api-domain.com/api/v1/...")
```

### CORS Configuration

Ensure your backend allows requests from your frontend URL. Backend should have CORS enabled for:
```
http://localhost:3000  (development)
https://your-domain.com  (production)
```

---

## 🚀 Running the Application

### Development Mode

Start the development server with hot reload:

```bash
npm start
```

The app will open automatically at [http://localhost:3000](http://localhost:3000)

### Production Build

Create an optimized production build:

```bash
npm run build
```

This creates a `build/` folder with production-ready files.

### Testing

Run the test suite:

```bash
npm test
```

---

## 📁 Project Structure

```
department-frontend/
├── public/                      # Static files
│   ├── index.html              # HTML template
│   ├── manifest.json           # PWA manifest
│   └── robots.txt              # SEO robots file
│
├── src/
│   ├── components/             # Reusable components
│   │   ├── BulkUploader.js    # Bulk upload component
│   │   ├── ProtectedRoute.js  # Auth guard HOC
│   │   └── FormWrapper.js     # Form wrapper with back button
│   │
│   ├── pages/                  # Page components
│   │   ├── auth/              # Authentication pages
│   │   │   ├── Login.js       # Login page
│   │   │   ├── ChangePassword.js
│   │   │   └── ForgotPassword.js
│   │   │
│   │   ├── forms/             # Data entry forms
│   │   │   ├── FacultyForm.js
│   │   │   ├── PublicationForm.js
│   │   │   ├── ProjectForm.js
│   │   │   ├── ConferenceForm.js
│   │   │   ├── PhdThesisForm.js
│   │   │   ├── PatentForm.js
│   │   │   ├── PublishedBookForm.js
│   │   │   ├── DepartmentEventForm.js
│   │   │   ├── InvitedTalkForm.js
│   │   │   └── FacultyAwardForm.js
│   │   │
│   │   ├── bulk/              # Bulk operations
│   │   │   └── BulkUpload.js  # Bulk upload page
│   │   │
│   │   └── Dashboard.js        # Main dashboard
│   │
│   ├── App.js                  # Main app component
│   ├── App.css                 # App styles
│   ├── index.js                # Entry point
│   ├── index.css               # Global styles
│   └── setupTests.js           # Test configuration
│
├── package.json                # Dependencies
├── tailwind.config.js         # Tailwind configuration
└── README.md                   # This file
```

---

## 🔐 Authentication

### Login Flow

1. **Navigate to app** → Redirects to `/login`
2. **Enter credentials** → JWT token received
3. **First-time users** → Redirected to `/change-password`
4. **Returning users** → Redirected to `/dashboard`

### Session Management

- **Token Storage**: JWT stored in `localStorage`
- **Role Storage**: User role stored for UI rendering
- **Auto Logout**: Invalid/expired tokens trigger logout
- **Protected Routes**: Automatic redirect to login if not authenticated

### Password Features

- **Show/Hide Toggle**: Eye icon to view password
- **Browser Save**: Credentials saved by browser
- **Password Change**: Mandatory for first login
- **Password Recovery**: Forgot password flow

---

## 🌐 Browser Compatibility

### Supported Browsers

- **Chrome** (latest 2 versions) ✅
- **Firefox** (latest 2 versions) ✅
- **Safari** (latest 2 versions) ✅
- **Edge** (latest 2 versions) ✅

### Features Requiring Modern Browsers

- **Password Save**: Chrome 51+, Firefox 52+, Safari 11+
- **LocalStorage**: All modern browsers
- **CSS Grid**: Chrome 57+, Firefox 52+, Safari 10.1+
- **Fetch API**: Chrome 42+, Firefox 39+, Safari 10.1+

---

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Common Platforms

#### Vercel
```bash
npm install -g vercel
vercel --prod
```

#### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

#### GitHub Pages
```bash
npm install --save-dev gh-pages

# Add to package.json:
"homepage": "https://yourusername.github.io/department-frontend"

# Deploy:
npm run deploy
```
---

## 🧪 Testing

### Run Tests

```bash
npm test
```

### Test Coverage

```bash
npm test -- --coverage
```

--- 

## 🤝 Contributing

### Development Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m 'Add some feature'`
4. Push to branch: `git push origin feature/your-feature`
5. Submit a pull request
---

## 📞 Support

For support, email saksham1437@gmail.com or open an issue in the repository.

---


**Built with ❤️ using React and Tailwind CSS**