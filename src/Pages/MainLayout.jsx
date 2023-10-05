import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
import Home from "./Home";

function MainLayout() {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
}

export default MainLayout;
