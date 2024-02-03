// import React from "react";
// import {
//   Image,
//   Item,
//   TextContainer,
// } from "../AdvertsListItem/AdvertsListItem.styled";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import { useDispatch } from "react-redux";
// import { removeFavorite } from "../../redux/favorites/favorites";

// const FavoritesListItem = ({ favorites }) => {
//   const dispatch = useDispatch();
//   const removeFromFavorites = (data) => {
//     // setFavorite(data.id);
//     dispatch(removeFavorite(data));
//   };
//   return favorites.map(
//     ({
//       id,
//       year,
//       make,
//       model,
//       type,
//       img,
//       functionalities,
//       rentalPrice,
//       rentalCompany,
//       address,
//     }) => (
//       <Item key={id}>
//         <FavoriteIcon
//           htmlColor="#3470FF"
//           sx={{ position: "absolute", top: "14px", right: "14px" }}
//           onClick={() => {
//             removeFromFavorites(
//               id,
//               year,
//               make,
//               model,
//               type,
//               img,
//               functionalities,
//               rentalPrice,
//               rentalCompany,
//               address
//             );
//           }}
//         />
//         <Image src={img} alt={make} width={274} height={268} />
//         <TextContainer>
//           <p>
//             {make}, {year}
//           </p>
//           <p>{rentalPrice}</p>
//         </TextContainer>
//         <span></span>
//         <span>{address}</span>
//         <span>{rentalCompany}</span>
//         <span>{type}</span>
//         <span></span>
//         <span>{make}</span>
//         <span>{id}</span>
//         <span>{functionalities[0]}</span>
//       </Item>
//     )
//   );
// };

// export default FavoritesListItem;

import { useState } from "react";
import {
  ContainerSecondText,
  Image,
  Item,
  LearnMoreBtn,
  MainText,
  SecondText,
  TextContainer,
} from "../AdvertsListItem/AdvertsListItem.styled";
import { useDispatch } from "react-redux";
import { removeFavorite } from "../../redux/favorites/favorites";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AdvertModal from "../AdvertModal/AdvertModal";

const FavoritesListItem = ({ favorites }) => {
  const [open, setOpen] = useState(false);
  const [advert, setAdvert] = useState({});
  const dispatch = useDispatch();
  const openModal = (data) => {
    setOpen(true);
    setAdvert(data);
  };
  const closeModal = () => {
    setOpen(false);
    setAdvert({});
  };
  const removeFromFavorites = (data) => {
    dispatch(removeFavorite(data));
  };
  return favorites.map(
    ({
      id,
      year,
      make,
      model,
      type,
      img,
      description,
      fuelConsumption,
      engineSize,
      accessories,
      functionalities,
      rentalPrice,
      rentalCompany,
      address,
      rentalConditions,
      mileage,
    }) => (
      <>
        {open && (
          <AdvertModal open={open} closeModal={closeModal} advert={advert} />
        )}
        <Item key={id}>
          <FavoriteIcon
            htmlColor="#3470FF"
            sx={{ position: "absolute", top: "14px", right: "14px" }}
            onClick={() => {
              removeFromFavorites(
                id,
                year,
                make,
                model,
                type,
                img,
                functionalities,
                rentalPrice,
                rentalCompany,
                address
              );
            }}
          />
          <Image src={img} alt={make} width={274} height={268} />
          <TextContainer>
            <MainText>
              {make}, {year}
            </MainText>
            <MainText>{rentalPrice}</MainText>
          </TextContainer>
          <ContainerSecondText>
            <SecondText>{rentalCompany}</SecondText>
            <SecondText>{type}</SecondText>
            <SecondText>{make}</SecondText>
            <SecondText>{id}</SecondText>
            <SecondText>{functionalities[0]}</SecondText>
          </ContainerSecondText>
          <LearnMoreBtn
            type="button"
            onClick={() =>
              openModal({
                id,
                year,
                make,
                model,
                type,
                img,
                description,
                fuelConsumption,
                engineSize,
                accessories,
                functionalities,
                rentalPrice,
                rentalCompany,
                address,
                rentalConditions,
                mileage,
              })
            }
          >
            Learn more
          </LearnMoreBtn>
        </Item>
      </>
    )
  );
};

export default FavoritesListItem;
