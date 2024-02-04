import { useState } from "react";
import makes from "../../data/makes.json";
import {
  FilterContainer,
  FlexContainer,
  FiltersForm,
  FiltersLabel,
  SearchButton,
  FilterInputTo,
  FilterInputFrom,
  InputFormPlaceholder,
  InputFormWrapper,
} from "./Filters.styled.js";
import Select from "react-select";
import {
  getMakesOptions,
  getPricesOptions,
  normalizeMileage,
} from "../../helpers";
import { selectStyles } from "./customSelectStyle.js";

const Filters = ({ setFilterData, adverts }) => {
  const [make, setMake] = useState("");
  const [price, setPrice] = useState("");
  const [mileage, setMileage] = useState({ from: "", to: "" });
  const getFiltersData = (e) => {
    e.preventDefault();
    setFilterData({ make, price, mileage });
  };
  return (
    <FiltersForm onSubmit={getFiltersData}>
      <FilterContainer>
        <FiltersLabel htmlFor="make"> Car brand</FiltersLabel>
        <Select
          value={make.value}
          onChange={(selectedOption) => setMake(selectedOption.value)}
          options={getMakesOptions(makes)}
          placeholder="Enter the text"
          styles={selectStyles}
        />
      </FilterContainer>
      <FilterContainer>
        <FiltersLabel htmlFor="price">Price/ 1 hour</FiltersLabel>
        <Select
          value={price.value}
          onChange={(selectedOption) => setPrice(selectedOption.value)}
          options={getPricesOptions(adverts)}
          placeholder="To $"
          styles={selectStyles}
        />
      </FilterContainer>
      <FilterContainer>
        <FiltersLabel htmlFor="from">Сar mileage / km</FiltersLabel>
        <FlexContainer>
          <InputFormWrapper>
            <InputFormPlaceholder>From</InputFormPlaceholder>
            <FilterInputFrom
              value={normalizeMileage(mileage.from)}
              id="from"
              onChange={({ target: { value } }) =>
                setMileage({ from: value, to: mileage.to })
              }
            />
          </InputFormWrapper>
          <InputFormWrapper>
            <InputFormPlaceholder>To</InputFormPlaceholder>
            <FilterInputTo
              value={normalizeMileage(mileage.to)}
              onChange={({ target: { value } }) =>
                setMileage({ from: mileage.from, to: value })
              }
            />
          </InputFormWrapper>
        </FlexContainer>
      </FilterContainer>

      <SearchButton type="submit">Search</SearchButton>
    </FiltersForm>
  );
};

export default Filters;
