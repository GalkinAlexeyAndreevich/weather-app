import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { IWeather } from '../../interfaces';
import moment from 'moment';

  
export default function WeatherItem({weatherItem}:IWeather) {
    // console.log(weatherItem
        
    //     );
        console.log(weatherItem.IconPhrase);
        console.log(weatherItem.IsDaylight);
        
          
    
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{moment(weatherItem.DateTime).hours()}:00</Text>

      <Text style={styles.text}>{Math.round((weatherItem.Temperature.Value-32)/1.8)}°</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center"
  },
  text:{
    fontSize:30
  }
});
