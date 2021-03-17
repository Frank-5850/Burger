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
      fetch("/burger/create", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBurgerName),
      }).then(() => {
        location.reload("/");
      });
    });
  }

  const eatButton = document.querySelectorAll(".eatButton");
  if (eatButton) {
    eatButton.forEach((event) => {
      event.addEventListener("click", (e) => {
        e.preventDefault(e);
        const id = e.target.getAttribute("data-id");
        const devoured = {
          id: id,
        };
        fetch(`/burger/eat/${id}`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(devoured),
        }).then(() => {
          location.reload("/");
        });
      });
    });
  }

  const unEatButton = document.querySelectorAll(".unEatButton");
  if (unEatButton) {
    unEatButton.forEach((event) => {
      event.addEventListener("click", (e) => {
        e.preventDefault(e);
        const id = e.target.getAttribute("data-id");
        const devoured = {
          id: id,
        };
        fetch(`/burger/uneat/${id}`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(devoured),
        }).then(() => {
          location.reload("/");
        });
      });
    });
  }
});
