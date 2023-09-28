import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import { IDailyForecasts, IWeather } from "../../../interfaces";
import { convertDate } from "../../../utils/dateConverter";
import { MaterialCommunityIcons } from "@expo/vector-icons";
interface IProps {
	weatherItem: IDailyForecasts
}

export default function WeatherItem({ weatherItem }: IProps) {
	const {
		Date,
		Temperature,
		Day,
		Night
	} = weatherItem;
	
	{ convertDate(Date) }
	let finalDate = `${convertDate(Date).month} ${convertDate(Date).day}`;
	return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>{finalDate}</Text>
        <Text style={styles.text}>{convertDate(Date).calendarDay}</Text>
      </View>
      <View style={styles.row}>
        <Image
          source={{
            uri: `https://developer.accuweather.com/sites/default/files/${
              Number(Day.Icon) < 10 ? "0" + Day.Icon : Day.Icon
            }-s.png`,
          }}
          style={{ width: 40, height: 40 }}
        />

        <View style={styles.column}>
          <Text style={styles.text}>max</Text>
          <Text style={styles.text}>
            {Math.round(Temperature.Maximum.Value)}°
          </Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.text}>min </Text>
          <Text style={styles.text}>
            {Math.round(Temperature.Minimum.Value)}°
          </Text>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    gap:100,
    flexDirection: "row",
    marginTop: 10,
    padding:15,
    borderRadius:10,
    borderWidth: 1,
    borderColor: "thistle",
    // backgroundColor:'pink'
  },
  text: {
    fontSize: 15,
    paddingRight: 10,
  },
  row: {
    flexDirection: "row",
  },
  column: {
    flexDirection: "column",
	marginLeft:10
  },
});
