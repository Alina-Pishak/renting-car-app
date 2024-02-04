import React from "react";
import FavoritesList from "../../components/FavoritesList/FavoritesList";
import { Container } from "../../components/App.styled";

const FavoritesPage = () => {
  return (
    <Container>
      <FavoritesList />
    </Container>
  );
};

export default FavoritesPage;
