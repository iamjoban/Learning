class TypeAhead {
  #searchBox;
  #suggestions;
  #onChangeHandler;
  #onSuggestionSelect;
  constructor({
    onChangeHandler,
    onSuggestionSelect: onSuggestionSelectFromConsumer,
  }) {
    this.#onChangeHandler = onChangeHandler;
    this.#onSuggestionSelect = onSuggestionSelectFromConsumer;
    this.onSuggestionSelect = this.onSuggestionSelect.bind(this);
    this.onSearchBoxInputChange = this.onSearchBoxInputChange.bind(this);
  }

  init() {
    this.#searchBox = new SearchBox({
      changeHandler: this.onSearchBoxInputChange,
    });
    this.#suggestions = new SuggestionsBox({
      onSuggestionClick: this.onSuggestionSelect,
    });
  }

  onSearchBoxInputChange(value) {
    this.#searchBox.setSearchTerm(value);
    if (value.length === 0) {
      this.updateSuggestions([]);
      return;
    }
    this.#onChangeHandler(value);
  }

  onSuggestionSelect(value) {
    this.#searchBox.setSearchTerm(value);
    this.#searchBox.updateAutoComplete(value);
    this.#searchBox.setFocus();
    this.#onSuggestionSelect(value);
    this.#suggestions.setSuggestions([], false);
  }

  createContainer() {
    const container = document.createElement("div");
    container.classList.add("search-container");
    return container;
  }

  updateSuggestions(suggestions) {
    const shouldRenderNoSuggestionFound =
      this.#searchBox.getSearchTerm().length > 0 && suggestions.length === 0;
    this.#suggestions.setSuggestions(
      suggestions,
      shouldRenderNoSuggestionFound
    );
    this.#searchBox.updateAutoComplete("");
    if (suggestions.length > 0) {
      const firstSuggestions = suggestions[0].query;
      if (firstSuggestions.indexOf(this.#searchBox.getSearchTerm()) === 0) {
        this.#searchBox.updateAutoComplete(firstSuggestions);
      }
    }
  }

  render(eleToRenderIn) {
    const container = this.createContainer();
    const searchBox = this.#searchBox.createElement();
    const suggestionsBox = this.#suggestions.createElement();
    const fragment = document.createDocumentFragment();
    fragment.appendChild(searchBox);
    fragment.appendChild(suggestionsBox);
    container.appendChild(fragment);
    eleToRenderIn.appendChild(container);
  }
}
