import { Route, Routes } from "react-router-dom";
import Authroutes from "./routes/Authroutes";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import Adminprotectedroutes, {
  Studentprotectedroute,
} from "./routes/Protectedroutes";
import Portal from "./pages/Portal";
import Attendance from "./pages/Attendance";
import Addstd from "./pages/Addstd";
import "react-toastify/dist/ReactToastify.css";
import { Bounce, ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Authroutes />}>
          <Route index element={<Signin />} />
        </Route>

        <Route element={<Adminprotectedroutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Attendance" element={<Attendance />} />
          <Route path="/addstd" element={<Addstd />} />
        </Route>

        <Route element={<Studentprotectedroute />}>
          <Route path="/portal" element={<Portal />} />
        </Route>
      </Routes>

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
        transition={Bounce}
      />
    </>
  );
}

export default App;
