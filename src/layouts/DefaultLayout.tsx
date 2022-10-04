import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

export function DefaultLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}