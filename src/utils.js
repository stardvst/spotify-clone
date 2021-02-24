export function removeHashFromUrl() {
  let scrollV,
    scrollH,
    loc = window.location;
  if ("pushState" in window.history) {
    window.history.pushState("", document.title, loc.pathname + loc.search);
  } else {
    // prevent scrolling by storing the page's current scroll offset
    scrollV = document.body.scrollTop;
    scrollH = document.body.scrollLeft;

    loc.hash = "";

    // pestore the scroll offset, should be flicker free
    document.body.scrollTop = scrollV;
    document.body.scrollLeft = scrollH;
  }
}
