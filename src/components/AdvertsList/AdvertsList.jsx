import AdvertsListItem from "../AdvertsListItem/AdvertsListItem";
import { List, LoadMoreBtn, PlugContainer } from "./AdvertsList.styled";
import { useSelector } from "react-redux";

const AdvertsList = ({ filteredAdverts, setParams }) => {
  const { favorites } = useSelector((state) => state.favorites);
  return filteredAdverts.length > 0 ? (
    <>
      <List>
        <AdvertsListItem adverts={filteredAdverts} favorites={favorites} />
      </List>
      {filteredAdverts.length <= 36 && filteredAdverts.length > 0 && (
        <LoadMoreBtn
          type="button"
          onClick={() =>
            setParams((perv) => ({
              page: perv.page + 1,
              limit: perv.limit,
            }))
          }
        >
          Load more
        </LoadMoreBtn>
      )}
    </>
  ) : (
    <PlugContainer>Nothing was found</PlugContainer>
  );
};

export default AdvertsList;
