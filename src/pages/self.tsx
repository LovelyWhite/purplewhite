import React from "react";
import { Text, StatusBar, View ,SafeAreaView} from "react-native";
interface States {}
interface Props {}
export default class SelfScreen extends React.Component<Props, States> {
  constructor(props: Readonly<Props>) {
    super(props);
  }
  render() {
    return (
      <SafeAreaView style={{ backgroundColor: "#fff" }}>
        <View>
          <StatusBar barStyle="dark-content" backgroundColor="#fff" />
          <View>
            <View
              style={{
                height: 45,
                backgroundColor: "#fff",
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 10,
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>我的</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
