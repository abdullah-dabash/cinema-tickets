import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../nav";
import Footer from "../footer";
const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const storageName = sessionStorage.getItem("name") || "";
    const storageEmail = sessionStorage.getItem("email") || "";
    const storagePassword = sessionStorage.getItem("password") || "";

    setName(storageName);
    setEmail(storageEmail);
    setPassword(storagePassword);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    sessionStorage.setItem("name", name);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("password", password);

    alert("Updated successfully");
  };

  return (
    <div className="Container">
      <Navbar />
      <section className="bg-page py-48 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto bg-gray-800 shadow-lg rounded-lg border border-gray-400">
            <div className="flex flex-col items-center py-8 px-6">
              <form className="w-full" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="username"
                    className="block text-white mt-2 text-lg font-Caveat"
                  >
                    Email:
                  </label>
                  <input
                    type="text"
                    id="username"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className=" block w-full px-3 py-2 border bg-transparent mt-3 border-gray-200 rounded-md shadow-sm text-gray-400 focus:outline-none focus:border-blue-900"
                  />
                </div>
                <div className="mb-4">
                  
                  <label
                    htmlFor="password"
                    className="block text-white mt-2 text-lg font-Caveat"
                  >
                    Password:
                  </label>
                  <input
                    type="password" // Added type="password" for better security
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className=" block w-full px-3 py-2 border bg-transparent mt-3 border-gray-200 rounded-md shadow-sm text-gray-400 focus:outline-none focus:border-blue-900"
                  />
                </div>
                <button
                  type="submit"
                  className=" text-white  bg-gray-700 hover:bg-blue-900  px-6 py-2 rounded-md shadow-md hover:bg-red2 focus:outline-none focus:ring-2 focus:ring-white mt-2"
                >
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Profile;