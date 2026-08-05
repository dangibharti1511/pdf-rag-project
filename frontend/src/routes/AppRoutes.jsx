import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Favorites from "../pages/Favorites/Favorites";
import Workspace from "../pages/Workspace/Workspace";
import Documents from "../pages/Documents/Documents";
import Chat from "../pages/Chat/Chat";
import Analytics from "../pages/Analytics/Analytics";
import Settings from "../pages/Settings/Settings";

function AppRoutes() {
  return (
    <BrowserRouter>

      <MainLayout>

        <Routes>

          <Route
            path="/"
            element={<Workspace />}
          />

          <Route
            path="/documents"
            element={<Documents />}
          />

          <Route
            path="/chat"
            element={<Chat />}
          />

          <Route
            path="/analytics"
            element={<Analytics />}
          />

          <Route
            path="/settings"
            element={<Settings />}
          />

          <Route
            path="/favorites"
            element={<Favorites />}
          />

          <Route
            path="/favorites"
            element={<Favorites />}
          />

        </Routes>

      </MainLayout>

    </BrowserRouter>
  );
}

export default AppRoutes;