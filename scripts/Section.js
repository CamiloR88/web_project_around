export default class Section {
  constructor({ items, renderer }, cardSelector) {
    this._items = items;
    this._cardSelector = document.querySelector(cardSelector);
  }

  renderer() {}
  addItem() {}
}
