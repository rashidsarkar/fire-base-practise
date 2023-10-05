import { useContext } from "react";
import { AuthData } from "../AuthProvider/AuthProvider";

function Login() {
  const { logIn } = useContext(AuthData);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    logIn(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-1/4 p-4 border rounded-lg shadow-md">
        <form onSubmit={handleLogin} action="">
          <h1 className="mb-4 text-2xl font-semibold">Login</h1>
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
            className="w-full p-2 text-white bg-blue-500 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
