import { Navigate, Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import DogListPage from "./pages/DogListPage";
import { Layout } from "./components/Layout/Layout.component";
import DogSearchPage from "./pages/DogSearchPage";
import SingleDogPage from "./pages/SingleDogPage";
import DogNotFoundPage from "./pages/DogNotFoundPage";
import BreedDogPage from "./pages/BreedDogPage";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<DogListPage />} />
          <Route path="dog-search" element={<DogSearchPage />} />
          <Route path="dog-page/:dog" element={<SingleDogPage />} />
          <Route path="dog-page/:dog/:subBreed" element={<BreedDogPage />} />
          <Route path="dog-not" element={<DogNotFoundPage />} />
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
