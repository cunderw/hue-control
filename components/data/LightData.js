import React from "react";
import { AsyncStorage } from "react-native";
const URLS = {
  lights:
    "http://192.168.85.93/api/Za56aBeEzoWfSkS38UcHHKPqswjki1m1fGoS5v3q/lights"
};

export function getLights() {
  return fetch(URLS.lights);
}

export function getLight(id) {
  return fetch(URLS.lights + "/" + id);
}

export function toggleLight(id, isOn) {
  return fetch(URLS.lights + "/" + id + "/state", {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      on: isOn ? false : true
    })
  });
}
