import React,{Component} from 'react';
import { StyleSheet, Text, View } from "react-native";
import my_data from "./example_database.json";
import "./Settings.css";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

class Settings extends Component{
  

  constructor(props){
    super(props);
    this.state = {
      my_heroes : my_data,
      complete_list : []
    }
    this.getList = this.getList.bind(this);
  }

    componentDidMount(){
      this.getList();
    }

    getList(){
      var that = this;
        fetch("https://api.epicsevendb.com/hero",{
            method:"GET", mode: 'cors',
            headers : {'Access-Control-Allow-Origin':'*'}
        }).then((response)=>{
                return response.json();
            }).then((result)=>{
              that.setState({complete_list : result.results});
        })
    }

    render(){
      return (
        <View style={[styles.container, {flexDirection: "row"}]}>
            <View style={{ flex: 1, backgroundColor: "red" }} />
            <View style={{ flex: 2, backgroundColor: "darkorange" }} />
            <View style={{ flex: 3, backgroundColor: "green" }} />
    </View>);
};


}
export default Settings;
