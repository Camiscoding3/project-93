import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";



import SignUp from "./Screens/SignUp";
import * as firebase from "firebase";
import {firebaseConfig} from "./Config";



export default class App extends React.Component {
  render(){
    return (
 <SignUp/>
    );
  }

}