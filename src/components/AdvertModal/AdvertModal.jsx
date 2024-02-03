import { Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {
  AccessoriesFunctionalities,
  AdvertDescription,
  AdvertText,
  AdvertTitle,
  CloseBtn,
  ContainerText,
  ModalContainer,
  ModalImage,
  RentalBtn,
  RentalConditionsText,
  RentalConditionsTitle,
  RentalLink,
} from "./AdvertModal.styled";

const AdvertModal = ({
  advert: {
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
  },
  closeModal,
  open,
}) => {
  const arrayFunctionalitiesAccessories = [...functionalities, ...accessories];
  return (
    <Modal open={open} onClose={closeModal}>
      <ModalContainer>
        <CloseBtn onClick={closeModal}>
          <CloseIcon
          // sx={{ position: "absolute", top: "16px", right: "16px" }}
          />
        </CloseBtn>
        <ModalImage src={img} alt={make} width={461} height={248} />
        <AdvertTitle>
          {make}, {year}
        </AdvertTitle>
        <ContainerText>
          {/* <DecorateLine></DecorateLine> */}
          {/* <SecondText>{address}</SecondText> */}
          {/* <DecorateLine></DecorateLine> */}
          <AdvertText>Id: {id}</AdvertText>
          {/* <DecorateLine></DecorateLine> */}
          <AdvertText>Year: {year}</AdvertText>
          {/* <DecorateLine></DecorateLine> */}
          {/* <SecondText></SecondText> */}
          <AdvertText>Type: {type}</AdvertText>
          {/* <DecorateLine></DecorateLine> */}
          <AdvertText>Fuel Consumption: {fuelConsumption}</AdvertText>
          {/* <DecorateLine></DecorateLine> */}
          <AdvertText>Engine Size:{engineSize}</AdvertText>
        </ContainerText>
        <AdvertDescription>{description}</AdvertDescription>
        <AccessoriesFunctionalities>
          Accessories and functionalities:
        </AccessoriesFunctionalities>
        <ContainerText>
          {arrayFunctionalitiesAccessories?.map((item) => (
            <AdvertText key={item}>{item}</AdvertText>
          ))}
        </ContainerText>
        <RentalConditionsTitle>Rental Conditions: </RentalConditionsTitle>
        <RentalConditionsText>{rentalConditions}</RentalConditionsText>
        <RentalBtn type="button">
          <RentalLink href="tel:+110001111111">Rental car</RentalLink>
        </RentalBtn>
      </ModalContainer>
    </Modal>
  );
};

export default AdvertModal;
