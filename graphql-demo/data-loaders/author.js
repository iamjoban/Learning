const DataLoader = require("dataloader");
const mockData = require("../mock/post");

function findDataFromMockWithDelay(authorId, index) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = mockData.author.find((author) => author.id === authorId);
      console.log(authorId);
      resolve(data);
    }, 1000 * index);
  });
}

const getBatchCharacters = async (keys) => {
  return keys.map((key, index) => {
    return new Promise((resolve, reject) => {
      const res = findDataFromMockWithDelay(key, index);
      resolve(res);
    });
  });
};

function getAuthLoader() {
  return new DataLoader(getBatchCharacters);
}

module.exports = getAuthLoader;
