// export const getServerData = () => {
//   let status = "pending";
//   let results = [];

//   let promise = new Promise((resolve, reject) => {
//     results = [1, 2, 3];
//     setTimeout(() => {
//       console.log("resolvong");
//       status = "success";
//       resolve();
//     }, 10000);
//   });

//   return {
//     read: () => {
//       if (status === "pending") {
//         throw promise;
//       }

//       if (status === "failed") {
//         throw results;
//       }

//       if (status === "success") {
//         return results;
//       }
//     },
//   };
// };

export const getServerData = () => {
  let done = false;
  let promise = null;
  let results = [];
  return {
    read() {
      if (done) {
        return results;
      }
      if (promise) {
        throw promise;
      }
      promise = new Promise((resolve) => {
        setTimeout(() => {
          done = true;
          promise = null;
          results = [1, 2, 3];
          resolve();
        }, 5000);
      });
      throw promise;
    },
  };
};
