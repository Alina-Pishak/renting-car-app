import { useState } from "react";
import makes from "../../data/makes.json";
import {
  FilterContainer,
  FlexContainer,
  FiltersForm,
  FiltersLabel,
  SearchButton,
  SelectCustom,
  FilterInputTo,
  FilterInputFrom,
} from "./Filters.styled.js";
import { FormLabel, InputLabel, MenuItem, Select } from "@mui/material";

const Filters = ({ setFilterData }) => {
  const [make, setMake] = useState("");
  const [price, setPrice] = useState("");
  const [mileage, setMileage] = useState({});
  // const { data: adverts } = useGetAdvertsQuery({ page: 1, limit: 12 });
  // console.log(makes);
  // const handleSelectedMake = (data) => {
  //   setFilterData(data);
  // };
  const getFiltersData = (e) => {
    e.preventDefault();
    setFilterData({ make, price, mileage });
  };
  return (
    <FiltersForm onSubmit={getFiltersData}>
      <FilterContainer>
        <FiltersLabel htmlFor="make"> Car brand</FiltersLabel>

        <SelectCustom
          id="make"
          sx={{ width: "224px", borderRadius: "14px" }}
          value="Enter the text"
          onChange={(e) => setMake(e.target.value)}
        >
          {makes.map((make) => (
            <MenuItem key={make} value={make}>
              {make}
            </MenuItem>
          ))}
        </SelectCustom>
      </FilterContainer>
      {/* <div>

      <p>Car brand</p>
      <select name="make" onChange={(e) => setMake(e.target.value)}>
        <option value="">Enter the text</option>
        {makes.map((make) => (
          <option key={make} value={make}>
            {make}
          </option>
        ))}
      </select>
      </div> */}
      <FilterContainer>
        <FiltersLabel htmlFor="price">Price/ 1 hour</FiltersLabel>
        <SelectCustom
          name=""
          id="price"
          sx={{ width: "128px", borderRadius: "14px" }}
          value="to $"
          onChange={(e) => setPrice(e.target.value)}
        >
          <MenuItem value="10">10$</MenuItem>
          <MenuItem value="20">20$</MenuItem>
          <MenuItem value="30">30$</MenuItem>
          <MenuItem value="40">40$</MenuItem>
          <MenuItem value="50">50$</MenuItem>
          <MenuItem value="60">60$</MenuItem>
          <MenuItem value="70">70$</MenuItem>
          {/* {adverts?.map(({ id, rentalPrice }) => (
          <option key={id} value={Number(rentalPrice.slice(1))}>
            {rentalPrice}
          </option>
        ))} */}
        </SelectCustom>
      </FilterContainer>
      <FilterContainer>
        <FiltersLabel htmlFor="from">Сar mileage / km</FiltersLabel>
        <FlexContainer>
          <FilterInputFrom
            type="text"
            id="from"
            placeholder="From"
            onChange={(e) =>
              setMileage({ from: Number(e.target.value), to: mileage.to })
            }
          />
          <FilterInputTo
            type="text"
            placeholder="To"
            onChange={(e) =>
              setMileage({ from: mileage.from, to: Number(e.target.value) })
            }
          />
        </FlexContainer>
      </FilterContainer>

      <SearchButton type="submit">Search</SearchButton>
    </FiltersForm>
  );
};

export default Filters;
