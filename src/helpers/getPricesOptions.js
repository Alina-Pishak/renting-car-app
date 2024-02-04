export const getPricesOptions = (adverts) => {
  if (adverts) {
    const pricesOptions = [];
    const prices = adverts.map(({ rentalPrice }) =>
      Number(rentalPrice.slice(1))
    );
    const maxPrice = Math.max(...prices);
    for (let i = 10; i < maxPrice; i += 10) {
      pricesOptions.push({ value: i, label: i });
    }
    return pricesOptions;
  }
  return;
};
