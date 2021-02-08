// smooth scroll to anchor
const body = document.querySelector(".body");
const anchors = body.querySelectorAll("a[href^='#']");

for (let anchor of anchors) {
  anchor.addEventListener("click", (evt) => {
    evt.preventDefault();
    const goto = anchor.hasAttribute("href") ? anchor.getAttribute("href") : "body";
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

const accordeon = body.querySelector(".accordeon");
const accordeonList = accordeon.querySelectorAll(".accordeon__item");

accordeon.classList.remove("accordeon--nojs");

if (accordeonList) {
  accordeonList.forEach((item) => {
    item.addEventListener("click", function () {
      this.classList.toggle("accordeon__item");
      this.classList.toggle("accordeon__item--active");
    });
  });
}

const modal = body.querySelector(".modal");
const modalShow = body.querySelector(".main-nav__item:last-child");
const modalClose = modal.querySelector(".modal__close");
const userName = modal.querySelector("#modal-user-name");
const userPhone = modal.querySelector("#modal-user-phone");
const textarea = modal.querySelector("#modal-question");

let isStorageSupport = true;
const storage = {};

try {
  storage.name = localStorage.getItem("name");
  storage.phone = localStorage.getItem("phone");
  storage.question = localStorage.getItem("question");
} catch (err) {
  isStorageSupport = false;
}

const closePopup = () => {
  if (modal.classList.contains("modal--show")) {
    modal.classList.remove("modal--show");
    body.removeAttribute("style");
  };
}

modalShow.addEventListener("click", (evt) => {
  evt.preventDefault();

  modal.classList.add("modal--show");
  body.style = `overflow: hidden;`;

  if (storage) {
    userName.value = storage.name;
    userPhone.value = storage.phone;
    textarea.value = storage.question;
    textarea.focus();
  } else {
    userName.focus();
  }
});

modal.addEventListener("submit", () => {
  if (isStorageSupport) {
    localStorage.setItem("name", userName.value);
    localStorage.setItem("phone", userPhone.value);
    localStorage.setItem("question", textarea.value);
  }
});

modal.addEventListener ("click", (evt) => {
  if (!evt.target.closest(".modal__window")) {
    closePopup();
  };
});

document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    evt.preventDefault();
    closePopup();
  };
});

modalClose.addEventListener("click", closePopup);

const phoneInput = body.querySelectorAll("input[type='tel']");

phoneInput.forEach(input => IMask(input, {mask: "+{7}(000)000-00-00"}));
