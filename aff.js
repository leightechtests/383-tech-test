const fetchDataOffline = filterFunction => {
  const filteredItems = sortByDatePublished(
    filterFunction([...data.items, ...data.items, ...data.items])
  );
  setContent(filteredItems);
};
const apiRequest = () =>
  fetch("http://private-cc77e-aff.apiary-mock.com/posts").then(res =>
    res.json()
  );

const fetchData = (filterFunction = noFilter) =>
  apiRequest()
    .then(({ items }) => {
      const filteredItems = filterFunction(items);
      setContent(filteredItems);
    })
    .then(() => hideSpinner());

const noFilter = items => items;
const filterByManual = items =>
  items.filter(item => item.service_name === "Manual");
const filterByInstagram = items =>
  items.filter(item => item.service_name === "Instagram");
const filterByTwitter = items =>
  items.filter(item => item.service_name === "Twitter");

const sortByDatePublished = items =>
  items.sort(
    (date1, date2) =>
      new Date(date1.item_published) - new Date(date2.item_published)
  );

const setContent = items => {
  const html = getHTMLContent(items);
  document.getElementById("container").innerHTML = html;
};

const getHTMLContent = items =>
  items.map(i => formatByServiceName(i, i.service_name)).join("");

const formatByServiceName = (item, serviceName) => {
  switch (serviceName) {
    case "Manual":
      return formatManualItem(item);
    case "Instagram":
      return formatInstagramItem(item);
    case "Twitter":
      return formatTwitterItem(item);
  }
};

const formatManualItem = ({
  item_data: { text, image_url, link, link_text }
}) =>
  `<div class="manualContainer"><img src=${image_url} onerror="this.src='./fallback.jpg'" class="manualImage"/><p class="manualText">${text}</p><a href=${link} target="_blank" >${link_text}</a></div>`;
const formatInstagramItem = ({
  item_data: {
    caption,
    user: { username },
    image: { thumb }
  }
}) =>
  `<div class="instagramContainer"><img class="socialIcon" src="./instagram.svg"/><img src=${thumb} class="instagramImage" onerror="this.src='./fallback-insta.jpg'"/><p class="username">${username}</p><p class="instagramCaption">${pullOutLinks(
    caption
  )}</p></div>`;

const formatTwitterItem = ({
  item_data: {
    tweet,
    user: { username }
  }
}) =>
  `<div class="twitterContainer"><img class="socialIcon" src="./twitter.svg" /><p class="username">${makeTwitterUsernameLink(
    username
  )}</p> <p class="twitterTweet">${pullOutLinks(tweet)}</p></div>`;

const makeTwitterUsernameLink = username => pullOutLinks(`@${username}`);

const pullOutLinks = text =>
  text
    .split(" ")
    .map(word => {
      if (word[0] === "#") {
        const wordWithoutHashTag = word.slice(1);
        return `<a href="https://twitter.com/hashtag/${wordWithoutHashTag}?src=tren&lang=en-gb" target="_blank">${word}</a>`;
      }
      if (word[0] === "@") {
        const wordWithoutAtSymbol = word.slice(1);
        return `<a href="https://twitter.com/${wordWithoutAtSymbol}" target="_blank">${word}</a>`;
      }
      if (word.includes("http")) {
        return `<a href=${word} target="_blank">${word}</a>`;
      }
      return word;
    })
    .join(" ");

const fetchMoreData = (filterFunction = noFilter) =>
  apiRequest().then(({ items }) => {
    const filteredItems = filterFunction(items);
    appendContent(filteredItems);
  });

const appendContent = items => {
  const content = getHTMLContent(items);
  const divToUpdate = document.getElementById("container");
  divToUpdate.innerHTML = divToUpdate.innerHTML + content;
};

// const manualButton = document.getElementById("manualButton");
// const loadButton = document.getElementById("loadMore");
// manualButton.addEventListener("click", () => {
//   loadMore.onclick = "fetchMoreData(filterByManual)";
// });

const hideSpinner = () => {
  const spinner = document.getElementById("spinner");
  spinner.classList.add("hide");
};

window.onload = fetchData();
