import React from "react";
import { Text, View, StatusBar } from "react-native";
interface States {}
interface Props {}
export default class ChatScreen extends React.Component<Props, States> {
  constructor(props: Readonly<Props>) {
    super(props);
  }
  render() {
    return (
      <View>
        <StatusBar barStyle="dark-content" backgroundColor="#f2f2f2" />
      </View>
    );
  }
}
