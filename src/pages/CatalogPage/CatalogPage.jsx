import Filters from "../../components/Filters/Filters";
import AdvertsList from "../../components/AdvertsList/AdvertsList";
import { useState } from "react";
import { useGetAdvertsQuery } from "../../redux/adverts/adverts";
import { Container } from "../../components/App.styled";

const CatalogPage = () => {
  const [filter, setFilter] = useState({
    make: "",
    price: "",
    mileage: { from: "", to: "" },
  });
  const [params, setParams] = useState({ page: 1, limit: 12 });
  const data = useGetAdvertsQuery();
  const setFilterData = (filter) => {
    setFilter(filter);
  };
  const filteredAdverts = data.data?.filter(
    ({ make, rentalPrice, mileage }) =>
      make.includes(filter.make) &&
      (filter.price ? Number(rentalPrice.slice(1)) <= filter.price : true) &&
      (filter.mileage.from ? mileage >= filter.mileage.from : true) &&
      (filter.mileage.to ? mileage <= filter.mileage.to : true)
  );
  return (
    <Container>
      <Filters setFilterData={setFilterData} />
      <AdvertsList filteredAdverts={filteredAdverts} setParams={setParams} />
      <button
        type="button"
        onClick={() => setParams({ page: 2, limit: params.limit })}
      >
        Load more
      </button>
    </Container>
  );
};

export default CatalogPage;
