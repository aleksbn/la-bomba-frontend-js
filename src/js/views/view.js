export default class View {
  _data;

  render(data) {
    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

	update(data) {
		this.render(data);
  }

	_clear() {
    this._parentElement.innerHTML = '';
  }
}
