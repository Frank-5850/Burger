document.addEventListener("DOMContentLoaded", (event) => {
  if (event) {
    console.log("DOM loaded");
  }
  const newBurger = document.getElementById("submit-button");

  if (newBurger) {
    newBurger.addEventListener("click", (e) => {
      e.preventDefault(e);
      const burgerName = document.getElementById("new_burger").value.trim();
      const newBurgerName = {
        burger_name: burgerName,
      };
      console.log(newBurgerName);
      console.log(burgerName);
      fetch("/burger/create", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBurgerName),
      }).then(() => {
        console.log("burger Created!");
        location.reload();
      });
    });
  }

  const eatButton = document.getElementById("eatButton");
  eatButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("yellow");
  });

  const unEatButton = document.getElementById("unEatButton");
  unEatButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Fewer");
  });
});
