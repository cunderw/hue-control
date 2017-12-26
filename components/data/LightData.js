import React from "react";
import { AsyncStorage } from "react-native";
const URLS = {
  lights:
    "http://192.168.85.93/api/Za56aBeEzoWfSkS38UcHHKPqswjki1m1fGoS5v3q/lights"
};

export async function getLights() {
  try {
    let response = await fetch(URLS.lights);
    let responseJson = await response.json();
    let lights = [];
    Object.keys(responseJson).forEach(function(id, index) {
      let light = responseJson[id];
      lights[index] = light;
      lights[index].key = light.name;
      lights[index].id = id;
    });
    return lights;
  } catch (error) {
    console.error(error);
  }
}

export async function getLight(id) {
  try {
    let response = await fetch(URLS.lights + "/" + id);
    let light = await response.json();
    return light;
  } catch (error) {
    console.error(error);
  }
}

export async function toggleLight(id, isOn) {
  try {
    let response = await fetch(URLS.lights + "/" + id + "/state", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        on: isOn ? false : true
      })
    });
    let responseJson = await response.json();
    console.log(responseJson);
    return getLight(id);
  } catch (error) {
    console.error(error);
  }
}
