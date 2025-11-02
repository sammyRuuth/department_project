import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FacultyForm from "./pages/forms/FacultyForm";
import PublicationForm from "./pages/forms/PublicationForm";
import ProjectForm from "./pages/forms/ProjectForm";
import ConferenceForm from "./pages/forms/ConferenceForm";
import PhdThesisForm from "./pages/forms/PhdThesisForm";
import PatentForm from "./pages/forms/PatentForm";
import PublishedBookForm from "./pages/forms/PublishedBookForm";
import DepartmentEventForm from "./pages/forms/DepartmentEventForm";
import InvitedTalkForm from "./pages/forms/InvitedTalkForm";
import FacultyAwardForm from "./pages/forms/FacultyAwardForm";
import BulkUpload from "./pages/bulk/BulkUpload";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Navigation Bar */}
        <nav className="bg-white shadow-lg sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="py-4">
              {/* Logo/Title */}
              <div className="mb-3">
                <Link to="/" className="text-2xl font-bold text-blue-600">
                  Department Portal
                </Link>
              </div>
              
              {/* Navigation Links */}
              <div className="flex flex-wrap gap-2">
                <Link 
                  to="/forms/faculty" 
                  className="px-3 py-1.5 text-sm bg-blue-50 text-blue-700 rounded hover:bg-blue-100 transition"
                >
                  Faculty
                </Link>
                <Link 
                  to="/forms/publication" 
                  className="px-3 py-1.5 text-sm bg-blue-50 text-blue-700 rounded hover:bg-blue-100 transition"
                >
                  Publication
                </Link>
                <Link 
                  to="/forms/project" 
                  className="px-3 py-1.5 text-sm bg-blue-50 text-blue-700 rounded hover:bg-blue-100 transition"
                >
                  Project
                </Link>
                <Link 
                  to="/forms/conference" 
                  className="px-3 py-1.5 text-sm bg-blue-50 text-blue-700 rounded hover:bg-blue-100 transition"
                >
                  Conference
                </Link>
                <Link 
                  to="/forms/phd-thesis" 
                  className="px-3 py-1.5 text-sm bg-blue-50 text-blue-700 rounded hover:bg-blue-100 transition"
                >
                  PhD Thesis
                </Link>
                <Link 
                  to="/forms/patent" 
                  className="px-3 py-1.5 text-sm bg-blue-50 text-blue-700 rounded hover:bg-blue-100 transition"
                >
                  Patent
                </Link>
                <Link 
                  to="/forms/published-book" 
                  className="px-3 py-1.5 text-sm bg-blue-50 text-blue-700 rounded hover:bg-blue-100 transition"
                >
                  Published Book
                </Link>
                <Link 
                  to="/forms/department-event" 
                  className="px-3 py-1.5 text-sm bg-blue-50 text-blue-700 rounded hover:bg-blue-100 transition"
                >
                  Department Event
                </Link>
                <Link 
                  to="/forms/invited-talk" 
                  className="px-3 py-1.5 text-sm bg-blue-50 text-blue-700 rounded hover:bg-blue-100 transition"
                >
                  Invited Talk
                </Link>
                <Link 
                  to="/forms/faculty-award" 
                  className="px-3 py-1.5 text-sm bg-blue-50 text-blue-700 rounded hover:bg-blue-100 transition"
                >
                  Faculty Award
                </Link>
                
                {/* Bulk Upload - Highlighted */}
                <Link 
                  to="/bulk-upload" 
                  className="px-4 py-1.5 text-sm bg-green-600 text-white rounded hover:bg-green-700 transition font-medium ml-auto"
                >
                  📤 Bulk Upload
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <Routes>
            {/* Home */}
            <Route path="/" element={<FacultyForm />} />

            {/* Manual Forms */}
            <Route path="/forms/faculty" element={<FacultyForm />} />
            <Route path="/forms/publication" element={<PublicationForm />} />
            <Route path="/forms/project" element={<ProjectForm />} />
            <Route path="/forms/conference" element={<ConferenceForm />} />
            <Route path="/forms/phd-thesis" element={<PhdThesisForm />} />
            <Route path="/forms/patent" element={<PatentForm />} />
            <Route path="/forms/published-book" element={<PublishedBookForm />} />
            <Route path="/forms/department-event" element={<DepartmentEventForm />} />
            <Route path="/forms/invited-talk" element={<InvitedTalkForm />} />
            <Route path="/forms/faculty-award" element={<FacultyAwardForm />} />

            {/* Bulk Upload */}
            <Route path="/bulk-upload" element={<BulkUpload />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;