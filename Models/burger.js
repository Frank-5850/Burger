const orm = require("../config/orm");

const burger = {
  selectAll: function (result) {
    orm.selectAll("burgers", (res) => {
      result(res);
    });
  },
  insertOne: function (burger_name, result) {
    orm.insertOne("burgers", "burger_name", burger_name, (res) => {
      result(res);
    });
  },
  updateOne: function (burger_id, result) {
    orm.updateOne("burgers", "devoured", true, burger_id, (res) => {
      result(res);
    });
  },
  returnOne: function (burger_id, result) {
    orm.updateOne("burgers", "devoured", false, burger_id, (res) => {
      result(res);
    });
  },
};

module.exports = burger;
