import { useContext } from "react";
import { AuthData } from "../AuthProvider/AuthProvider";

function SingUp() {
  const { regester, user } = useContext(AuthData);

  const handleRegester = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = form.get("email");
    const pass = form.get("password");
    regester(email, pass)
      .then((res) => console.log(res.user))
      .catch((err) => console.log(err));
  };
  console.log(user);
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-1/4 p-4 border rounded-lg shadow-md">
        <h1 className="mb-4 text-2xl font-semibold">Sign Up</h1>
        <button className="w-full p-2 mb-2 text-white bg-red-600 rounded">
          Sign Up with Google
        </button>
        <button className="w-full p-2 mb-2 text-white bg-gray-800 rounded">
          Sign Up with GitHub
        </button>
        <button className="w-full p-2 mb-2 text-white bg-blue-500 rounded">
          Sign Up with Facebook
        </button>
        <div className="mt-4 text-center">
          <form onSubmit={handleRegester} action="">
            <p>Or sign up with email:</p>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 mb-2 border rounded"
              name="email"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 mb-4 border rounded"
              name="password"
            />
            <button
              type="submit"
              className="w-full p-2 text-white bg-green-500 rounded"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SingUp;
