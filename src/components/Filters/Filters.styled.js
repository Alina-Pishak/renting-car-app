import { Select } from "@mui/material";
import styled from "styled-components";

export const FiltersForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 18px;
  margin-top: 30px;
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FlexContainer = styled.div`
  display: flex;
`;

export const SelectCustom = styled(Select)`
  height: 48px;
  border-radius: 14px;
  background: #f7f7fb;
  &:focus {
    border: none;
  }
`;

export const FiltersLabel = styled.label`
  color: #8a8a89;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3; /* 128.571% */
`;

export const FilterInputFrom = styled.input`
  width: 160px;
  height: 48px;
  padding: 14px 24px;
  border-radius: 14px 0px 0px 14px;
  border: none;
  border-right: 2px solid rgba(138, 138, 137, 0.2);
  background: #f7f7fb;
  &::placeholder {
    color: #121417;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.1; /* 111.111% */
  }
`;

export const FilterInputTo = styled(FilterInputFrom)`
  border-radius: 0px 14px 14px 0px;
  border-right: none;
`;

export const SearchButton = styled.button`
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4; /* 142.857% */
  width: 136px;
  height: 48px;
  border-radius: 12px;
  background: #3470ff;
  border: none;
`;
