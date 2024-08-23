function submitbtn() {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let em = document.getElementById("email-enter").value.toLocaleLowerCase();
  let check = em.match(regex);
  let first = document.querySelector(".first-form");
  let second = document.querySelector(".second-form");
  let mailError = document.querySelector(".error-email");

  if (check) {
    first.classList.add("dpn");
    second.classList.add("dpb");
    document.querySelector(".after-form").innerHTML = em;
  } else {
    mailError.classList.remove("dpn");
  }
}

function show(element) {
  const viewmore = element.querySelector(".view-more");
  viewmore.style.display = "inline-block";
}
function stopShow(element) {
  const viewmore = element.querySelector(".view-more");
  viewmore.style.display = "none";
}
function showContent(element) {
  const view = element.closest(".grid-content");
  const viewmore = view.querySelector(".view-more");
  if (viewmore.classList.value.includes("view-less")) {
    const viewContent = view.querySelectorAll(".view");

    viewContent.forEach((element) => {
      element.style.display = "none";
    });
    viewmore.classList.remove("view-less");
    viewmore.innerHTML = "View more";
  } else {
    const viewContent = view.querySelectorAll(".view");
    viewContent.forEach((element) => {
      element.style.display = "block";
    });
    viewmore.classList.add("view-less");
    viewmore.innerHTML = "View less";
  }
}
