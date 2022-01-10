const GoTAPI = "https://game-of-thrones-quotes.herokuapp.com/v1/random";
const btn = document.querySelector(".check");
const quotes = document.querySelector(".quotes");

const getQuotes = async function () {
  const res = await fetch(GoTAPI);
  const rep = await res.json();
  const { sentence: sen, character: char } = rep;
  const sum = `${char.name}:" ${sen} "`;
  return sum;
};

btn.addEventListener("click", function (e) {
  e.preventDefault();
  getQuotes().then((sm) => {
    quotes.innerHTML = sm;
  });
});
