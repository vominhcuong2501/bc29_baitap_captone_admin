import React from "react";
import Header from "../component/header/header";
import { Outlet } from "react-router-dom";
import SideBar from "../component/side-bars/side-bars";

export default function AdminLayout() {
  return (
    <div className="container-fluid " >
      <Header />
      <div className="row">
        <div className="col-3 ">
          <SideBar />
        </div>
        <div className="col-9 " style={{height: '100%'}}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
