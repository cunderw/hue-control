import React from "react";
import { AsyncStorage } from "react-native";
const URLS = {
  lights:
    "http://192.168.85.93/api/Za56aBeEzoWfSkS38UcHHKPqswjki1m1fGoS5v3q/lights",
  light: ""
};

export function getLights() {
  return fetch(URLS.lights);
}
