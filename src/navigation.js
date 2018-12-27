import { Navigation } from 'react-native-navigation'

export const goToHome = () => Navigation.setRoot({
  root: {
    bottomTabs: {
      id: 'BottomTabsId',
      children: [
        {
          component: {
            name: 'online_course.home',
            options: {
              bottomTab: {
                fontSize: 12,
                text: 'خانه',
                icon: require('./assets/home.png')
              }
            }
          },
        },
        {
          component: {
            name: 'online_course.explore',
            options: {
              bottomTab: {
                text: 'جست و جو',
                fontSize: 12,
                icon: require('./assets/magnifying-glass.png')
              }
            }
          },
        },
        {
            component: {
              name: 'online_course.exams',
              options: {
                bottomTab: {
                  text: 'آزمون ها',
                  fontSize: 12,
                  icon: require('./assets/contract.png')
                }
              }
            },
        },
        {
            component: {
              name: 'online_course.profile',
              options: {
                bottomTab: {
                  text: 'پروفایل',
                  fontSize: 12,
                  icon: require('./assets/user.png')
                }
              }
            },
        },
      ],
    }
  }
});

export const goToAuth = () => Navigation.setRoot({
  root: {
    stack: {
      id: 'Login',
      children: [
        {
          component: {
            name: 'online_course.login',
          }
        }
    ],
    }
  }
})