import React, { useContext } from "react";
import { Appcontext } from "../context/context";

const Profile = () => {
  const { name, email } = useContext(Appcontext);

  return (
    <div className="min-h-screen w-screen bg-gray-300 flex items-center justify-center px-4 py-8">
      <div className="relative w-full max-w-md rounded-xl bg-white p-6 flex flex-col md:h-[800px] md:p-10 shadow-lg">

        <div className="absolute top-0 left-0 w-full h-20 md:h-28 bg-white rounded-t-xl shadow-md curved-bg -z-10"></div>

        <div className="relative z-10 text-xl font-semibold p-6 border-b border-gray-300 rounded-t-xl">
          Account Settings
        </div>


        <div className="flex items-center gap-4 p-6">
          <div className="relative">
            <img
              src="https://i.pinimg.com/736x/93/e8/d0/93e8d0313894ff752ef1c6970116bad6.jpg"
              alt="profile"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="absolute bottom-0 right-0 bg-purple-600 rounded-full p-1 border-2 border-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M4 6h16M4 18h16"
                />
              </svg>
            </div>
          </div>

          <div>
            <p className="text-lg font-semibold text-gray-900">{name || "No Name"}</p>
            <p className="text-gray-600 text-sm">{email || "No Email"}</p>
          </div>
        </div>

        <div className="px-6 pb-6 text-gray-700 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.
        </div>
      </div>
    </div>
  );
};

export default Profile;
