import "./MainLayout.css";

import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";

function MainLayout({ children }) {
  return (
    <div className="layout">

      <Header />

      <div className="layout-body">

        <Sidebar />

        <main className="layout-content">

          {children}

        </main>

      </div>

    </div>
  );
}

export default MainLayout;