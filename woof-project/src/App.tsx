import { Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="not-found" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="not-found" replace={true} />} />
      </Routes>
    </>
  );
}

export default App;
