// src/pages/admin/AdminDashboard.jsx
import React, { useState } from "react";
import ProfileForm from "../components/ProfileForm";
import ProfileCard from "../components/ProfileCard";

const AdminDashboard = ({ profiles, setProfiles }) => {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleAdd = (profile) => {
    setProfiles([...profiles, { ...profile, id: Date.now() }]);
  };

  const handleDelete = (id) => {
    setProfiles(profiles.filter((p) => p.id !== id));
  };

  const handleEdit = (profile) => {
    setSelectedProfile(profile);
  };

  const handleUpdate = (updatedProfile) => {
    setProfiles(
      profiles.map((p) => (p.id === updatedProfile.id ? updatedProfile : p))
    );
    setSelectedProfile(null);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>

      <ProfileForm
        onSubmit={selectedProfile ? handleUpdate : handleAdd}
        initialData={selectedProfile}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {profiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            profile={profile}
            onDelete={() => handleDelete(profile.id)}
            onEdit={() => handleEdit(profile)}
            showActions
          />
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
