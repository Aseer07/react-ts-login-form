import useForm from "./hooks";

function LoginForm() {
  const {
    values,
    errors,
    showPassword,
    toggleShowPassword,
    handleChange,
    handleSubmit,
  } = useForm({
    email: "",
    password: "",
  });

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
        <div className="hidden sm:block">
          <img
            className="w-full h-full object-cover"
            src="./img/image.jpg"
            alt="login image"
          />
        </div>
        <div className="bg-white-800 flex flex-col justify-center">
          <form
            onSubmit={handleSubmit}
            className="max-w-[400px] w-full mx-auto bg-white-900 p-8 px-8 rounded-lg"
          >
            <h2 className="text-4xl font-bold text-center ">
              Welcome <span className="text-green-500">Back!</span>
            </h2>
            <p className="text-center text-gray-600">Glad to see you again</p>
            <div className="flex flex-col text-white-400 py-2">
              <input
                className="rounded-lg border border-gray-300 bg-white-300 mt-2 p-2 focus:border-gray-500 focus:bg-white-800 focus: outline-none"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="Enter your Email"
              />
              {errors.email && (
                <p className={`text-red-500 ${errors.email ? "" : "hidden"}`}>
                  {errors.email}
                </p>
              )}
            </div>

            <div className="flex flex-col text-white-400 py-2 relative">
              <input
                className=" rounded-lg border border-gray-300 bg-white-300 mt-2 p-2 focus:border-gray-500 focus:bg-white-800 focus: outline-none"
                type={showPassword ? "text" : "password"}
                name="password"
                value={values.password}
                onChange={handleChange}
                placeholder="Enter your password"
              />

              {errors.password && (
                <p
                  className={`text-red-500 ${errors.password ? "" : "hidden"}`}
                >
                  {errors.password}
                </p>
              )}

              <div
                className="absolute top-1/2 right-3 -translate-y-1/2"
                style={{ marginTop: "-0.75rem" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-eye  cursor-pointer"
                  viewBox="0 0 16 16"
                  onClick={toggleShowPassword}
                >
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                </svg>
              </div>
              <p className="text-right">Forget Password</p>
            </div>

            <button className="bg-black text-white my-3 px-4 py-2 rounded-md w-full shadow-lg shadow-black hover:scale-105 duration-300">
              Log in
            </button>

            <p className="text-center text-gray-500 my-5">
              Don`t an account yet?{" "}
              <span className="text-green-500 font-bold">Sign Up</span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
