let data = [
  {
    src: "./images/image1.jpg",
    title: "Need Support For Ashwani Tripathi To Undergo Lung Transplant",

    rs: "25,37,897",
    created: "Pooja Tripathi",
    desc: "Recieved tax benefits by donating to this",
    percentage: 36,
  },
  {
    src: "./images/image2.jpg",
    title:
      "Help Kushal Fight Wiskott Aldrich Syndrome",

    rs: "12,39,994",
    created: "Siva",
    desc: "Recieved tax benefits by donating to this",
    percentage: 41,
  },
  {
    src: "./images/images",
    title:
      "Help Our Friend Vishnu Recover From Severe Head Injury !!",

    rs: "6,01,233",
    created: "Srivanasan C",
    desc: "Recieved tax benefits by donating to this",
    percentage: 50,
  },
  {
    src: "./images/images4.jpg",
    title: "Keya's Last Hope: Your Support Can Make Her Kidney Transplant Possible",

    rs: "4,60,104",
    created: "Keya Roy",
    desc: "Recieved tax benefits by donating to this",
    percentage: 31,
  },
  {
    src: "./images/medical_5.jpg",
    title: "Support Bijaybhai Recover From Heart Disease(Blockage) ",

    rs: "3,31,828",
    created: "Bhavna V",
    desc: "Recieved tax benefits by donating to this",
    percentage: 56,
  },
  {
    src: "./images/medical_6.jpg",
    title: "Support Bhupendra To Undergo Kidney Transplantation",

    rs: "6,23,018",
    created: "Bhavna V",
    desc: "Recieved tax benefits by donating to this",
    percentage: 19,
  },
];

let main_div = document.querySelector(".photo_card");

data.map((el) => {
  cartDetails(el);
});

function cartDetails(el) {
  let div = document.createElement("div");

  let img_1 = document.createElement("img");
  img_1.src = el.src;

  let tax_ribbon_div = document.createElement("div");
  tax_ribbon_div.setAttribute("class", "tax-ribbon");

  let img_ribbon = document.createElement("img");
  img_ribbon.src = "./images/ribbon.svg";

  tax_ribbon_div.append(img_ribbon);

  let div_2 = document.createElement("div");

  let div_2_P = document.createElement("p");
  div_2_P.innerText = el.title;

  let mid_div = document.createElement("div");
  mid_div.setAttribute("class", "middle_div");

  let round_progress = document.createElement("div");
  round_progress.setAttribute("class", "circle-border");

  round_progress.style.background = `
  linear-gradient(#00ff00 ${el.percentage}%, #f0f0f0 ${el.percentage}%)
  center top / 100% 100%, linear-gradient(to right, #f0f0f0 ${el.percentage}%, transparent ${el.percentage}%)
`;

  let inner_progress = document.createElement("div");
  inner_progress.setAttribute("class", "circle");

  let p_prog = document.createElement("p");
  p_prog.innerText = el.percentage + "%";

  round_progress.append(inner_progress, p_prog);

  let inner_2_div = document.createElement("div");
  inner_2_div.setAttribute("class", "inner_2_div");

  let p_1 = document.createElement("p");
  let p_2 = document.createElement("p");

  p_1.innerText = "Raised";
  p_2.innerText = "Rs " + el.rs;

  inner_2_div.append(p_1, p_2);

  let inner_3_div = document.createElement("div");
  inner_3_div.setAttribute("class", "inner_3_div");

  let p_3 = document.createElement("p");
  let p_4 = document.createElement("p");

  p_3.innerText = "Created by";
  p_4.innerText = el.created;

  inner_3_div.append(p_3, p_4);

  let last_div_in = document.createElement("div");
  last_div_in.setAttribute("class", "last_div_in");

  let p_5 = document.createElement("p");
  p_5.innerText = el.desc;

  last_div_in.append(p_5);

  mid_div.append(round_progress, inner_2_div, inner_3_div);

  div_2.append(div_2_P, mid_div, last_div_in);

  div.append(img_1, tax_ribbon_div, div_2);

  main_div.append(div);
}

let medical_box = document.getElementById("medical_box");
let memorial_box = document.getElementById("memorial_box");

let NonProfits_box = document.getElementById("NonProfits_box");

let array2 = [data[5], data[4], data[3], data[2], data[1], data[0]];
let array3 = [data[3], data[2], data[1], data[0], data[5], data[4]];

medical_box.classList.add("dark_clickable_card");

memorial_box.addEventListener("click", () => {
  main_div.innerHTML = "";

  removeClass();

  memorial_box.classList.add("dark_clickable_card");

  array2.map((el) => {
    cartDetails(el);
  });
});
NonProfits_box.addEventListener("click", () => {
  main_div.innerHTML = "";

  removeClass();

  NonProfits_box.classList.add("dark_clickable_card");

  array3.map((el) => {
    cartDetails(el);
  });
});
medical_box.addEventListener("click", () => {
  main_div.innerHTML = "";

  removeClass();

  medical_box.classList.add("dark_clickable_card");

  data.map((el) => {
    cartDetails(el);
  });
});

function removeClass() {
  medical_box.classList.remove("dark_clickable_card");
  NonProfits_box.classList.remove("dark_clickable_card");

  memorial_box.classList.remove("dark_clickable_card");
}

let card_array = [
  {
    src: "./images/img_0.jpg",
    name: "Hemali Tanna",
    icon: "./images/twitter_img.jpg",
    fd: "@hemalitanna",
    desc: "Hey Anoj, thank you, and all of Milaap for your help. The team just contacted Alex (the organizer), and he thanks you sincerely.",
  },

  {
    src: "./images/img_1.jpg",
    name: "Deepthl",
    icon: "./images/twitter_img.jpg",
    fd: "@deepthEYE",
    desc: "Thanks to @milaapdotorg and all the friends who shared our appeal, and responded in every possible way Dear all, you literally stood with our family in this tough time. My family salutes your compassion and empathy 🙏 Always grateful",
  },
  {
    src: "./images/img_2.jpg",
    name: "Deepti",
    icon: "./images/twitter_img.jpg",
    fd: "@MeDamselDee",
    desc: "Milaap is an organisation very very dear to my heart. Years ago, it was the soulful eyes of a wailing young child who needed a liver transplant- & left the world just before his surgery- that shook me to my core. Illness is unfair and most cruel to the poorest.",
  },
  {
    src: "./images/img_3.jpg",
    name: "Namrata Kumar",
    fd: "Namrata Kumar",
    icon: "./images/facebook_icon.jpg",
    desc: "Milaap has always updated me on how they are spending my contributions. It's not that I crave for the proof but the level of honesty is commendable. Please donate to organizations who actually help! No negativity please.",
  },
  {
    src: "./images/img_4.jpg",
    name: "TheKidsDr",
    icon: "./images/twitter_img.jpg",
    fd: "@DrTRM",
    desc: "If you are willing to help someone , do it thru @milaapdotorg",
  },
];

let people_card = document.querySelector(".people_card");

let previous = document.createElement("div");
previous.setAttribute("class", "prevImg previous");

let prev_p = document.createElement("p");
prev_p.innerText = "Prev";

let prev_tag = document.createElement("i");
prev_tag.setAttribute("class", "fa-solid fa-arrow-left");

previous.append(prev_tag, prev_p);

let img_card = document.createElement("div");
img_card.setAttribute("class", "img_card");

let img_in_card = document.createElement("img");
img_in_card.src = card_array[0].src;

let img_card_in_p = document.createElement("p");
img_card_in_p.innerText = card_array[0].name;

let img_card_inner_div = document.createElement("div");
img_card_inner_div.setAttribute("class", "inner_div_imgCard");

let img_in = document.createElement("img");
img_in.src = card_array[0].icon;

let img_in_id = document.createElement("p");
img_in_id.innerText = card_array[0].fd;

img_card_inner_div.append(img_in, img_in_id);

img_card.append(img_in_card, img_card_in_p, img_card_inner_div);

let desc_card = document.createElement("div");
desc_card.setAttribute("class", "desc_card");

let img_desc_p = document.createElement("p");

img_desc_p.innerText = card_array[0].desc;

desc_card.append(img_desc_p);

let next = document.createElement("div");
next.setAttribute("class", "prevImg next");

let next_p = document.createElement("p");
next_p.innerText = "Next";

let next_tag = document.createElement("i");
next_tag.setAttribute("class", "fa-solid fa-arrow-right");

next.append(next_p, next_tag);

people_card.append(previous, img_card, desc_card, next);

let count = 0;

next.addEventListener("click", () => {
  if (count < card_array.length - 1) {
    count++;
  } else {
    count = 0;
  }

  changeImg();
});

function changeImg() {
  img_in_card.src = card_array[count].src;
  img_card_in_p.innerText = card_array[count].name;
  img_in.src = card_array[count].icon;
  img_in_id.innerText = card_array[count].fd;

  img_desc_p.innerText = card_array[count].desc;
}
previous.addEventListener("click", () => {
  if (count == 0) {
    count = card_array.length - 1;
  } else {
    count--;
  }

  changeImg();
});
