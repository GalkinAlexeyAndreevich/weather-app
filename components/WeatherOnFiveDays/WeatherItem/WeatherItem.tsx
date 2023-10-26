import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View,useWindowDimensions} from "react-native";
import { IDailyForecasts, IWeatherOnHour } from "../../../interfaces";
import { convertDate } from "../../../utils/dateConverter";
import { useTheme } from "../../../store/ThemeContext";
interface IProps {
	weatherItem: IDailyForecasts
}

export default function WeatherItem({ weatherItem }: IProps) {
  const {colors} = useTheme()
	const {
		Date,
		Temperature,
		Day,
		Night
	} = weatherItem;
  const {height, width, scale, fontScale} = useWindowDimensions();
	let finalDate = `${convertDate(Date).month} ${convertDate(Date).day}`;
	return (
    <View style={[styles.container,{width}]}>
      <View>
        <Text style={[styles.paragraph ,{color:colors.text}]}>{finalDate}</Text>
        <Text style={[styles.paragraph ,{color:colors.text}]}>{convertDate(Date).calendarDay}</Text>
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
          <Text style={[styles.paragraph ,{color:colors.text}]}>max</Text>
          <Text style={[styles.paragraph ,{color:colors.text}]}>
            {Math.round(Temperature.Maximum.Value)}°
          </Text>
        </View>
        <View style={styles.column}>
          <Text style={[styles.paragraph ,{color:colors.text}]}>min </Text>
          <Text style={[styles.paragraph ,{color:colors.text}]}>
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
    flexDirection: "row",
    marginTop: 10,
    padding:15,
    borderRadius:10,
    borderWidth: 1,
    // width:'100%',
    maxWidth:700,
    borderColor: "thistle",
    // backgroundColor:'pink'
  },
  paragraph: {
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
