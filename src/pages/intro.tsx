import React from "react";
import { Text, View, StatusBar, StyleSheet } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import CheckBox from "react-native-check-box";
import { primaryColor } from "../const";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import LinearGradient from "react-native-linear-gradient";
interface States {
  remSecret: boolean;
}
interface Props {
    navigation:any
}
export default class IntroScreen extends React.Component<Props, States> {
  constructor(props: Readonly<Props>) {
    super(props);
    this.state = {
      remSecret: false,
    };
    this.login = this.login.bind(this);
  }
  login(){
      this.props.navigation.reset({
        index:0,
        routes: [{ name: "Main" }],
      });
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <View
          style={{
            flex: 2,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MaterialCommunityIcons name="chat" size={70} color={primaryColor} />
          <View style={{ width: 10 }} />
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#888" }}>
            purplewhite
          </Text>
        </View>
        <View
          style={{ flex: 6, justifyContent: "center", alignItems: "center" }}
        >
          <View
            style={{
              flex: 1,
              paddingHorizontal: 60,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Feather
              name="key"
              size={20}
              color={primaryColor}
              style={{ position: "relative", left: 30, zIndex: 1 }}
            />
            <TextInput style={[styles.textInput]} maxLength={7} />
          </View>
          <View style={{ flex: 2 }}>
            <TouchableOpacity activeOpacity={0.8} onPress={this.login}>
              <LinearGradient
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 50,
                }}
                start={{ x: 0.0, y: 0.25 }}
                end={{ x: 0.5, y: 1.0 }}
                locations={[0, 0.5, 0.6]}
                colors={["#573b9e", "#B23AEE", "#BA55D3"]}
              >
                <View
                  style={{
                    width: 70,
                    height: 70,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Feather name="arrow-right" color="#ffffffAA" size={20} />
                </View>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textInput: {
    width: "100%",
    height: 45,
    paddingVertical: 0,
    backgroundColor: "#fff",
    borderRadius: 6,
    paddingHorizontal: 20,
    paddingLeft: 40,
    borderColor: primaryColor,
    borderWidth: 2,
    textAlign: "center",
    fontWeight: "bold",
    color: primaryColor,
  },
});
