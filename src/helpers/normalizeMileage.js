export const normalizeMileage = (mileage) => {
  const normalizedMileage =
    mileage.length === 0
      ? ""
      : Number(mileage.replaceAll(",", "")).toLocaleString("en-US");
  return normalizedMileage;
};
