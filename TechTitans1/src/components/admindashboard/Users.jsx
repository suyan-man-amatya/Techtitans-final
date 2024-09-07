import React from "react";
import Sidebar from "./Sidebar";

function Users() {
  return (
    <div>
      <section className="users">
        <aside className="sidebar w-64 h-screen fixed top-0   left-0 flex flex-col">
          <Sidebar />
        </aside>
      </section>
    </div>
  );
}

export default Users;
