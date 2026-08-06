let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");
let homeTitle = document.getElementById("home-title");
let guestTitle = document.getElementById("guest-title");

let homeCount = 0;
let guestCount = 0;

function add1home() {
  homeCount += 1;
  green();
  homeScoreEl.textContent = homeCount;
}

function add2home() {
  homeCount += 2;
  green();
  homeScoreEl.textContent = homeCount;
}

function add3home() {
  homeCount += 3;
  green();
  homeScoreEl.textContent = homeCount;
}

function add1guest() {
  guestCount += 1;
  green();
  guestScoreEl.textContent = guestCount;
}

function add2guest() {
  guestCount += 2;
  green();
  guestScoreEl.textContent = guestCount;
}

function add3guest() {
  guestCount += 3;
  green();
  guestScoreEl.textContent = guestCount;
}

function reset() {
  homeCount = 0;
  guestCount = 0;
  homeScoreEl.textContent = homeCount;
  guestScoreEl.textContent = guestCount;
  homeTitle.style.color = "#d1d5db";
  guestTitle.style.color = "#d1d5db";
}

function green() {
  if (homeCount > guestCount) {
    homeTitle.style.color = "#059669";
    guestTitle.style.color = "#9F1239";
  } else if (homeCount < guestCount) {
    homeTitle.style.color = "#9F1239";
    guestTitle.style.color = "#059669";
  } else {
    homeTitle.style.color = "#FBBF24";
    guestTitle.style.color = "#FBBF24";
  }
}
