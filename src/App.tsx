import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/Layout";
import Landing from "./services/landing/Index";
import Contact from "./services/contact/Index";
import Project from "./services/project/Index";

export default function App() {
  return (
    <Routes>
      <Route path="/contact" element={<Contact />} />
      <Route path="/*" element={<Navigate to="/contact" />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
