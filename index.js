function fetchSimpsonsJSON() {
  const url = 'https://simpsons-quotes-api.herokuapp.com/quotes';
  axios.get(url)
    .then(function(response) {
      return response.data; // response.data instead of response.json() with fetch
    })
    .then(function(simpson) {
      console.log('data decoded from JSON:', simpson);

      // Build a block of HTML
      const simpsonHtml = `
        <h2><strong>${simpson[0].character}</strong></h2>
        <p><strong>${simpson[0].quote}</strong></p>
        <img src="${simpson[0].image}" />
      `;
      document.querySelector('#simpson').innerHTML = simpsonHtml;
    });
}
  
fetchSimpsonsJSON();