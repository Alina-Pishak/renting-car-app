import styled from "styled-components";

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 541px;
  height: 752px;
  padding: 40px;
  border-radius: 24px;
  background: #fff;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 0;
  border: none;
  background: none;
`;

export const ModalImage = styled.img`
  object-fit: cover;
  border-radius: 14px;
  margin-bottom: 14px;
`;

export const AdvertTitle = styled.div`
  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.3;
  margin-bottom: 8px;
`;

export const AdvertText = styled.span`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
`;

export const ContainerText = styled.div`
  margin-bottom: 14px;
`;

export const AdvertDescription = styled.p`
  color: #121417;
  font-size: 14px;
  line-height: 1.4;
  margin-bottom: 24px;
`;

export const AccessoriesFunctionalities = styled(AdvertDescription)`
  margin-bottom: 8px;
`;

export const RentalConditionsTitle = styled(AccessoriesFunctionalities)`
  margin-top: 24px;
`;

export const RentalConditionsText = styled.span`
  color: #363535;
  font-size: 12px;
  line-height: 1.5;
  padding: 7px 14px;
  border-radius: 35px;
  background: #f9f9f9;
`;

export const RentalBtn = styled.button`
  width: 168px;
  height: 44px;
  border-radius: 12px;
  background: #3470ff;
  border: none;
  &:hover {
    background-color: #0b44cd;
  }
`;

export const RentalLink = styled.a`
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
  text-decoration: none;
`;

export const RentalConditionsWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
`;
