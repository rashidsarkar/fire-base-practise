function UserControl() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-1/4 p-4 border rounded-lg shadow-md">
        <h1 className="mb-4 text-2xl font-semibold">User Control</h1>
        <div className="flex items-center justify-center mb-4">
          <div className="w-20 h-20 overflow-hidden rounded-full">
            <img
              // Use a default image URL if the user's profile image is not set
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <p>Welcome, !</p>
        <div className="mt-4">
          <label className="block">Change Username:</label>
          <input type="text" className="w-full p-2 mb-2 border rounded" />
          <button className="w-full p-2 text-white bg-blue-500 rounded">
            Save Username
          </button>
        </div>
        <div className="mt-4">
          <label className="block">Change Profile Image:</label>
          <input
            type="file"
            accept="image/*"
            className="w-full p-2 mb-2 border rounded"
          />
          <button className="w-full p-2 text-white bg-green-500 rounded">
            Upload Profile Image
          </button>
        </div>
        <button className="w-full p-2 mt-4 text-white bg-red-500 rounded">
          Logout
        </button>
      </div>
    </div>
  );
}

export default UserControl;
