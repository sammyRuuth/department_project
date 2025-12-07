import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const res = await fetch("http://localhost:8080/api/v1/auth/me", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        });

        if (res.ok) {
          const data = await res.json();
          setUser(data.data);
        } else {
          // Token invalid or expired
          handleLogout();
        }
      } catch (err) {
        console.error("Failed to fetch user data:", err);
        handleLogout();
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("isFirstLogin");
    navigate("/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="mt-1 text-sm text-gray-600">
              Welcome back, {user?.name || "User"}!
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* User Info Card */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Your Profile
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Name</p>
              <p className="text-lg font-medium text-gray-900">{user?.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Email</p>
              <p className="text-lg font-medium text-gray-900">{user?.email}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Role</p>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 capitalize">
                {user?.role}
              </span>
            </div>
            {user?.facultyProfile && (
              <div>
                <p className="text-sm text-gray-600">Faculty ID</p>
                <p className="text-lg font-medium text-gray-900">
                  {user.facultyProfile._id || user.facultyProfile}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Quick Actions
          </h2>
          
          {/* Admin Quick Actions */}
          {user?.role === "admin" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button
                onClick={() => navigate("/forms/faculty")}
                className="p-4 border-2 border-blue-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition text-left"
              >
                <div className="text-3xl mb-2">👤</div>
                <h3 className="font-semibold text-gray-900">Add Faculty</h3>
                <p className="text-sm text-gray-600">Register new faculty member</p>
              </button>

              <button
                onClick={() => navigate("/forms/publication")}
                className="p-4 border-2 border-green-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition text-left"
              >
                <div className="text-3xl mb-2">📄</div>
                <h3 className="font-semibold text-gray-900">Add Publication</h3>
                <p className="text-sm text-gray-600">Submit new publication</p>
              </button>

              <button
                onClick={() => navigate("/forms/project")}
                className="p-4 border-2 border-purple-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition text-left"
              >
                <div className="text-3xl mb-2">🔬</div>
                <h3 className="font-semibold text-gray-900">Add Project</h3>
                <p className="text-sm text-gray-600">Register new project</p>
              </button>

              <button
                onClick={() => navigate("/forms/conference")}
                className="p-4 border-2 border-orange-200 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition text-left"
              >
                <div className="text-3xl mb-2">🎤</div>
                <h3 className="font-semibold text-gray-900">Add Conference</h3>
                <p className="text-sm text-gray-600">Submit conference paper</p>
              </button>

              <button
                onClick={() => navigate("/forms/phd-thesis")}
                className="p-4 border-2 border-teal-200 rounded-lg hover:border-teal-500 hover:bg-teal-50 transition text-left"
              >
                <div className="text-3xl mb-2">🎓</div>
                <h3 className="font-semibold text-gray-900">Add PhD Thesis</h3>
                <p className="text-sm text-gray-600">Register new thesis</p>
              </button>

              <button
                onClick={() => navigate("/forms/patent")}
                className="p-4 border-2 border-pink-200 rounded-lg hover:border-pink-500 hover:bg-pink-50 transition text-left"
              >
                <div className="text-3xl mb-2">💡</div>
                <h3 className="font-semibold text-gray-900">Add Patent</h3>
                <p className="text-sm text-gray-600">Submit patent application</p>
              </button>

              <button
                onClick={() => navigate("/forms/published-book")}
                className="p-4 border-2 border-indigo-200 rounded-lg hover:border-indigo-500 hover:bg-indigo-50 transition text-left"
              >
                <div className="text-3xl mb-2">📚</div>
                <h3 className="font-semibold text-gray-900">Add Published Book</h3>
                <p className="text-sm text-gray-600">Submit book/chapter</p>
              </button>

              <button
                onClick={() => navigate("/forms/department-event")}
                className="p-4 border-2 border-cyan-200 rounded-lg hover:border-cyan-500 hover:bg-cyan-50 transition text-left"
              >
                <div className="text-3xl mb-2">📅</div>
                <h3 className="font-semibold text-gray-900">Add Department Event</h3>
                <p className="text-sm text-gray-600">Create new event</p>
              </button>

              <button
                onClick={() => navigate("/forms/invited-talk")}
                className="p-4 border-2 border-lime-200 rounded-lg hover:border-lime-500 hover:bg-lime-50 transition text-left"
              >
                <div className="text-3xl mb-2">🎙️</div>
                <h3 className="font-semibold text-gray-900">Add Invited Talk</h3>
                <p className="text-sm text-gray-600">Register invited talk</p>
              </button>

              <button
                onClick={() => navigate("/forms/faculty-award")}
                className="p-4 border-2 border-amber-200 rounded-lg hover:border-amber-500 hover:bg-amber-50 transition text-left"
              >
                <div className="text-3xl mb-2">🏆</div>
                <h3 className="font-semibold text-gray-900">Add Faculty Award</h3>
                <p className="text-sm text-gray-600">Submit award/recognition</p>
              </button>

              <button
                onClick={() => navigate("/bulk-upload")}
                className="p-4 border-2 border-yellow-200 rounded-lg hover:border-yellow-500 hover:bg-yellow-50 transition text-left"
              >
                <div className="text-3xl mb-2">📤</div>
                <h3 className="font-semibold text-gray-900">Bulk Upload</h3>
                <p className="text-sm text-gray-600">Import multiple records</p>
              </button>

              <button
                onClick={() => navigate("/change-password")}
                className="p-4 border-2 border-red-200 rounded-lg hover:border-red-500 hover:bg-red-50 transition text-left"
              >
                <div className="text-3xl mb-2">🔐</div>
                <h3 className="font-semibold text-gray-900">Change Password</h3>
                <p className="text-sm text-gray-600">Update your password</p>
              </button>
            </div>
          )}

          {/* Faculty Quick Actions */}
          {user?.role === "faculty" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button
                onClick={() => navigate("/forms/publication")}
                className="p-4 border-2 border-green-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition text-left"
              >
                <div className="text-3xl mb-2">📄</div>
                <h3 className="font-semibold text-gray-900">Add Publication</h3>
                <p className="text-sm text-gray-600">Submit new publication</p>
              </button>

              <button
                onClick={() => navigate("/forms/project")}
                className="p-4 border-2 border-purple-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition text-left"
              >
                <div className="text-3xl mb-2">🔬</div>
                <h3 className="font-semibold text-gray-900">Add Project</h3>
                <p className="text-sm text-gray-600">Register new project</p>
              </button>

              <button
                onClick={() => navigate("/forms/conference")}
                className="p-4 border-2 border-orange-200 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition text-left"
              >
                <div className="text-3xl mb-2">🎤</div>
                <h3 className="font-semibold text-gray-900">Add Conference</h3>
                <p className="text-sm text-gray-600">Submit conference paper</p>
              </button>

              <button
                onClick={() => navigate("/forms/phd-thesis")}
                className="p-4 border-2 border-teal-200 rounded-lg hover:border-teal-500 hover:bg-teal-50 transition text-left"
              >
                <div className="text-3xl mb-2">🎓</div>
                <h3 className="font-semibold text-gray-900">Add PhD Thesis</h3>
                <p className="text-sm text-gray-600">Register new thesis</p>
              </button>

              <button
                onClick={() => navigate("/forms/patent")}
                className="p-4 border-2 border-pink-200 rounded-lg hover:border-pink-500 hover:bg-pink-50 transition text-left"
              >
                <div className="text-3xl mb-2">💡</div>
                <h3 className="font-semibold text-gray-900">Add Patent</h3>
                <p className="text-sm text-gray-600">Submit patent application</p>
              </button>

              <button
                onClick={() => navigate("/forms/published-book")}
                className="p-4 border-2 border-indigo-200 rounded-lg hover:border-indigo-500 hover:bg-indigo-50 transition text-left"
              >
                <div className="text-3xl mb-2">📚</div>
                <h3 className="font-semibold text-gray-900">Add Published Book</h3>
                <p className="text-sm text-gray-600">Submit book/chapter</p>
              </button>

              <button
                onClick={() => navigate("/forms/department-event")}
                className="p-4 border-2 border-cyan-200 rounded-lg hover:border-cyan-500 hover:bg-cyan-50 transition text-left"
              >
                <div className="text-3xl mb-2">📅</div>
                <h3 className="font-semibold text-gray-900">Add Department Event</h3>
                <p className="text-sm text-gray-600">Create new event</p>
              </button>

              <button
                onClick={() => navigate("/forms/invited-talk")}
                className="p-4 border-2 border-lime-200 rounded-lg hover:border-lime-500 hover:bg-lime-50 transition text-left"
              >
                <div className="text-3xl mb-2">🎙️</div>
                <h3 className="font-semibold text-gray-900">Add Invited Talk</h3>
                <p className="text-sm text-gray-600">Register invited talk</p>
              </button>

              <button
                onClick={() => navigate("/forms/faculty-award")}
                className="p-4 border-2 border-amber-200 rounded-lg hover:border-amber-500 hover:bg-amber-50 transition text-left"
              >
                <div className="text-3xl mb-2">🏆</div>
                <h3 className="font-semibold text-gray-900">Add Faculty Award</h3>
                <p className="text-sm text-gray-600">Submit award/recognition</p>
              </button>

              <button
                onClick={() => navigate("/change-password")}
                className="p-4 border-2 border-red-200 rounded-lg hover:border-red-500 hover:bg-red-50 transition text-left"
              >
                <div className="text-3xl mb-2">🔐</div>
                <h3 className="font-semibold text-gray-900">Change Password</h3>
                <p className="text-sm text-gray-600">Update your password</p>
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}