import "phoenix_html"

import {Socket} from "phoenix"

window.React = require("react");
window.ReactDOM = require("react-dom");
window.Dispatcher = require("./dispatcher");

var Router = require("./react/router");

window.Store = {
  token: sessionStorage.getItem("token"),
  user_id: sessionStorage.getItem("user_id"),
  account_id: sessionStorage.getItem("account_id"),
  hashLocation: null,
  socket: null,
  channel: null,

  setSession(loginResponse) {
    sessionStorage.setItem("token", loginResponse.token);
    sessionStorage.setItem("user_id", loginResponse.user_id);
    sessionStorage.setItem("account_id", loginResponse.account_id);
    window.Store.token = loginResponse.token;
    window.Store.user_id = loginResponse.user_id;
    window.Store.account_id = loginResponse.account_id;
    window.Store.reRender();
  },

  clearSession() {
    sessionStorage.clear();

    window.Store.token = null;
    window.Store.user_id = null;
    window.Store.account_id = null;
    window.Store.reRender();
  },

  connectSocket() {
    if(!!window.Store.token && !!window.Store.account_id && !!window.Store.user_id && !window.Store.socket) {
      window.Store.socket = new Socket(window.SOCKET_URL + "/account_socket", {params: {token: window.Store.token}})
      window.Store.socket.connect()

      window.Store.channel = window.Store.socket.channel("account:" + window.Store.account_id, {token: window.Store.token})
      window.Store.channel.join()
        .receive("ok", resp => { console.log("Joined successfully", resp) })
        .receive("error", resp => { console.log("Unable to join", resp) })
    }
  },

  // Split location into `/` separated parts, then render `Application` with it
  handleNewHash() {
    window.Store.hashLocation = window.location.hash.replace(/^#\/?|\/$/g, '').split('/');
    window.Store.reRender();
  },

  reRender() {
    window.Store.connectSocket();
    var router = <Router location={window.Store.hashLocation} account_id={window.Store.account_id} user_id={window.Store.user_id}/>;
    ReactDOM.render(router, document.getElementById('react-component'));
  }
};

// Handle the initial route and browser navigation events
window.Store.handleNewHash();
window.addEventListener('hashchange', window.Store.handleNewHash, false);
