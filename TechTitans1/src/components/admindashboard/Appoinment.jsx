import React from "react";
import Sidebar from "./Sidebar";

function Appoinment() {
  return (
    <div>
      <section className="appoinment">
        <aside className="sidebar w-64 h-screen fixed top-0   left-0 flex flex-col">
          <Sidebar />
        </aside>
        <main className="flex ml-24 mt-5 p-4"></main>
      </section>
    </div>
  );
}

export default Appoinment;
