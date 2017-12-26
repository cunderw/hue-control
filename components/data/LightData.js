import React from "react";
import { AsyncStorage } from "react-native";
const URLS = {
  lights:
    "http://192.168.85.93/api/Za56aBeEzoWfSkS38UcHHKPqswjki1m1fGoS5v3q/lights",
  groups:
    "http://192.168.85.93/api/Za56aBeEzoWfSkS38UcHHKPqswjki1m1fGoS5v3q/groups"
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
    lights = lights.sort(sortLights);
    return lights;
  } catch (error) {
    console.error(error);
  }
}

export async function getGroups() {
  try {
    let response = await fetch(URLS.groups);
    let responseJson = await response.json();
    let groups = [];
    Object.keys(responseJson).forEach(function(id, index) {
      let group = responseJson[id];
      groups[index] = group;
      groups[index].key = group.name;
      groups[index].id = id;
    });
    return groups;
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

export async function getGroupLights(id) {
  try {
    let response = await fetch(URLS.groups + "/" + id);
    let responseJson = await response.json();
    let groupLights = [];
    for (let index in responseJson.lights) {
      let light = {
        id: responseJson.lights[index]
      };
      groupLights[index] = light;
    }
    return groupLights;
  } catch (error) {
    console.error(error);
  }
}

export async function toggleGroupsLights(id, isOn) {
  try {
    let response = await fetch(URLS.groups + "/" + id + "/action", {
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
    return getLight(id);
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
    return getLight(id);
  } catch (error) {
    console.error(error);
  }
}

function sortLights(a, b) {
  // Use toUpperCase() to ignore character casing
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();

  let comparison = 0;
  if (nameA > nameB) {
    comparison = 1;
  } else if (nameA < nameB) {
    comparison = -1;
  }
  return comparison;
}
