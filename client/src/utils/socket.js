const openSocket = require("socket.io-client");

let socket;

module.exports = {
  init: () => {
    socket = openSocket.io("/");
    return socket;
  },
  getSocket: () => socket,
};
