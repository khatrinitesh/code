import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  isAdminCredentials,
  validateEmail,
  validatePassword,
} from "../../utils/utils";
import Button from "../../components/button/Button";
import FieldInput from "./../../components/fieldInput/FieldInput";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!validateEmail(form.email)) {
      newErrors.email = "Invalid email format";
      toast.error("Please enter a valid email address.");
    }

    if (!validatePassword(form.password)) {
      newErrors.password = "Password must be at least 6 characters.";
      toast.error("Password must be at least 6 characters.");
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (!isAdminCredentials(form.email, form.password)) {
      toast.error("Invalid credentials.");
      return;
    }

    localStorage.setItem("isAuthenticated", "true");
    toast.success("Login successful!");
    navigate("/dashboard");
  };

  useEffect(() => {
    // Add class to body on mount
    document.body.classList.add("body-login-bg");

    // Clean up the class on unmount
    return () => {
      document.body.classList.remove("body-login-bg");
    };
  }, []);

  return (
    <div className="min-h-screen w-full px-[1rem]  flex items-center justify-center bg-color2">
      <div className="bg-[#010d4a] shadow rounded-[10px] border-[3px] border-[#b5f5f8] p-[20px] w-full max-w-full md:max-w-[60%] lg:max-w-[40%]">
        <div className="logoBlock flex justify-center">
          <img src="/img/logo.png" alt="" className="max-auto block" />
        </div>
        <form
          onSubmit={handleSubmit}
          className="grid bg-white px-[20px] lg:px-[50px] py-[20px]"
        >
          <div className="flex flex-col lg:flex-row lg:items-center gap-[10px]">
            <label className="poppins-medium text-black text-smallDescription">
              Username:
            </label>
            <FieldInput
              id="email"
              name="email"
              type="text"
              label="Username:"
              placeholder="Enter your username"
              value={form.email}
              onChange={handleChange}
              error={errors.email}
              variant="default"
              className=""
              animate=""
            />
          </div>

          <hr className="h-[2px] bg-black border-none my-4" />

          <div className="flex flex-col lg:flex-row lg:items-center gap-[10px]">
            <label className="poppins-medium text-black text-smallDescription">
              Password:
            </label>
            <FieldInput
              id="password"
              name="password"
              type="password"
              label="Password:"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              error={errors.password}
              variant="default"
              className=""
            />
          </div>

          <hr className="h-[2px] bg-black border-none my-4" />

          <div className="btnBlock">
            <Button
              label="Login"
              variant="darkblue"
              isLoading={false}
              className="rounded-full w-[50%] mx-auto"
            />
          </div>
        </form>

        <p className="text-center text-extraSmallDescription text-white mt-4">
          Forgot your password? Click{" "}
          <a href="#" className="underline text-color3 font-bold">
            here
          </a>{" "}
          to reset.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
