import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import { Suspense, lazy } from "react";
import { Box, CircularProgress } from "@mui/material";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("../pages/CatalogPage/CatalogPage"));
const FavoritesPage = lazy(() =>
  import("../pages/FavoritesPage/FavoritesPage")
);

const App = () => {
  return (
    <Suspense
      fallback={
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50%",
          }}
        >
          <CircularProgress />
        </Box>
      }
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
