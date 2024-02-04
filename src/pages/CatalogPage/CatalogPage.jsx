import Filters from "../../components/Filters/Filters";
import AdvertsList from "../../components/AdvertsList/AdvertsList";
import { useEffect, useState } from "react";
import { useGetAdvertsQuery } from "../../redux/adverts/adverts";
import { Container } from "../../components/App.styled";

const CatalogPage = () => {
  const [filter, setFilter] = useState({
    make: "",
    price: "",
    mileage: { from: "", to: "" },
  });
  const [params, setParams] = useState({ page: 1, limit: 12 });
  const [allAdverts, setAllAdverts] = useState([]);
  const { data: adverts, isSuccess } = useGetAdvertsQuery(params);
  useEffect(() => {
    if (isSuccess) {
      setAllAdverts((prev) =>
        prev.includes(...adverts) ? [...adverts] : [...prev, ...adverts]
      );
    }
  }, [adverts, isSuccess]);
  const setFilterData = (filter) => {
    setFilter(filter);
  };
  const filteredAdverts = allAdverts?.filter(
    ({ make, rentalPrice, mileage }) =>
      make.includes(filter.make) &&
      (filter.price ? Number(rentalPrice.slice(1)) <= filter.price : true) &&
      (filter.mileage.from ? mileage >= Number(filter.mileage.from) : true) &&
      (filter.mileage.to ? mileage <= Number(filter.mileage.to) : true)
  );
  return (
    <Container>
      <Filters setFilterData={setFilterData} adverts={allAdverts} />
      <AdvertsList filteredAdverts={filteredAdverts} setParams={setParams} />
    </Container>
  );
};

export default CatalogPage;
