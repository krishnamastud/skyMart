import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export const useAuthHook = () => {

    const navigate = useNavigate();
    const [registeredUser, setRegisteredUser] = useState(localStorage.getItem("registeredUser") ? JSON.parse(localStorage.getItem("registeredUser")) : []);

  console.log(registeredUser);

    const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    const user = registeredUser.find((user) => user.email === data.email && user.password === data.password );
    if (user) {
      toast.success("Login successful");
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      navigate("/main");
    } else {
      toast.error("Invalid email or password");
    }
  };

  const handleRegister = (data) => {
    let user = [...registeredUser, data]
    setRegisteredUser(() => user);
    localStorage.setItem("registeredUser", JSON.stringify(user));
    navigate("/main");
  };

  return {
    register,
    handleSubmit,
    errors,
    handleLogin,
    handleRegister,
    navigate,
  }

}