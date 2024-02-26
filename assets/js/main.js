const searchBtn = document.querySelector(".btn");

const languages = ["Arabic", "German", "English", "Spanish", "French", "Hebrew", "Italian", "Dutch", "Portuguese", "Russian", "Swedish", "Turkish", "Chinese"];

languagesCodes = ["ar", "de", "en", "es", "fr", "he", "it", "nl", "no", "pt", "ru", "sv", "ud", "zh"];

const fechtData = () => {
  const keyword = document.querySelector(".search-news").value;
  fetch(`https://newsapi.org/v2/everything?q=${keyword}&language=de&apiKey=72ddb9bddd534abea1becf3f48f43f73`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      "First fetch error", err;
    });
};

searchBtn.addEventListener("click", fechtData);
