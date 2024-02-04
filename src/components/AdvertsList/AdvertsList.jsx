import AdvertsListItem from "../AdvertsListItem/AdvertsListItem";
import { List, LoadMoreBtn } from "./AdvertsList.styled";
import { useSelector } from "react-redux";

const AdvertsList = ({ filteredAdverts, setParams }) => {
  const { favorites } = useSelector((state) => state.favorites);
  return (
    filteredAdverts && (
      <>
        <List>
          <AdvertsListItem adverts={filteredAdverts} favorites={favorites} />
        </List>
        {filteredAdverts.length <= 36 && (
          <LoadMoreBtn
            type="button"
            onClick={() =>
              setParams((perv) => ({ page: perv.page + 1, limit: perv.limit }))
            }
          >
            Load more
          </LoadMoreBtn>
        )}
      </>
    )
  );
};

export default AdvertsList;
