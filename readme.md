# 🎓 Department Portal - Frontend

A modern, role-based React application for managing departmental data including faculty, publications, projects, conferences, and more.

![React](https://img.shields.io/badge/React-19.1.1-blue)
![React Router](https://img.shields.io/badge/React_Router-7.9.4-red)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.16-38bdf8)
![License](https://img.shields.io/badge/License-ISC-green)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Setup](#environment-setup)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Authentication](#authentication)
- [User Roles](#user-roles)
- [Available Pages](#available-pages)
- [API Integration](#api-integration)
- [Browser Compatibility](#browser-compatibility)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

---

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

## 👥 User Roles

### Admin Role

**Access Level**: Full administrative access

**Dashboard Quick Actions** (12 total):
- ✅ Add Faculty (admin exclusive)
- ✅ Add Publication
- ✅ Add Project
- ✅ Add Conference
- ✅ Add PhD Thesis
- ✅ Add Patent
- ✅ Add Published Book
- ✅ Add Department Event
- ✅ Add Invited Talk
- ✅ Add Faculty Award
- ✅ Bulk Upload (admin exclusive)
- ✅ Change Password

**Special Permissions**:
- Create and manage faculty accounts
- Access bulk upload functionality
- Full system administration

### Faculty Role

**Access Level**: Resource contributor

**Dashboard Quick Actions** (10 total):
- ✅ Add Publication
- ✅ Add Project
- ✅ Add Conference
- ✅ Add PhD Thesis
- ✅ Add Patent
- ✅ Add Published Book
- ✅ Add Department Event
- ✅ Add Invited Talk
- ✅ Add Faculty Award
- ✅ Change Password

**Restrictions**:
- ❌ Cannot add other faculty members
- ❌ Cannot access bulk upload
- ❌ Cannot perform administrative tasks

---

## 📄 Available Pages

### Public Pages (No Authentication Required)

| Route | Component | Description |
|-------|-----------|-------------|
| `/login` | Login | Main login page with credentials |
| `/forgot-password` | ForgotPassword | Password recovery request |

### Protected Pages (Authentication Required)

| Route | Component | Description | Role |
|-------|-----------|-------------|------|
| `/dashboard` | Dashboard | Main landing page | All |
| `/change-password` | ChangePassword | Password change page | All |
| `/forms/faculty` | FacultyForm | Add faculty member | Admin |
| `/forms/publication` | PublicationForm | Add publication | All |
| `/forms/project` | ProjectForm | Add project | All |
| `/forms/conference` | ConferenceForm | Add conference | All |
| `/forms/phd-thesis` | PhdThesisForm | Add PhD thesis | All |
| `/forms/patent` | PatentForm | Add patent | All |
| `/forms/published-book` | PublishedBookForm | Add book/chapter | All |
| `/forms/department-event` | DepartmentEventForm | Add event | All |
| `/forms/invited-talk` | InvitedTalkForm | Add invited talk | All |
| `/forms/faculty-award` | FacultyAwardForm | Add award | All |
| `/bulk-upload` | BulkUpload | Bulk data import | Admin |

---

## 🔌 API Integration

### Backend Endpoints Used

#### Authentication
```
POST   /api/v1/auth/login              - User login
GET    /api/v1/auth/me                 - Get current user
PUT    /api/v1/auth/updatepassword     - Change password
POST   /api/v1/auth/forgotpassword     - Request password reset
PUT    /api/v1/auth/resetpassword/:token - Reset password
```

#### Faculty
```
GET    /api/v1/faculty                 - Get all faculty
POST   /api/v1/faculty                 - Add faculty (Admin only)
PUT    /api/v1/faculty/:id             - Update faculty
DELETE /api/v1/faculty/:id             - Delete faculty
POST   /api/v1/faculty/bulk-upload     - Bulk upload faculty
```

#### Publications
```
GET    /api/v1/publication             - Get all publications
POST   /api/v1/publication             - Add publication
PUT    /api/v1/publication/:id         - Update publication
DELETE /api/v1/publication/:id         - Delete publication
POST   /api/v1/publication/bulk        - Bulk upload publications
```

#### Projects
```
GET    /api/v1/project                 - Get all projects
POST   /api/v1/project/add             - Add project
PUT    /api/v1/project/:id             - Update project
DELETE /api/v1/project/:id             - Delete project
POST   /api/v1/project/bulk            - Bulk upload projects
```

*(Similar patterns for Conference, PhD Thesis, Patent, Published Book, Department Event, Invited Talk, Faculty Award)*

### Request Headers

All authenticated requests include:
```javascript
{
  "Authorization": "Bearer <JWT_TOKEN>",
  "Content-Type": "application/json"
}
```

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

## 🐛 Troubleshooting

### Common Issues

#### 1. "Network Error" on Login

**Problem**: Cannot connect to backend API

**Solutions**:
- ✅ Verify backend is running on `http://localhost:8080`
- ✅ Check CORS is enabled in backend
- ✅ Confirm API URLs in code match backend
- ✅ Check browser console for specific errors

#### 2. Blank Page After Login

**Problem**: Dashboard doesn't load after successful login

**Solutions**:
- ✅ Clear localStorage: `localStorage.clear()`
- ✅ Check browser console for errors
- ✅ Verify token is being saved: `localStorage.getItem('token')`
- ✅ Ensure `/api/v1/auth/me` endpoint works

#### 3. Password Not Saving in Browser

**Problem**: Browser doesn't offer to save password

**Solutions**:
- ✅ Use HTTPS or localhost (browsers restrict to secure contexts)
- ✅ Ensure `autoComplete` attributes are present
- ✅ Check browser password save settings
- ✅ Try different browser

#### 4. Faculty Sees Admin Features

**Problem**: Wrong role-based UI rendering

**Solutions**:
- ✅ Clear localStorage and login again
- ✅ Verify role is correctly saved: `localStorage.getItem('role')`
- ✅ Check backend returns correct role in login response
- ✅ Refresh page after role change

#### 5. Forms Not Submitting

**Problem**: Form submission fails or hangs

**Solutions**:
- ✅ Check network tab for API response
- ✅ Verify all required fields are filled
- ✅ Check backend logs for errors
- ✅ Ensure token is valid (not expired)

### Debug Mode

Enable detailed logging:

```javascript
// Add to any component
console.log('Token:', localStorage.getItem('token'));
console.log('Role:', localStorage.getItem('role'));
console.log('User:', localStorage.getItem('isFirstLogin'));
```

### Reset Application State

```javascript
// Clear all stored data
localStorage.clear();
// Refresh page
window.location.reload();
```

---

## 🔒 Security Best Practices

### Implemented Security Features

- ✅ JWT token authentication
- ✅ Protected routes with auth guards
- ✅ Password visibility toggle (not stored in plain text)
- ✅ Auto logout on token expiration
- ✅ Role-based UI rendering
- ✅ HTTPS recommended for production

### Additional Recommendations

For production deployment:

1. **Use HTTPS**: Always serve over HTTPS
2. **HttpOnly Cookies**: Consider moving from localStorage to httpOnly cookies
3. **CSRF Protection**: Implement CSRF tokens
4. **Rate Limiting**: Add rate limiting on login endpoint
5. **Content Security Policy**: Add CSP headers
6. **Environment Variables**: Use env variables for API URLs

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

### Environment Variables for Production

Update API URLs before building:
```javascript
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';
```

---

## 📊 Performance Optimization

### Implemented Optimizations

- ✅ Code splitting with React Router
- ✅ Lazy loading for components
- ✅ Optimized bundle size
- ✅ Minified production build
- ✅ Tree shaking enabled

### Additional Tips

- Use production build for deployment
- Enable gzip compression on server
- Implement service workers for PWA
- Add image optimization
- Use CDN for static assets

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

### Test Files Location

- Unit tests: `src/**/*.test.js`
- Component tests: `src/components/**/*.test.js`
- Integration tests: `src/integration/**/*.test.js`

---

## 📚 Additional Documentation

- **Authentication Guide**: See backend repository for auth setup
- **API Documentation**: Refer to backend API docs
- **Design System**: Tailwind CSS documentation
- **Component Library**: React documentation

---

## 🤝 Contributing

### Development Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m 'Add some feature'`
4. Push to branch: `git push origin feature/your-feature`
5. Submit a pull request

### Code Style

- Use ESLint for code linting
- Follow React best practices
- Write meaningful commit messages
- Add comments for complex logic
- Keep components focused and small

### Testing Requirements

- Add tests for new features
- Ensure all tests pass before PR
- Maintain test coverage above 80%

---

## 📝 License

This project is licensed under the ISC License.

---

## 👥 Authors

- **Kalp Dalsania** - Initial work

---

## 🙏 Acknowledgments

- Create React App for project scaffolding
- Tailwind CSS for utility-first styling
- React Router for routing solution
- All open-source contributors

---

## 📞 Support

For support, email your-email@example.com or open an issue in the repository.

---

## 🔄 Changelog

### Version 1.0.0 (Current)
- ✅ JWT authentication system
- ✅ Role-based dashboards
- ✅ Password visibility toggle
- ✅ Browser password save
- ✅ All resource management forms
- ✅ Bulk upload functionality
- ✅ Responsive design
- ✅ Protected routes

---

## 🗺️ Roadmap

### Upcoming Features

- [ ] User profile editing
- [ ] Admin panel for user management
- [ ] Advanced search and filtering
- [ ] Export data functionality
- [ ] Dark mode support
- [ ] Multi-language support
- [ ] Real-time notifications
- [ ] Activity logging
- [ ] Data visualization dashboard
- [ ] Mobile app version

---

**Built with ❤️ using React and Tailwind CSS**