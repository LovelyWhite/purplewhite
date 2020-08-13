import React from "react";
import {
  Text,
  View,
  StatusBar,
  RefreshControl,
  SafeAreaView,
} from "react-native";
import { primaryColor } from "../const";
import Entypo from "react-native-vector-icons/Entypo";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
interface ChatItem {
  time: number;
  id: number;
  type: "pic" | "text" | "reply";
  text?: string;
  picAdress?: string;
  replyId?: number;
  isSend: boolean;
}
interface States {
  chatList: ChatItem[];
  pageIndex: number;
}
interface Props {}
export default class ChatScreen extends React.Component<Props, States> {
  constructor(props: Readonly<Props>) {
    super(props);
    this.state = {
      chatList: [
        {
          time: Date.now(),
          id: 123,
          type: "text",
          text: "今天天气不错",
          isSend: true,
        },
        {
          time: Date.now(),
          id: 123,
          type: "text",
          text: "是啊",
          isSend: false,
        },
        {
          time: Date.now(),
          id: 123,
          type: "text",
          text: "你看看这个怎么样？",
          isSend: true,
        },
      ],
      pageIndex: 0,
    };
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
              <View>
                <Text style={{ fontWeight: "bold" }}>上一次消息时间</Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 10,
                    color: primaryColor,
                  }}
                >
                  2020-07-08 03:06
                </Text>
              </View>
            </View>
          </View>
          <ScrollView
            refreshControl={<RefreshControl refreshing={false} />}
            style={{ paddingVertical: 10, height: "100%",backgroundColor:"#f2f2f2"}}
          >
            {this.state.chatList.map((chat, i) => {
              return (
                <View
                  key={i}
                  style={{
                    alignItems: chat.isSend ? "flex-end" : "flex-start",
                  }}
                >
                  <View
                    style={{
                      alignItems: "center",
                      paddingHorizontal: 10,
                      marginBottom: 5,
                      paddingVertical: 10,
                      marginHorizontal: 20,
                      borderRadius: 4,
                      backgroundColor: !chat.isSend ? primaryColor : "#fff",
                    }}
                  >
                    <Text
                      style={{
                        color: !chat.isSend ? "#fff" : "#000",
                        fontSize: 10,
                      }}
                    >
                      {chat.text}
                    </Text>
                  </View>
                </View>
              );
            })}
          </ScrollView>
          <View
            style={{
              position: "absolute",
              bottom: 45,
              right: 0,
              height: 40,
              width: "100%",
              flexDirection: "row",
              backgroundColor: "#ffffff99",
            }}
          >
            <TextInput
              style={{ flex: 1, paddingHorizontal: 10 }}
              multiline={true}
            />
            <TouchableOpacity activeOpacity={0.8}>
              <View
                style={{
                  backgroundColor: primaryColor,
                  height: "100%",
                  width: 50,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Entypo name="paper-plane" color="#fff" size={15} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
