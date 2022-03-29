// @ts-check

/**
 * @param {function} fn Function to run when dom is ready
 * @returns {void}
 */
function onReady(fn) {
  if (document.readyState === "complete") return fn();
  document.addEventListener("readystatechange", () => onReady(fn), {
    once: true,
  });
}

/**
 * @returns {void}
 */
function enableMenuNavigation() {
  const menuWrapper = document.querySelector(".navigation");
  const menuBtn = document.querySelector(".navigation__toggle");
  const menuList = document.querySelector(".navigation__list");

  if (!menuWrapper || !menuBtn || !menuList) {
    throw new Error("Unable to attach menu interactions");
  }

  function toggleMenu(event) {
    event.stopImmediatePropagation();
    menuWrapper?.classList.toggle("navigation--open");
  }
  menuBtn.addEventListener("click", toggleMenu, { capture: true });

  function closeMenu() {
    menuWrapper?.classList.remove("navigation--open");
  }
  document.addEventListener("click", closeMenu);
}

function main() {
  try {
    document.body.classList.add("js_active");
    enableMenuNavigation();
  } catch (err) {
    console.error(err);
  }
}

onReady(main);
