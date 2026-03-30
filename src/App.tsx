import { Toaster } from "react-hot-toast";
import { Link, Route, Routes } from "react-router-dom";
import Register from "./pages/Lab1";
import DemoTable from "./pages/Lab2";
import LoginFrom from "./pages/Lab3";
import AddCategory from "./pages/Lab4";
import StoryList from "./pages/lab5";

function App() {
  return (
    <>
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold">
            <strong>WEB2091 App</strong>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/register" className="hover:text-gray-200">
              Lap1
            </Link>
            <Link to="/" className="hover:text-gray-200">
              Lap2
            </Link>
            <Link to="/login" className="hover:text-gray-200">
              Lap3
            </Link>
            <Link to="/story" className="hover:text-gray-200">
              Lap4
            </Link>
            <Link to="/storys" className="hover:text-gray-200">
              Lap5
            </Link>
            <Link to="/storyid" className="hover:text-gray-200">
              Lap6
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="/logins" className="hover:text-gray-200">
              Đăng nhập
            </Link>
            <Link to="/add" className="hover:text-gray-200">
              Đăng Ký
            </Link>
          </div>
        </div>
      </nav>

      {/* ROUTES */}
      <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
      <Routes>
  <Route
    path="/"
    element={
      <>
        <h1 className="text-4xl font-bold mb-4">
          Chào mừng đến với WEB2091
        </h1>
        <DemoTable />
      </>
    }
  />

  <Route path="/register" element={<Register />} />
  <Route path="/login" element={<LoginFrom />} />
  <Route path="/story" element={<AddCategory />} />
  <Route path="/storys" element={<StoryList />} />

  {/* ✅ thêm 2 cái này */}
  <Route path="/logins" element={<LoginFrom />} />
  <Route path="/add" element={<Register />} />
</Routes>
      </div>

      <Toaster />
    </>
  );
}

export default App;