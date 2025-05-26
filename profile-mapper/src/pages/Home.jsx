// src/pages/Home.jsx
import { useState } from "react";
import ProfileCard from "../components/ProfileCard";
import MapView from "../components/MapView";

const Home = ({ profiles }) => {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleSummaryClick = (profile) => {
    setSelectedProfile(profile);
  };

  return (
    <div className="p-4 flex flex-col lg:flex-row gap-4">
      {/* Profile Cards Section */}
      <div className="flex flex-col gap-4 w-full lg:w-1/2">
        {profiles.length > 0 ? (
          profiles.map((profile) => (
            <ProfileCard
              key={profile.id}
              profile={profile}
              onSummaryClick={handleSummaryClick}
            />
          ))
        ) : (
          <p className="text-gray-500 text-center">No profiles available.</p>
        )}
      </div>

      {/* Map Section */}
      <div className="w-full lg:w-1/2">
        {selectedProfile ? (
          <MapView
            coordinates={selectedProfile.coordinates}
            name={selectedProfile.name}
          />
        ) : (
          <div className="text-center text-gray-500 mt-10">
            Select a profile to view on map
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
