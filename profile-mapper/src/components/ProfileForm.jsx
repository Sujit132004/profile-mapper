// src/components/ProfileForm.jsx
import { useState, useEffect } from "react"

const ProfileForm = ({ onSubmit, initialData = {}, onCancel }) => {
  const [name, setName] = useState("")
  const [photo, setPhoto] = useState("")
  const [description, setDescription] = useState("")
  const [lat, setLat] = useState("")
  const [lng, setLng] = useState("")

  useEffect(() => {
    if (initialData) {
      setName(initialData.name || "")
      setPhoto(initialData.photo || "")
      setDescription(initialData.description || "")
      setLat(initialData.coordinates ? initialData.coordinates[0] : "")
      setLng(initialData.coordinates ? initialData.coordinates[1] : "")
    }
  }, [initialData])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!name || !photo || !description || !lat || !lng) {
      alert("Please fill all fields")
      return
    }

    const profileData = {
      name,
      photo,
      description,
      coordinates: [parseFloat(lat), parseFloat(lng)],
    }

    onSubmit(profileData)
    // Reset form after submit
    setName("")
    setPhoto("")
    setDescription("")
    setLat("")
    setLng("")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded shadow bg-white">
      <div>
        <label className="block font-semibold mb-1">Name:</label>
        <input
          type="text"
          className="w-full border rounded px-2 py-1"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">Photo URL:</label>
        <input
          type="text"
          className="w-full border rounded px-2 py-1"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          placeholder="Enter photo URL"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">Description:</label>
        <textarea
          className="w-full border rounded px-2 py-1"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Brief description"
        />
      </div>

      <div className="flex space-x-4">
        <div className="flex-1">
          <label className="block font-semibold mb-1">Latitude:</label>
          <input
            type="number"
            step="any"
            className="w-full border rounded px-2 py-1"
            value={lat}
            onChange={(e) => setLat(e.target.value)}
            placeholder="e.g. 40.7128"
          />
        </div>

        <div className="flex-1">
          <label className="block font-semibold mb-1">Longitude:</label>
          <input
            type="number"
            step="any"
            className="w-full border rounded px-2 py-1"
            value={lng}
            onChange={(e) => setLng(e.target.value)}
            placeholder="e.g. -74.006"
          />
        </div>
      </div>

      <div className="flex space-x-4">
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Save
        </button>
        <button
          type="button"
          className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 transition"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  )
}

export default ProfileForm
