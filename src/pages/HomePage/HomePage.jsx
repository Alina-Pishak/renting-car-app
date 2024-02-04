import React from "react";
import { HeroBtn, HeroContainer, HeroText, HeroTitle } from "./HomePage.styled";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <HeroContainer>
      <HeroTitle>
        RENT A QUALIFIED CAR IN ATLANTA FOR ANY RIDESHARE OR DELIVERY SERVICE
      </HeroTitle>
      <HeroText> Daily Rentals. Commitment Free. Insurance Provided.</HeroText>
      <HeroBtn type="button" onClick={() => navigate("catalog")}>
        Find A Car
      </HeroBtn>
    </HeroContainer>
  );
};

export default HomePage;
