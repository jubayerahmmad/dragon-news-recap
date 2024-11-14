import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AuthLayout = () => {
  return (
    <div className="font-poppins bg-[#f3f3f3] min-h-screen">
      <header className="w-10/12 mx-auto py-6">
        <Navbar></Navbar>
      </header>
      <main className="flex justify-center items-center mt-8">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default AuthLayout;
