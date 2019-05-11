document.addEventListener('DOMContentLoaded', () => {
  document.querySelector("#color-change").onchange = function () {
    document.querySelector("#head").style.color = this.value;
  }
})
