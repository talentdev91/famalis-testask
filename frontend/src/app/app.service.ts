//const io = require("sails.io.js")(require("socket.io-client"));
//import * as io from '../assets/js/sails.io.js';
//import * as io from "io";
import socketClient from "socket.io-client";
import sails from "sails.io.js";
export class BaseService {
  socket;
  constructor() {
    const io = sails(socketClient);
    io.sails.url = "http://localhost:1337";
    io.sails.autoconnect = true;
    this.socket = io.socket;
  }

  public get(url: string, body?: any): Promise<any> {
    return new Promise((ok, fail) => {
      this.socket.get(url, body, (response: any, JWR: any) => {
        if (JWR.statusCode >= 400) {
          fail(JWR);
        } else {
          ok(response);
        }
      });
    });
  }
}
