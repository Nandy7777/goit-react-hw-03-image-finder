// function fetchImages(imageName, page) {
//   return fetch(
//     `https://pixabay.com/api/?q=${imageName}&page=1&key=29802518-7a19817c952422887bb4d93d8&image_type=photo&orientation=horizontal&per_page=12&page=${page}`
//   )
//     .then(response => {
//       if (response.ok) return response.json();
//       return Promise.reject(new Error(`No such ${imageName}`));
//     })
// }

// const api = {
//   fetchImages,
// };

// export default api;
