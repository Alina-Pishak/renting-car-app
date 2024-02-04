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
  RentalConditionsWrapper,
  RentalLink,
} from "./AdvertModal.styled";
import { normalizeRentalConditions } from "../../helpers";

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
          <CloseIcon />
        </CloseBtn>
        <ModalImage src={img} alt={make} width={461} height={248} />
        <AdvertTitle>
          {make}, {year}
        </AdvertTitle>
        <ContainerText>
          <AdvertText>
            Id: {id}&nbsp;|&nbsp;Year: {year}&nbsp;|&nbsp;Type: {type}
            &nbsp;|&nbsp;Fuel Consumption: {fuelConsumption}&nbsp;|&nbsp;Engine
            Size:{engineSize}
          </AdvertText>
        </ContainerText>
        <AdvertDescription>{description}</AdvertDescription>
        <AccessoriesFunctionalities>
          Accessories and functionalities:
        </AccessoriesFunctionalities>
        <ContainerText>
          {arrayFunctionalitiesAccessories?.map((item) => (
            <AdvertText key={item}>{item}&nbsp;|&nbsp;</AdvertText>
          ))}
        </ContainerText>
        <RentalConditionsTitle>Rental Conditions: </RentalConditionsTitle>
        <RentalConditionsWrapper>
          {normalizeRentalConditions(rentalConditions).map((condition) => (
            <RentalConditionsText key={condition}>
              {condition}
            </RentalConditionsText>
          ))}
        </RentalConditionsWrapper>

        <RentalBtn type="button">
          <RentalLink href="tel:+110001111111">Rental car</RentalLink>
        </RentalBtn>
      </ModalContainer>
    </Modal>
  );
};

export default AdvertModal;
