import { useState } from "react";
import { StyleSheet, Text, View, Pressable, StatusBar } from "react-native";
import { Agenda } from "react-native-calendars";
import { Card } from "react-native-paper";

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split("T")[0];
};

let mainBlack = "#414352";
let mainGray = "#F5F5F5";
let mainRed = "#FF0000";
let mainPurple = "#5C3CFA";
let secPurple = "#7053FC";

export default function Calendar({ navigation }) {
  const [items, setItems] = useState({});

  const loadItems = (day) => {
    for (let i = -15; i < 20; i++) {
      const time = day.timestamp + i * 24 * 60 * 60 * 1000;
      const strTime = timeToString(time);

      if (!items[strTime]) {
        items[strTime] = [];

        items[strTime].push({
          name: "Item for " + strTime + " #" + 1,
          height: Math.max(10, Math.floor(Math.random() * 150)),
          day: strTime,
        });

        /*const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: "Item for " + strTime + " #" + j,
              height: Math.max(10, Math.floor(Math.random() * 150)),
              day: strTime,
            });
          }*/
      }
    }
    const newItems = {};
    Object.keys(items).forEach((key) => {
      newItems[key] = items[key];
    });
    setItems(newItems);
  };

  const renderItem = (item) => {
    return (
      <View style={styles.itemcnt}>
        <Card style={styles.item}>
          <Card.Content>
            <View>
              <Text>{item.name}</Text>
            </View>
          </Card.Content>
        </Card>
      </View>
    );
  };

  let date = new Date();
  let day = date.getUTCDate();
  let month = date.getUTCMonth();
  let year = date.getUTCFullYear();
  let now = `${year}-${month}-${day}`;

  return (
    <View style={styles.container}>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={now}
        showClosingKnob={true}
        hideKnow={true}
        minDate={"2022-11-01"}
        maxDate={"2023-11-29"}
        renderItem={renderItem}
        showOnlySelectedDayItems={true}
        theme={{
          agendaDayTextColor: mainBlack,
          agendaDayNumColor: mainPurple,
          agendaTodayColor: "green",
          agendaKnobColor: mainPurple,
          nowIndicatorKnob: mainPurple,
          todayDotColor: "blue",
          todayBackgroundColor: "green",
          selectedDayBackgroundColor: secPurple,
          dotColor: mainPurple,
        }}
        style={{
          width: "100%",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  itemcnt: {
    borderRadius: 0,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  item: {
    borderRadius: 0,
    backgroundColor: "white",
  },
});
