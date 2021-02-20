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
        console.log(eatButton);
        const id = e.target.getAttribute("data-id");
        console.log(id);
        const devoured = {
          id: id,
          devoured: true,
        };
        console.log(devoured);
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
        console.log(eatButton);
        const id = e.target.getAttribute("data-id");
        console.log(id);
        const devoured = {
          id: id,
          devoured: false,
        };
        console.log(devoured);
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
