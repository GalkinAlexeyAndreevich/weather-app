// const getLocation = async()=>{
//   let error
//   let location
//   let { status } = await Location.requestForegroundPermissionsAsync();

//   if (status === 'granted') {
//     location = await Location.getCurrentPositionAsync({});
//     console.log(location);
//   }else{
//     error = 'Вы не разрешили узнать ваше местоположение'
//   }

//   return {location,error}
// }