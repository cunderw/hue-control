const lights = [];
Object.keys(response.json()).forEach(function(id, index) {
  let light = responseJson[id];
  lights[index] = light;
  console.log("Index:" + index + " - " + lights[index].name);
});

{
  Object.entries(Data).map((l, i) => (
    <ListItem
      roundAvatar
      avatar={{
        uri: "https://i.imgur.com/qOdVtcS.jpg"
      }}
      key={i}
      title={l.name}
      onPress={() => this.props.navigate("Details", { lightData: l })}
    />
  ));
}
