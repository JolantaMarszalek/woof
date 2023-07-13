import { Navigate, Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import DogListPage from "./pages/DogListPage";
import { Layout } from "./components/Layout/Layout.component";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<DogListPage />} />
          {/* <Route path="dog-search" element={<DogSearchPage />} /> */}
          <Route path="not-found" element={<NotFoundPage />} />
          <Route
            path="*"
            element={<Navigate to="not-found" replace={true} />}
          />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
