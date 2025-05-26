// src/components/ProfileCard.jsx

const ProfileCard = ({ profile, onSummaryClick, onEdit, onDelete }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-md">
      <img
        src={profile.photo}
        alt={profile.name}
        className="w-24 h-24 rounded-full object-cover mx-auto"
      />
      <h3 className="text-lg font-semibold text-center mt-2">{profile.name}</h3>
      <p className="text-gray-600 text-center">{profile.description}</p>
      <p className="text-sm text-center text-gray-500 mt-1">{profile.address}</p>

      <div className="mt-4 text-center">
        {onSummaryClick && (
          <button
            onClick={() => onSummaryClick(profile)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
          >
            Summary
          </button>
        )}

        {/* Admin Edit/Delete Buttons */}
        {(onEdit || onDelete) && (
          <div className="flex justify-center gap-2 mt-2">
            {onEdit && (
              <button
                onClick={() => onEdit(profile)}
                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
              >
                Edit
              </button>
            )}
            {onDelete && (
              <button
                onClick={() => onDelete(profile.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
