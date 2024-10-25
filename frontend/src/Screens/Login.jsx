import { useState } from "react";
import { Login as authLogin } from "../Services/Auth/Login.js";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader"; // Import the spinner
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitLogin = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      toast.error("Both fields are required.");
      return;
    }

    setLoading(true);

    try {
      const response = await authLogin({ email, password });
      console.log("Login successful:", response.user);

      setEmail("");
      setPassword("");
      toast.success("Login successful!");
      // navigate("/register");
    } catch (err) {
      console.error("Failed to login", err);
      toast.error("Failed to login. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 font-[sans-serif]">
      <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
        <div className="max-w-md w-full">
          <div className="p-8 rounded-2xl bg-white shadow">
            <h2 className="text-gray-800 text-center text-2xl font-bold">
              Sign in
            </h2>

            {/* Spinner directly below the header */}
            {loading && (
              <div className="flex justify-center my-4">
                <ClipLoader color='blue' loading={loading} size={30} />
              </div>
            )}

            <form onSubmit={submitLogin} className="mt-8 space-y-4">
              <div>
                <label className="text-gray-800 text-sm mb-2 block">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="text-gray-800 text-sm mb-2 block">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  required
                  className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-3 block text-sm text-gray-800"
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a
                    href="javascript:void(0);"
                    className="text-blue-600 hover:underline font-semibold"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
              <div className="!mt-8">
                <button
                  type="submit"
                  className="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                  disabled={loading}
                >
                  {loading ? "Signing in..." : "Sign in"}
                </button>
              </div>
            </form>
            <p className="text-gray-800 text-sm !mt-8 text-center">
              Don't have an account?{" "}
              <a
                href="./Register"
                className="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold"
              >
                Register here
              </a>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
      />
    </div>
  );
};

export default Login;
