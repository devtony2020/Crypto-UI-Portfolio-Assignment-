import React from 'react';
import { useAuthContext } from '../context/AuthContext';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

function ProfilePage() {
  const { user } = useAuthContext();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="bg-white border border-gray-100 rounded-3xl shadow-xl overflow-hidden">
          {/* Header Banner */}
          <div className="h-32 bg-blue-600"></div>
          
          <div className="px-8 pb-12">
            {/* Profile Picture Placeholder */}
            <div className="relative -mt-16 mb-6">
              <div className="w-32 h-32 bg-gray-200 border-4 border-white rounded-full flex items-center justify-center text-4xl font-bold text-gray-400">
                {user?.name?.charAt(0).toUpperCase()}
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Account Settings</h1>
                <p className="text-gray-500 mt-1">Manage your profile and security settings.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-gray-100">
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Full Name</label>
                  <p className="text-lg font-medium text-gray-900">{user?.name}</p>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Email Address</label>
                  <p className="text-lg font-medium text-gray-900">{user?.email}</p>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Account Status</label>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <p className="text-lg font-medium text-gray-900">Verified</p>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Member Since</label>
                  <p className="text-lg font-medium text-gray-900">2025</p>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-100">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-500/20">
                  Update Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default ProfilePage;
