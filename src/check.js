import { findElement, paintCards, isElementExist } from './index.js';

document.addEventListener('DOMContentLoaded', function () {
  isElementExist(".item", paintCards);
  isElementExist(".item", findElement);
});