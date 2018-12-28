import { Navigation } from 'react-native-navigation'

import HomeScreen from './components/views/Home/index'
import LoginScreen from './components/views/Login/index'
import ExploreScreen from './components/views/Explore/index'
import ExamsScreen from './components/views/Exams/index'
import ProfileScreen from './components/views/Profile/index'
import Initializing from './../App'
import ConfigureStore from './components/store/config';
import { Provider } from 'react-redux';

const store = ConfigureStore();

export default function registerScreens(){
    
    Navigation.registerComponentWithRedux("online_course.home" , ()=> HomeScreen , Provider , store);
    Navigation.registerComponentWithRedux("online_course.explore", () => ExploreScreen , Provider, store);
    Navigation.registerComponentWithRedux("online_course.exams", () => ExamsScreen , Provider, store);
    Navigation.registerComponentWithRedux("online_course.profile", () => ProfileScreen , Provider, store);
    Navigation.registerComponentWithRedux("online_course.login", () => LoginScreen , Provider, store);
    Navigation.registerComponentWithRedux("online_course.initializing", () => Initializing , Provider, store);
}