let x = {
  Messages: {
    UnavailableMessages: {
      EPW_WITHOUT_AMEND_AVAILABILITY_OVERRIDE:
        "Sorry, this product has become unavailable since you placed your order.",

      PERMANENTLY_UNAVAILABLE: "This product has been removed from our range",

      PERMANENTLY_UNAVAILABLE_HAS_SUBS:
        "Sorry, this product has been removed from our range.",

      PERMANENTLY_UNAVAILABLE_TROLLEY:
        "This product has been removed from our range and will be removed from your order when you checkout.",

      TEMPORARILY_UNAVAILABLE: "This product's currently out of stock",

      TEMPORARILY_UNAVAILABLE_TROLLEY:
        "This product is unavailable and will be removed from your order when you checkout.",
    },

    ExcludedProductMessage: {
      EXCLUDED_PRODUCT: "The product quantity can no longer be increased",
    },

    VariableWeightProductMessage: {
      VARIABLE_WEIGHT_PRODUCT:
        "This item weight may vary, the price shown is a maximum per pack",
      a: { b: "dd" },
    },
  },
};

const translationLookupWrapper = (translationKey, searchKey) => {
  let keys = Object.keys(translationKey);
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    if (typeof translationKey[key] === "string") {
      if (key === searchKey) {
        return translationKey[key];
      }
    } else {
      const result = translationLookupWrapper(translationKey[key], searchKey);
      if (result) {
        return result;
      }
    }
  }

  return null;
};

let output = translationLookupWrapper(x, "b");
console.log(output, "------------");
