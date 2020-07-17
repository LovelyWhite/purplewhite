import React from "react";
import { Text} from "react-native"
interface States{

}
interface Props{

}
export default class SelfScreen extends React.Component<Props,States>{
    constructor(props: Readonly<Props>){
        super(props);
    }
    render(){
        return <Text>self</Text>
    }
}