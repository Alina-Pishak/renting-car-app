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

export const FiltersLabel = styled.label`
  color: #8a8a89;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;
`;

export const FilterInputFrom = styled.input`
  width: 160px;
  height: 48px;
  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
  padding: 14px 24px;
  padding-left: 75px;
  border-radius: 14px 0px 0px 14px;
  border: none;
  border-right: 2px solid rgba(138, 138, 137, 0.2);
  background: #f7f7fb;
  &:focus {
    outline: none;
  }
`;

export const FilterInputTo = styled(FilterInputFrom)`
  padding-left: 50px;
  border-radius: 0px 14px 14px 0px;
  border-right: none;
`;

export const SearchButton = styled.button`
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
  width: 136px;
  height: 48px;
  border-radius: 12px;
  background: #3470ff;
  border: none;
  &:hover {
    background-color: #0b44cd;
  }
`;

export const InputFormWrapper = styled.div`
  position: relative;
`;

export const InputFormPlaceholder = styled.span`
  position: absolute;
  top: 14px;
  left: 24px;
  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
`;
