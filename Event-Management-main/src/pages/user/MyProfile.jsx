import React, { useState, useEffect } from "react";
import { useAppContext } from "../../context/AppContext";
import { BsPerson } from "react-icons/bs";
import { FiEdit2, FiSave, FiX, FiCamera } from "react-icons/fi";

const MyProfile = () => {
  const { user, navigate } = useAppContext();
  const [isEditing, setIsEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    place: "",
    profileImage: "",
  });
  const [profileImageFile, setProfileImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  useEffect(() => {
    // Check if user is logged in
    if (!user) {
      navigate("/");
      return;
    }

    // Load profile data from localStorage or initialize with user data
    const savedProfile = localStorage.getItem(`profile_${user.email}`);
    if (savedProfile) {
      const parsed = JSON.parse(savedProfile);
      setProfileData({
        name: user.name || "",
        email: user.email || "",
        phone: parsed.phone || "",
        address: parsed.address || "",
        place: parsed.place || "",
        profileImage: parsed.profileImage || "",
      });
      if (parsed.profileImage) {
        setImagePreview(parsed.profileImage);
      }
    } else {
      // Initialize with user data from context
      setProfileData({
        name: user.name || "",
        email: user.email || "",
        phone: "",
        address: "",
        place: "",
        profileImage: "",
      });
    }
  }, [user, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    try {
      setSaving(true);
      
      // Create profile object to save (excluding name and email)
      const profileToSave = {
        phone: profileData.phone,
        address: profileData.address,
        place: profileData.place,
        profileImage: imagePreview || profileData.profileImage,
      };

      // Save to localStorage
      localStorage.setItem(`profile_${user.email}`, JSON.stringify(profileToSave));

      // Update profileData with saved image
      setProfileData((prev) => ({
        ...prev,
        profileImage: imagePreview || prev.profileImage,
      }));

      setProfileImageFile(null);
      setIsEditing(false);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error saving profile:", error);
      alert("Failed to save profile");
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    // Reload from localStorage
    const savedProfile = localStorage.getItem(`profile_${user.email}`);
    if (savedProfile) {
      const parsed = JSON.parse(savedProfile);
      setProfileData({
        name: user.name || "",
        email: user.email || "",
        phone: parsed.phone || "",
        address: parsed.address || "",
        place: parsed.place || "",
        profileImage: parsed.profileImage || "",
      });
      setImagePreview(parsed.profileImage || "");
    } else {
      setProfileData({
        name: user.name || "",
        email: user.email || "",
        phone: "",
        address: "",
        place: "",
        profileImage: "",
      });
      setImagePreview("");
    }
    setProfileImageFile(null);
    setIsEditing(false);
  };

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-700 to-cyan-500 px-6 py-8">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold text-white">My Profile</h1>
              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-white text-blue-700 rounded-lg hover:bg-gray-100 transition font-medium"
                >
                  <FiEdit2 /> Edit Profile
                </button>
              ) : (
                <div className="flex gap-2">
                  <button
                    onClick={handleSave}
                    disabled={saving}
                    className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition disabled:opacity-50 font-medium"
                  >
                    <FiSave /> {saving ? "Saving..." : "Save Changes"}
                  </button>
                  <button
                    onClick={handleCancel}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition font-medium"
                  >
                    <FiX /> Cancel
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Profile Content */}
          <div className="px-6 py-8">
            {/* Profile Image Section */}
            <div className="flex flex-col items-center mb-8">
              <div className="relative">
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Profile"
                    className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow-lg"
                  />
                ) : (
                  <div className="w-32 h-32 rounded-full bg-blue-500 flex items-center justify-center border-4 border-blue-500 shadow-lg">
                    <BsPerson className="text-white text-5xl" />
                  </div>
                )}
                {isEditing && (
                  <label className="absolute bottom-0 right-0 bg-blue-500 text-white p-3 rounded-full cursor-pointer hover:bg-blue-600 transition shadow-lg">
                    <FiCamera className="text-lg" />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </label>
                )}
              </div>
            </div>

            {/* Profile Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name - Read Only */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name <span className="text-gray-400 text-xs">(Cannot be changed)</span>
                </label>
                <p className="px-4 py-2 bg-gray-100 rounded-lg text-gray-800 border border-gray-200">
                  {profileData.name}
                </p>
              </div>

              {/* Email - Read Only */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email <span className="text-gray-400 text-xs">(Cannot be changed)</span>
                </label>
                <p className="px-4 py-2 bg-gray-100 rounded-lg text-gray-800 border border-gray-200">
                  {profileData.email}
                </p>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                {isEditing ? (
                  <input
                    type="tel"
                    name="phone"
                    value={profileData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="Enter your phone number"
                  />
                ) : (
                  <p className="px-4 py-2 bg-gray-50 rounded-lg text-gray-800 border border-gray-200">
                    {profileData.phone || "Not set"}
                  </p>
                )}
              </div>

              {/* Place */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Place
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="place"
                    value={profileData.place}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="Enter your place"
                  />
                ) : (
                  <p className="px-4 py-2 bg-gray-50 rounded-lg text-gray-800 border border-gray-200">
                    {profileData.place || "Not set"}
                  </p>
                )}
              </div>

              {/* Address */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address
                </label>
                {isEditing ? (
                  <textarea
                    name="address"
                    value={profileData.address}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                    placeholder="Enter your full address"
                  />
                ) : (
                  <p className="px-4 py-2 bg-gray-50 rounded-lg text-gray-800 border border-gray-200 min-h-[80px]">
                    {profileData.address || "Not set"}
                  </p>
                )}
              </div>
            </div>

            {/* Info Message */}
            {!isEditing && (
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> Click "Edit Profile" to update your phone number, address, place, and profile image. Name and email cannot be changed.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
