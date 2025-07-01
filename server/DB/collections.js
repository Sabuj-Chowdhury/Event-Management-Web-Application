const { getDB } = require("./connect");

const getUsersCollection = () => getDB().collection("users");
const getEventsCollection = () => getDB().collection("events");

module.exports = {
  getUsersCollection,
  getEventsCollection,
};
