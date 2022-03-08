import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/Layout";
import Landing from "./services/landing/Index";
import Contact from "./services/contact/Index";
import Project from "./services/project/Index";
import Profile from "./services/profile/Index";

export default function App() {
  return (
    window.location.host.split(".")[0] == "contact"
      ? <Routes>
        <Route index element={<Contact />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
      : <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
  );
};
