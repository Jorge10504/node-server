const path = require("path");

function getMessages(req, res) {
  res.render("messages", {
    title: "Messages to my Friends",
    friend: "Elon Musk",
  });
  // res.sendFile(path.join(__dirname, "..", "public", "imgs", "skimountain.jpg"));
}

function postMessage(req, res) {
  console.log("Updating Messages...");
}

module.exports = {
  getMessages,
  postMessage,
};
