// Consumer Application code
(function () {
  const eleToRenderIn = document.getElementById("app");
  const typeAhead = new TypeAhead({ onChangeHandler, onSuggestionSelect });
  typeAhead.init();
  typeAhead.render(eleToRenderIn);

  function onSuggestionSelect(value) {
    console.log("Selected value", value);
  }

  async function onChangeHandler(value) {
    const suggestions = await getSuggestions(value);
    typeAhead.updateSuggestions(suggestions);
  }
})();
