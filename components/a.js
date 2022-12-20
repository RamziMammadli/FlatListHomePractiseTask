import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { FlatList } from "react-native-web";



export default function App() {


  const Box = ({name, date, size}) => (
     <View
        style={{
          flexDirection: "row",
          width: 500,
          borderWidth: 1,
          borderColor: "grey",
          paddingHorizontal: 30,
          paddingVertical: 20,
          alignItems: "center",
          justifyContent: "space-around",
          flex:7
        }}
      >
        <View style={{flexDirection:'row', justifyContent:'space-beetwen'}}>
        <View style={{paddingRight:20}}>
          <Image
            source={require("./assets/iconn.png")}
            style={{ width: 30, height: 30 }}
          />
        </View>
        <View>
          <Text style={{ fontSize: 18 }}>{name}</Text>
          <Text style={{ fontSize: 12 }}>{size} {date}</Text>
        </View>
        </View>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: "lime",
            padding: 10,
            borderRadius: 5,
          }}

          onPress={()=> alert("isleyir")}
        >
          <Text style={{ fontSize: 14, color: "lime" }}>OPEN</Text>
        </TouchableOpacity>
      </View> 
  )


  const data = [
    {
      name: "Slack",
      date: "moments ago",
      size: "101MB",
    },
    {
      name: "Du Battery Saver",
      date: "moments ago",
      size: "37MB",
    },
    {
      name: "Google",
      date: "11 minutes ago",
      size: "300MB",
    },
    {
      name: "Youtube",
      date: "42 minutes ago",
      size: "382MB",
    },
    {
      name: "Facebook",
      date: "4 hr. ago",
      size: "446MB",
    },
    {
      name: "Flipboard",
      date: "15 hr. ago",
      size: "446MB",
    },
  ];

  const renderItem = ({item}) => (
    <Box name={item.name}
    date={item.date}
    size={item.size}/>
  )

  return (
    <View style={styles.container}>
      <FlatList
      data={data}
      renderItem={renderItem}>
        
      </FlatList>
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
});
