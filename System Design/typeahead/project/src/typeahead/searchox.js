class SearchBox {
  #searchTerm;
  #changeHandler;
  #input;
  #span;
  constructor({ changeHandler }) {
    this.#changeHandler = changeHandler;
    this.onchangeHandler = this.onchangeHandler.bind(this);
  }

  createElement() {
    const container = document.createElement("div");
    container.classList.add("input-container");
    const input = document.createElement("input");
    const span = document.createElement("span");
    input.oninput = debounce(this.onchangeHandler, 100);
    this.#input = input;
    this.#span = span;
    container.appendChild(span);
    container.appendChild(input);
    return container;
  }

  setFocus() {
    this.#input.focus();
  }

  updateAutoComplete(firstSuggestions) {
    this.#span.innerHTML = firstSuggestions;
  }

  onchangeHandler(event) {
    const value = event.target.value;
    this.setSearchTerm(value);
    this.#changeHandler(value);
  }

  getSearchTerm() {
    return this.#searchTerm;
  }

  setSearchTerm(term) {
    this.#searchTerm = term;
    this.#input.value = term;
  }
}
