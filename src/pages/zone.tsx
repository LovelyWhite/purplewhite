import React from "react";
import { Text} from "react-native"
interface States{

}
interface Props{

}
export default class ZoneScreen extends React.Component<Props,States>{
    constructor(props: Readonly<Props>){
        super(props);
    }
    render(){
        return <Text>zone</Text>
    }
}