const DB = [
  {
    query: "apples",
  },
  {
    query: "apple juice",
  },
  {
    query: "apple sauce",
  },
  {
    query: "cooking apples",
  },
  {
    query: "pink lady apples",
  },
  {
    query: "appletiser",
  },
  {
    query: "apple pie",
  },
  {
    query: "gala apples",
  },
  {
    query: "braeburn apples",
  },
  {
    query: "apple crumble",
  },
  {
    query: "bananas",
  },
  {
    query: "bread",
  },
  {
    query: "baked beans",
  },
  {
    query: "biscuits",
  },
  {
    query: "butter",
  },
  {
    query: "chicken breast",
  },
  {
    query: "bacon",
  },
  {
    query: "broccoli",
  },
  {
    query: "garlic bread",
  },
  {
    query: "minced beef",
  },
  {
    query: "potatoes",
  },
  {
    query: "pizza",
  },
  {
    query: "peppers",
  },
  {
    query: "mince pies",
  },
  {
    query: "pasta",
  },
  {
    query: "prosecco",
  },
  {
    query: "parsnips",
  },
  {
    query: "pringles",
  },
  {
    query: "yorkshire puddings",
  },
  {
    query: "pigs in blankets",
  },
];

const getSuggestions = memo((term) => {
  return new Promise((resolve, reject) => {
    const results = DB.filter((item) => item.query.indexOf(term) > -1);
    resolve(results);
  });
});
