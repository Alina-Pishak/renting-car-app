export const normalizeAddress = (address) => {
  const croppedAddress = address.slice(address.indexOf(",") + 1);
  const normalizedAddress = croppedAddress.replace(",", " |");
  return normalizedAddress;
};
