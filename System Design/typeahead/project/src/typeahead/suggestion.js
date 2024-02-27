class SuggestionsBox {
  #suggestions;
  #onSuggestionClick;
  #element;
  static UP_KEY = 38;
  static DOWN_KEY = 40;
  #activeChild = 0;

  // #id;
  constructor({ id, onSuggestionClick }) {
    // this.#id = id;
    this.#onSuggestionClick = onSuggestionClick;
    this.onClick = this.onClick.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  onKeyPress(event) {
    const children = this.#element.children;
    const totalChild = children.length;
    const key = event.keyCode;

    if (
      key === SuggestionsBox.UP_KEY ||
      (event.shiftKey && event.keyCode == 9)
    ) {
      if (this.#activeChild === 0) {
        this.#activeChild = totalChild;
      }
      this.#activeChild--;
    } else if (key === SuggestionsBox.DOWN_KEY || event.keyCode == 9) {
      if (this.#activeChild === children.length - 1) {
        this.#activeChild = -1;
      }
      this.#activeChild++;
    }
    if (key === SuggestionsBox.UP_KEY || key === SuggestionsBox.DOWN_KEY) {
      children[this.#activeChild].children[0].focus();
    }
  }

  createElement() {
    const ul = document.createElement("ul");
    ul.classList.add("suggestion-box");
    //ul.setAttribute("id", this.#id);
    ul.onkeydown = this.onKeyPress;
    this.#element = ul;
    return ul;
  }

  onClick(event) {
    event.preventDefault();
    this.#onSuggestionClick(event.target.getAttribute("data-text"));
  }

  updateSuggestionsList(suggestionsList, shouldRenderNoSuggestionFound) {
    const freg = document.createDocumentFragment();
    if (suggestionsList.length > 0 && !shouldRenderNoSuggestionFound) {
      suggestionsList.map((suggestion) => {
        const ele = document.createElement("li");
        const a = document.createElement("a");
        a.href = "/#";
        a.onclick = this.onClick;
        a.innerHTML = suggestion.query;
        a.setAttribute("data-text", suggestion.query);
        ele.appendChild(a);
        freg.appendChild(ele);
      });
    }
    if (shouldRenderNoSuggestionFound) {
      const ele = document.createElement("li");
      const a = document.createElement("a");
      a.innerHTML = "No suggestion found";
      ele.appendChild(a);
      freg.appendChild(ele);
    }

    this.#element.innerHTML = "";
    this.#element.appendChild(freg);
  }

  getSuggestions() {
    return this.#suggestions;
  }

  setSuggestions(suggestions, shouldRenderNoSuggestionFound) {
    this.#suggestions = suggestions;
    this.updateSuggestionsList(suggestions, shouldRenderNoSuggestionFound);
  }
}
