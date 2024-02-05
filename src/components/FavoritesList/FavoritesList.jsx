import { useSelector } from "react-redux";
import FavoritesListItem from "../FavoritesListItem/FavoritesListItem";
import { List, PlugContainer } from "../AdvertsList/AdvertsList.styled";

const FavoritesList = () => {
  const { favorites } = useSelector((state) => state.favorites);
  return favorites.length > 0 ? (
    <List>
      <FavoritesListItem favorites={favorites} />
    </List>
  ) : (
    <PlugContainer>No one advert was added to favorite</PlugContainer>
  );
};

export default FavoritesList;
