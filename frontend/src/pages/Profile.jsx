import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate, Link } from 'react-router-dom';
import { FaUser, FaLayerGroup, FaTasks, FaFileAlt, FaMapMarkerAlt, FaBriefcase, FaCalendarAlt, FaCheckCircle, FaClock, FaPen, FaSave, FaTimes, FaSignOutAlt } from 'react-icons/fa';

const Profile = () => {
  const { user, updateUser, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Edit Profile State
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    profileImageFile: null,
    profileImagePreview: user?.profileImage || ''
  });
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateError, setUpdateError] = useState('');
  const [updateSuccess, setUpdateSuccess] = useState(false);

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    setIsUpdating(true);
    setUpdateError('');
    setUpdateSuccess(false);

    try {
      const submitData = new FormData();
      submitData.append('name', formData.name);
      submitData.append('email', formData.email);
      if (formData.profileImageFile) {
        submitData.append('profileImage', formData.profileImageFile);
      }

      const response = await fetch('https://edtech-4.onrender.com/api/auth/profile', {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
        body: submitData,
      });

      const data = await response.json();

      if (response.ok) {
        updateUser(data, data.token); // Assume backend returns updated user object
        setUpdateSuccess(true);
        setTimeout(() => {
          setUpdateSuccess(false);
          setIsEditModalOpen(false);
        }, 1500);
      } else {
        setUpdateError(data.message || 'Failed to update profile');
      }
    } catch (error) {
      setUpdateError('An error occurred while updating.');
    } finally {
      setIsUpdating(false);
    }
  };

  // If the user tries to access /profile while logged out, redirect them
  if (!user) {
    return <Navigate to="/" />;
  }

  const tabs = [
    { id: 'overview', name: 'Dashboard', icon: <FaUser /> },
    { id: 'applications', name: 'My Applications', icon: <FaFileAlt /> },
    { id: 'batch', name: 'My Cohort', icon: <FaLayerGroup /> },
    { id: 'tasks', name: 'Assignments', icon: <FaTasks /> },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-500 pt-0 pb-20">

      {/* Premium Cover Photo / Banner */}
      <div className="w-full h-48 md:h-64 bg-slate-900 dark:bg-slate-950 relative overflow-hidden border-b border-slate-200 dark:border-slate-800">
        {/* Decorative elements in banner */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-10">

        <div className="flex flex-col lg:flex-row gap-8">

          {/* Left Column: Profile Card & Navigation */}
          <div className="lg:w-80 flex-shrink-0 space-y-4">

            {/* Main Profile Info Card */}
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-5 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700 relative text-center transition-colors duration-500">

              <button
                onClick={() => setIsEditModalOpen(true)}
                className="absolute top-4 right-4 p-2.5 bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-full transition-all duration-300 z-20 shadow-sm"
                title="Edit Profile"
              >
                <FaPen size={14} />
              </button>

              <div className="w-32 h-32 mx-auto rounded-full bg-slate-50 dark:bg-slate-900 border-4 border-white dark:border-slate-800 flex items-center justify-center text-5xl font-black text-blue-600 dark:text-blue-400 shadow-lg -mt-20 mb-4 relative z-10 overflow-hidden">
                {user.profileImage ? (
                  <img src={user.profileImage} alt={user.name} className="w-full h-full object-cover" />
                ) : (
                  user.name.charAt(0).toUpperCase()
                )}
                <div className="absolute bottom-2 right-2 w-5 h-5 bg-emerald-500 border-2 border-white dark:border-slate-800 rounded-full z-20"></div>
              </div>

              <h1 className="text-2xl font-black text-slate-900 dark:text-white">{user.name}</h1>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1 mb-3">{user.email}</p>

              <div className="flex items-center justify-center gap-2 text-xs font-bold px-3 py-1.5 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 rounded-lg mx-auto w-max mb-4">
                <FaCheckCircle /> Account Verified
              </div>

              <div className="border-t border-slate-100 dark:border-slate-700 pt-4 flex flex-col gap-2.5 text-sm font-medium text-slate-600 dark:text-slate-400 text-left">
                <div className="flex items-center gap-3"><FaMapMarkerAlt className="text-slate-400" /> Remote / Online</div>
                <div className="flex items-center gap-3"><FaBriefcase className="text-slate-400" /> Student</div>
                <div className="flex items-center gap-3"><FaCalendarAlt className="text-slate-400" /> Joined {new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</div>
              </div>
            </div>

            {/* Premium Navigation Sidebar */}
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-2.5 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700 flex flex-row lg:flex-col gap-1 overflow-x-auto scrollbar-hide transition-colors duration-500">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-2xl font-bold whitespace-nowrap transition-all duration-300 w-full ${activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20 lg:translate-x-2'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:translate-x-1'
                    }`}
                >
                  <span className={`text-lg ${activeTab === tab.id ? 'text-blue-200' : 'text-slate-400'}`}>{tab.icon}</span>
                  {tab.name}
                </button>
              ))}

              {/* Logout Button in Sidebar */}
              <button
                onClick={logout}
                className="flex items-center gap-3 px-4 py-2.5 rounded-2xl font-bold whitespace-nowrap text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 transition-all duration-300 w-full hover:translate-x-1"
              >
                <span className="text-lg text-red-400"><FaSignOutAlt /></span>
                Logout
              </button>
            </div>

          </div>

          {/* Right Column: Dynamic Content Area */}
          <div className="flex-1 space-y-6">

            {activeTab === 'overview' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">

                {/* Stats Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700 flex flex-col justify-between transition-colors duration-500">
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400"><FaLayerGroup /></div>
                      <span className="text-xs font-bold text-slate-400">Current</span>
                    </div>
                    <div>
                      <p className="text-3xl font-black text-slate-900 dark:text-white">0</p>
                      <p className="text-sm font-bold text-slate-500">Active Cohorts</p>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700 flex flex-col justify-between transition-colors duration-500">
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400"><FaTasks /></div>
                      <span className="text-xs font-bold text-slate-400">Total</span>
                    </div>
                    <div>
                      <p className="text-3xl font-black text-slate-900 dark:text-white">0</p>
                      <p className="text-sm font-bold text-slate-500">Completed Tasks</p>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700 flex flex-col justify-between transition-colors duration-500">
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400"><FaClock /></div>
                      <span className="text-xs font-bold text-slate-400">Timeline</span>
                    </div>
                    <div>
                      <p className="text-3xl font-black text-slate-900 dark:text-white">Day 1</p>
                      <p className="text-sm font-bold text-slate-500">Of your journey</p>
                    </div>
                  </div>

                </div>

                {/* Main Content Box */}
                <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700 transition-colors duration-500">
                  <h2 className="text-xl font-black text-slate-900 dark:text-white mb-6">Recent Activity</h2>

                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-20 h-20 bg-slate-50 dark:bg-slate-900 rounded-full flex items-center justify-center text-slate-400 dark:text-slate-500 mb-4 transition-colors duration-500">
                      <FaClock size={28} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">No Recent Activity</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm">You just created your account. Start by exploring our programs and submitting an application.</p>
                    <Link to="/programs" className="mt-6 px-6 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-xl hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors">
                      Browse Programs
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Other Tabs with Premium Empty States */}
            {activeTab === 'applications' && (
              <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700 min-h-[500px] flex items-center justify-center animate-in fade-in slide-in-from-bottom-4 duration-500 transition-colors duration-500">
                <div className="text-center">
                  <div className="relative w-24 h-24 mx-auto mb-6">
                    <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900/30 rounded-full animate-ping opacity-75"></div>
                    <div className="relative w-full h-full bg-blue-50 dark:bg-blue-900/50 rounded-full border-4 border-white dark:border-slate-800 flex items-center justify-center text-blue-600 dark:text-blue-400 text-3xl shadow-lg transition-colors duration-500">
                      <FaFileAlt />
                    </div>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3">No Applications Yet</h3>
                  <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-md mx-auto font-medium">You haven't submitted an application to any of our programs yet. Take the first step towards your career!</p>
                  <Link to="/programs" className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all hover:-translate-y-1 shadow-lg shadow-blue-500/30">
                    Explore Programs
                  </Link>
                </div>
              </div>
            )}

            {activeTab === 'batch' && (
              <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700 min-h-[500px] flex items-center justify-center animate-in fade-in slide-in-from-bottom-4 duration-500 transition-colors duration-500">
                <div className="text-center max-w-md mx-auto">
                  <div className="w-24 h-24 bg-amber-50 dark:bg-amber-900/20 text-amber-500 rounded-3xl rotate-12 mx-auto mb-8 flex items-center justify-center text-4xl shadow-lg transition-colors duration-500">
                    <div className="-rotate-12"><FaLayerGroup /></div>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3">Pending Assignment</h3>
                  <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                    You are not currently assigned to an active learning cohort. Once your application is reviewed and accepted, your cohort details, mentors, and schedule will appear here.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'tasks' && (
              <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700 min-h-[500px] flex items-center justify-center animate-in fade-in slide-in-from-bottom-4 duration-500 transition-colors duration-500">
                <div className="text-center max-w-md mx-auto">
                  <div className="w-24 h-24 bg-purple-50 dark:bg-purple-900/20 text-purple-500 rounded-3xl -rotate-6 mx-auto mb-8 flex items-center justify-center text-4xl shadow-lg transition-colors duration-500">
                    <div className="rotate-6"><FaTasks /></div>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3">Zero Pending Tasks</h3>
                  <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                    You have no active tasks or assignments. Enjoy your free time! When your cohort starts, all projects and deadlines will be tracked here.
                  </p>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-2xl border border-slate-100 dark:border-slate-700 w-full max-w-lg relative animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setIsEditModalOpen(false)}
              className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full transition-colors"
            >
              <FaTimes size={20} />
            </button>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-6">Edit Profile</h2>

            {updateError && <div className="bg-red-50 text-red-500 border border-red-200 p-4 rounded-xl mb-6 text-sm font-bold flex items-center gap-2">{updateError}</div>}
            {updateSuccess && <div className="bg-emerald-50 text-emerald-600 border border-emerald-200 p-4 rounded-xl mb-6 text-sm font-bold flex items-center gap-2"><FaCheckCircle /> Profile updated successfully!</div>}

            <form onSubmit={handleProfileUpdate} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-slate-900 dark:text-white font-medium"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-slate-900 dark:text-white font-medium"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Profile Image</label>
                <div className="flex gap-4 items-center">
                  {formData.profileImagePreview && (
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-slate-200 dark:border-slate-700 flex-shrink-0 bg-slate-100">
                      <img src={formData.profileImagePreview} alt="Preview" className="w-full h-full object-cover" onError={(e) => e.target.style.display = 'none'} />
                    </div>
                  )}
                  <div className="flex-1">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                          setFormData({
                            ...formData,
                            profileImageFile: file,
                            profileImagePreview: URL.createObjectURL(file)
                          });
                        }
                      }}
                      className="w-full text-sm text-slate-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition-all dark:file:bg-slate-700 dark:file:text-slate-200 dark:hover:file:bg-slate-600"
                    />
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-medium">Upload a JPG or PNG image. Max 5MB.</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 dark:border-slate-700 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="px-6 py-3 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold rounded-xl transition-all hover:bg-slate-200 dark:hover:bg-slate-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isUpdating}
                  className="flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-bold rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-blue-500/30"
                >
                  {isUpdating ? 'Saving...' : <><FaSave /> Save</>}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default Profile;
