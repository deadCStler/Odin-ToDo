import { displayStorageCategory } from "./categoryDOM";
import { displayStorage } from "./noteDOM";

export const storageObj = function (obj) {
  localStorage.setItem(obj.id, JSON.stringify(obj));
};

export const removeObj = function (obj) {
  localStorage.removeItem(obj.id);
};

export const populateObjStorage = function () {
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    if (key !== "category") {
      let value = JSON.parse(localStorage.getItem(key));
      displayStorage(key, value);
    }
  }
};

export const categoryStorage = function (categoryList) {
  localStorage.setItem("category", JSON.stringify(categoryList));
};

export const populateCategoryStorage = function () {
  let list = JSON.parse(localStorage.getItem("category"));
  displayStorageCategory(list);
};
