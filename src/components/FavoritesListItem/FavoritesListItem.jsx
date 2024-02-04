import { useState } from "react";
import {
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
import { normalizeAddress } from "../../helpers";
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
  return (
    <>
      {open && (
        <AdvertModal open={open} closeModal={closeModal} advert={advert} />
      )}
      {favorites.map((advert) => (
        <Item key={advert.id}>
          <FavoriteIcon
            htmlColor="#3470FF"
            sx={{ position: "absolute", top: "14px", right: "14px" }}
            onClick={() => {
              removeFromFavorites(advert.id);
            }}
          />
          <Image src={advert.img} alt={advert.make} width={274} height={268} />
          <TextContainer>
            <MainText>
              {advert.make}, {advert.year}
            </MainText>
            <MainText>{advert.rentalPrice}</MainText>
          </TextContainer>
          <SecondText>
            {normalizeAddress(advert.address)}&nbsp;|&nbsp;
            {advert.rentalCompany}
            &nbsp;|&nbsp;{advert.type}&nbsp;|&nbsp;
            {advert.make}&nbsp;|&nbsp;
            {advert.id}&nbsp;|&nbsp;{advert.functionalities[0]}
          </SecondText>
          <LearnMoreBtn type="button" onClick={() => openModal(advert)}>
            Learn more
          </LearnMoreBtn>
        </Item>
      ))}
    </>
  );
};

export default FavoritesListItem;
