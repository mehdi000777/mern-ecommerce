const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AZ_AxtIN8WU2k458UZNUHsC8KjFBKeL8ZDrXO3agSEvuem1qxKj8db75EGiD_hFUZxA_muC1Yu7pCP0Z",
  client_secret: "EK6mcLt08YKMTyjJPV6siq4qRdlzScnIii0YFceHA8m8PwLq0HJnxwquh_1AdVMOCWurFvWF9FxCccBR",
});

module.exports = paypal;
