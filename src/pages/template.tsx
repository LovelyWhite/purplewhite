import React from "react";
import { Text} from "react-native"
interface States{

}
interface Props{

}
export default class Template extends React.Component<Props,States>{
    constructor(props: Readonly<Props>){
        super(props);
    }
    render(){
        return <Text>模版</Text>
    }
}