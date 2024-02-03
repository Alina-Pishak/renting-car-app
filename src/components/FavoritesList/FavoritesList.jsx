import { useSelector } from "react-redux";
import FavoritesListItem from "../FavoritesListItem/FavoritesListItem";
import { List } from "../AdvertsList/AdvertsList.styled";

const FavoritesList = () => {
  const { favorites } = useSelector((state) => state.favorites);
  return (
    favorites && (
      <List>
        <FavoritesListItem favorites={favorites} />
      </List>
    )
  );
};

export default FavoritesList;
