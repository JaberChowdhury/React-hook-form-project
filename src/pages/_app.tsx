import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";

export default function App() {
  return (
    <div className="p-4">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
