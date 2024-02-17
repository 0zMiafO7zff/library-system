import { useState } from "react";
// import { useHistory } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  // };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white p-8 rounded shadow-2xl w-96">
          <h2 className="text-2xl font-semibold mb-4">
            โปรแกรมระบบงานห้องสมุด
          </h2>
          <hr />
          <h2 className="text-xl font-semibold mt-6 mb-10">เข้าสู่ระบบ</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                ชื่อผู้ใช้
              </label>
              <input
                type="text"
                id="m_user"
                name="username"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                รหัสผ่าน
              </label>
              <input
                type="password"
                id="m_pass"
                name="password"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-green-600 mx-auto text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
              >
                เข้าสู่ระบบ
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
