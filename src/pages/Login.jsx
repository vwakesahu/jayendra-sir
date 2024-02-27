import React, { useState } from "react";
import axios from "axios";

const DoctorLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    publicAddress: "", // Add publicAddress field
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/login", formData);

      if (response.data.success) {
        // Login was successful, you can navigate to the doctor's dashboard here
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return ( 
    <div className=" w-full flex flex-col items-center justify-center gap-6 md:mt-52">
      <form onSubmit={handleSubmit} className=" h-full border rounded-lg p-5 ">
        <p className=" text-lg font-semibold">Login</p>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
        />
        <input
          type="text"
          name="publicAddress"
          value={formData.publicAddress}
          onChange={handleChange}
          placeholder="Public Address"
          className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
        />
        <button
          type="submit"
          className=" border w-full p-2 px-2 mb-2 rounded-lg focus:outline-none bg-lightPrimary"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default DoctorLogin;
