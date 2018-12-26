import { Navigation } from 'react-native-navigation'

import HomeScreen from './src/components/views/Home/index'
import LoginScreen from './src/components/views/Login/index'
import ExploreScreen from './src/components/views/Explore/index'
import ExamsScreen from './src/components/views/Exams/index'
import ProfileScreen from './src/components/views/Profile/index'

Navigation.registerComponent("online_course.home" , ()=> HomeScreen);
Navigation.registerComponent("online_course.explore" , ()=> ExploreScreen);
Navigation.registerComponent("online_course.exams" , ()=> ExamsScreen);
Navigation.registerComponent("online_course.profile" , ()=> ProfileScreen);