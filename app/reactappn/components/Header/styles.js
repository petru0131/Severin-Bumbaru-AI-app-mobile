import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
   container:{
    position: 'absolute',
    top: 50,
    zIndex: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal:10,

   },

   logo:{
    width:100,
    height:60,
    resizeMode: 'contain',

   },

//    menu:{
//     width:35,
//     height:25,
//     resizeMode: 'contain',
//    },
});

export default styles;