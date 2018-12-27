import { Navigation } from 'react-native-navigation'

import HomeScreen from './components/views/Home/index'
import LoginScreen from './components/views/Login/index'
import ExploreScreen from './components/views/Explore/index'
import ExamsScreen from './components/views/Exams/index'
import ProfileScreen from './components/views/Profile/index'
import Initializing from './../App'

export default function registerScreens(){
    
    Navigation.registerComponent("online_course.home" , ()=> HomeScreen);
    Navigation.registerComponent("online_course.explore" , ()=> ExploreScreen);
    Navigation.registerComponent("online_course.exams" , ()=> ExamsScreen);
    Navigation.registerComponent("online_course.profile" , ()=> ProfileScreen);
    Navigation.registerComponent("online_course.login" , ()=> LoginScreen);
    Navigation.registerComponent("online_course.initializing" , ()=> Initializing);
}