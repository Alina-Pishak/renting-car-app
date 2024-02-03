import { useState } from "react";
import {
  AccessoriesFunctionalities,
  AdvertDescription,
  AdvertText,
  AdvertTitle,
  ContainerSecondText,
  ContainerText,
  DecorateLine,
  Image,
  Item,
  LearnMoreBtn,
  MainText,
  ModalContainer,
  ModalImage,
  RentalBtn,
  RentalConditionsText,
  RentalConditionsTitle,
  SecondText,
  TextContainer,
} from "./AdvertsListItem.styled";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useDispatch } from "react-redux";
import { addFavorites, removeFavorite } from "../../redux/favorites/favorites";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, Modal, Typography } from "@mui/material";
import AdvertModal from "../AdvertModal/AdvertModal";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AdvertsListItem = ({ adverts, favorites }) => {
  const [open, setOpen] = useState(false);
  console.log(open);
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
  const addToFavorites = (data) => {
    dispatch(addFavorites(data));
  };
  const removeFromFavorites = (data) => {
    dispatch(removeFavorite(data));
  };
  return adverts.map(
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
          <FavoriteBorderIcon
            onClick={() => {
              addToFavorites({
                id,
                year,
                make,
                model,
                type,
                img,
                functionalities,
                rentalPrice,
                rentalCompany,
                address,
              });
            }}
            htmlColor="#fff"
            sx={{ position: "absolute", top: "14px", right: "14px" }}
          />
          {favorites.map(
            (data) =>
              data.id === id && (
                <FavoriteIcon
                  key={id}
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
              )
          )}
          <Image src={img} alt={make} width={274} height={268} />
          <TextContainer>
            <MainText>
              {make}, {year}
            </MainText>
            <MainText>{rentalPrice}</MainText>
          </TextContainer>
          <ContainerSecondText>
            {/* <DecorateLine></DecorateLine> */}
            {/* <SecondText>{address}</SecondText> */}
            {/* <DecorateLine></DecorateLine> */}
            <SecondText>{rentalCompany}</SecondText>
            {/* <DecorateLine></DecorateLine> */}
            <SecondText>{type}</SecondText>
            {/* <DecorateLine></DecorateLine> */}
            {/* <SecondText></SecondText> */}
            <SecondText>{make}</SecondText>
            {/* <DecorateLine></DecorateLine> */}
            <SecondText>{id}</SecondText>
            {/* <DecorateLine></DecorateLine> */}
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
    // {
    //     return favorites.map(
    //       (data) =>
    //         id === data.id && (
    //           <Item key={id}>
    //             <FavoriteIcon
    //               htmlColor="#3470FF"
    //               sx={{ position: "absolute", top: "14px", right: "14px" }}
    //               onClick={() => {
    //                 removeFromFavorites(
    //                   id,
    //                   year,
    //                   make,
    //                   model,
    //                   type,
    //                   img,
    //                   functionalities,
    //                   rentalPrice,
    //                   rentalCompany,
    //                   address
    //                 );
    //               }}
    //             />

    //             <Image src={img} alt={model} width={274} height={268} />
    //             <TextContainer>
    //               <p>
    //                 {model}, {year}
    //               </p>
    //               <p>{rentalPrice}</p>
    //             </TextContainer>
    //             <span></span>
    //             <span>{address}</span>
    //             <span>{rentalCompany}</span>
    //             <span>{type}</span>
    //             <span></span>
    //             <span>{make}</span>
    //             <span>{id}</span>
    //             <span>{functionalities[0]}</span>
    //           </Item>
    //         )
    //     )
    //   }
  );
};

export default AdvertsListItem;

//  id,
//   year,
//   make,
//   model,
//   type,
//   img,
//   description,
//   fuelConsumption,
//   engineSize,
//   accessories,
//   functionalities,
//   rentalPrice,
//   rentalCompany,
//   address,
//   rentalConditions,
//   mileage,
