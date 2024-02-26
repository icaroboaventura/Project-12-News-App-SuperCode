const searchBtn = document.querySelector(".btn");
const selectLanguages = document.querySelector(".languages");
const selectSorts = document.querySelector(".sort-by");
const articlesSection = document.querySelector(".articles");

const languages = ["English", "Arabic", "German", "Spanish", "French", "Hebrew", "Italian", "Dutch", "Norwegian", "Portuguese", "Russian", "Swedish", "Turkish", "Chinese"];

const languagesCodes = ["en", "ar", "de", "es", "fr", "he", "it", "nl", "no", "pt", "ru", "sv", "ud", "zh"];

const sortNames = ["Newest First", "Relevancy", "Popularity"];

const sortValues = ["publishedAt", "relevancy", "popularity"];

languages.map((lan, lanCodes) => {
  selectLanguages.innerHTML += `
  <option value="${languagesCodes[lanCodes]}">${lan}</option>
  `;
});

sortNames.map((name, valuesName) => {
  selectSorts.innerHTML += `
  <option value="${sortValues[valuesName]}">${name}</option>
  `;
});

const fechtData = () => {
  const keyword = document.querySelector(".search-news").value;
  const selectedLanguageCode = document.querySelector(".languages").value;
  const selectedSortValue = document.querySelector(".sort-by").value;
  console.log(selectedLanguageCode);
  console.log(selectedSortValue);
  fetch(`https://newsapi.org/v2/everything?q=${keyword}&language=${selectedLanguageCode}&sortBy=${selectedSortValue}&pageSize=50&apiKey=72ddb9bddd534abea1becf3f48f43f73`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data.articles.forEach((article) => {
        console.log(article.title);
        console.log(article.description);
        console.log(article.url);
        console.log(article.urlToImage);
        articlesSection.innerHTML += `
        <article>
        <h2>${article.title}</h2>
        <p>${article.description}</p>
        <img src="${article.urlToImage}" alt=${article.title}/>
        <a href="${article.url}"  target="_blank">Read More</a>
        </article>
        `;
      });
    })
    .catch((err) => {
      "First fetch error", err;
    });
};

searchBtn.addEventListener("click", fechtData);
