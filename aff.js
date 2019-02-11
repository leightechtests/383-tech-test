const data = {
  items: [
    {
      item_id: "497",
      item_data: {
        image_id: 226,
        text:
          "Seen on the catwalks at Chanel, Ralph Lauren, and Topshop Unique; think luscious icy bright pastels to add a soft pop of colour to the dull winter months. It works beautifully against grey tailoring and comes in a variety of textures from sugar plum boucle to cashmere soft duck egg blue\u2026",
        link: "http://www.bullring.co.uk/news/fashion/aff-edit-new-pastels",
        link_text: "Click here to explore the trend.",
        image_url:
          "http://aff-stream-bullring.383apps.co.uk/wp-content/uploads/2014/08/1145NW-pastels-square-large.jpg"
      },
      account_data: "",
      item_source_id: "e3d89e1f295f72b85737d5067ac52e6c",
      service_id: "5",
      account_id: "3",
      category_id: "1",
      item_name: "Manual: Seen on the catwalks at Chanel, Ralph Laur",
      item_status: "published",
      item_created: "2014-08-29 11:50:14",
      item_imported: "2014-08-29 11:50:14",
      item_published: "2014-09-10 10:06:59",
      account_name: "AFF",
      account_slug: "manual",
      account_group: "",
      account_order: "0",
      account_status: "active",
      account_item_default_status: "published",
      account_import_interval: "2592000",
      account_last_imported: "2014-06-01 00:00:00",
      account_next_import: "2020-01-01 00:00:00",
      account_created: "2014-08-28 11:38:45",
      account_updated: "2014-08-29 09:09:18",
      service_name: "Manual",
      service_slug: "manual",
      service_class: "Manual",
      category_slug: "pinned",
      category_name: "Pinned"
    },
    {
      item_id: "7292",
      item_data: {
        tweet:
          "Hope you will be joining me and @BillieFaiers when we come to the @Bullring on the 27th. For more details visit http://t.co/RfxP1jPa5H #AFF",
        is_reply: false,
        is_retweet: false,
        user: {
          username: "SamanthaFaiers",
          name: "sam faiers",
          avatar:
            "https://pbs.twimg.com/profile_images/490441409565310976/zR3lgwJi_normal.jpeg"
        }
      },
      account_data: {
        user_name: "@SamanthaFaiers (sam faiers)",
        user_id: "201737120",
        search_term: "",
        ignore_replies: true,
        ignore_retweets: true
      },
      item_source_id: "511919013740687360",
      service_id: "1",
      account_id: "19",
      category_id: null,
      item_name: "Tweet: Hope you will be joining me and ",
      item_status: "published",
      item_created: "2014-09-16 17:46:18",
      item_imported: "2014-09-16 18:02:02",
      item_published: "2014-09-17 09:45:46",
      account_name: "SAM",
      account_slug: "sam",
      account_group: "",
      account_order: "0",
      account_status: "active",
      account_item_default_status: "pending",
      account_import_interval: "1800",
      account_last_imported: "2015-01-06 15:02:09",
      account_next_import: "2015-01-06 15:32:09",
      account_created: "2014-09-11 13:25:32",
      account_updated: "2015-01-06 15:02:09",
      service_name: "Twitter",
      service_slug: "twitter",
      service_class: "Twitter",
      category_slug: null,
      category_name: null
    },
    {
      item_id: "5015",
      item_data: {
        type: "image",
        link: "http://instagram.com/p/szVeWDh17P/",
        filter: "Rise",
        caption:
          "Who's looking forward to seeing these girls at Autumn Fashion Fix on 27th September? #bullring #bullringbirmingham #Birmingham #aw14 #samfaiers #billiefaiers #aff",
        tags: [
          "birmingham",
          "billiefaiers",
          "aw14",
          "bullringbirmingham",
          "aff",
          "samfaiers",
          "bullring"
        ],
        user: {
          username: "bullring",
          avatar:
            "http://images.ak.instagram.com/profiles/profile_21295470_75sq_1389354188.jpg"
        },
        image: {
          thumb:
            "http://scontent-b.cdninstagram.com/hphotos-xaf1/t51.2885-15/10598470_1480439188872772_1890435781_s.jpg",
          medium:
            "http://scontent-b.cdninstagram.com/hphotos-xaf1/t51.2885-15/10598470_1480439188872772_1890435781_a.jpg",
          large:
            "http://scontent-b.cdninstagram.com/hphotos-xaf1/t51.2885-15/10598470_1480439188872772_1890435781_n.jpg"
        },
        video: null
      },
      account_data: {
        user_name: "@bullring (Bullring Birmingham)",
        user_id: "21295470",
        search_tag: "",
        filter_tags: ""
      },
      item_source_id: "807083202472009423_21295470",
      service_id: "2",
      account_id: "16",
      category_id: null,
      item_name: "Instagram: Who's looking forward to seeing these g",
      item_status: "published",
      item_created: "2014-09-11 11:37:16",
      item_imported: "2014-09-11 12:47:06",
      item_published: "2014-09-11 12:53:18",
      account_name: "Bullring Instagram",
      account_slug: "bullring-2",
      account_group: "",
      account_order: "0",
      account_status: "active",
      account_item_default_status: "pending",
      account_import_interval: "3600",
      account_last_imported: "2015-01-06 15:02:06",
      account_next_import: "2015-01-06 16:02:06",
      account_created: "2014-09-02 10:40:09",
      account_updated: "2015-01-06 15:02:06",
      service_name: "Instagram",
      service_slug: "instagram",
      service_class: "Instagram",
      category_slug: null,
      category_name: null
    }
  ]
};

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

const fetchDataOnline = filterFunction =>
  apiRequest().then(({ items }) => {
    const filteredItems = filterFunction(items);
    setContent(filteredItems);
  });

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
  `<div class="instagramContainer"><img src=${thumb} class="instagramImage" onerror="this.src='./fallback-insta.jpg'"/><p class="instagramUsername">${username}</p><p class="instagramCaption">${pullOutLinks(
    caption
  )}</p></div>`;

const formatTwitterItem = ({
  item_data: {
    tweet,
    user: { username }
  }
}) =>
  `<div class="twitterContainer"><p class="twitterUsername">${username}</p> <p class="twitterTweet">${pullOutLinks(
    tweet
  )}</p></div>`;

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

window.onload = fetchDataOnline(noFilter);
