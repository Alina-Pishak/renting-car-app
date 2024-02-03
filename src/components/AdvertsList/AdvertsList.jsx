import AdvertsListItem from "../AdvertsListItem/AdvertsListItem";
import { List } from "./AdvertsList.styled";
import { useSelector } from "react-redux";

const AdvertsList = ({ filteredAdverts, setParams }) => {
  const { favorites } = useSelector((state) => state.favorites);
  return (
    filteredAdverts && (
      <List>
        <AdvertsListItem adverts={filteredAdverts} favorites={favorites} />
      </List>
    )
  );
};

export default AdvertsList;
