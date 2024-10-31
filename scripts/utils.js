export const renderElements = (isGrid) => {
  cardList.innerHTML = "";
  items.forEach((item) => {
    const card = isGrid
      ? new DefaultCard(item, ".default-card")
      : new HorizontalCard(item, ".horizontal-card");

    const cardElement = card.generateCard();
    cardList.append(cardElement);
  });
};
