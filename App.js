// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
// In App.js in a new project
// import 'react-native-gesture-handler';
// import * as React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// // import '@react-navigation/drawer';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Hello Rayan</Text>
//     </View>
//   );
// }

// const Stack = createStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Rayan App" component={HomeScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;


// import * as React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// function Feed() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Feed Screen</Text>
//     </View>
//   );
// }

// function Notifications() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Notifications Screen</Text>
//     </View>
//   );
// }

// function Profile() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Profile Screen</Text>
//     </View>
//   );
// }

// const Drawer = createDrawerNavigator();

// function MyDrawer() {
//   return (
//     <Drawer.Navigator initialRouteName="Feed">
//       <Drawer.Screen
//         name="Feed" 
//         component={Feed}
//         options={{ drawerLabel: 'Tasks' , title: "taggsks" }}
//       />
//       <Drawer.Screen
//         name="Notifications"
//         component={Notifications}
//         options={{ drawerLabel: 'Updates' }}
//       />
//       <Drawer.Screen
//         name="Profile"
//         component={Profile}
//         options={{ drawerLabel: 'Profile' }}
//       />
//     </Drawer.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <MyDrawer />
//     </NavigationContainer>
//   );
// }

import * as React from 'react';
import { useEffect, useState } from 'react';
import { Button, View, Text, Image, ScrollView, ActivityIndicator, Icon, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Appointments from './components/appoinments';
import Capture from './components/capture';
import Domains from './components/domains';
import Goals from './components/goals';
import Notes from './components/notes';
import Performance from './components/performance';
import Projects from './components/projects';
import Roles from './components/roles';
import Tasks from './components/tasks';
import Visions from './components/visions';

function SettingsScreen({ route, navigation }) {
  const { user } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
      <Text>userParam: {JSON.stringify(user)}</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

function TasksScreen({ navigation }) {

  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <ScrollView style={{ flex: 1, }}>
      <Text>Tasks Screen</Text>
      <View style={{ display: 'flex', flexDirection: 'row', borderColor: '#234', borderWidth: 2, padding: 5, margin: 40, }}>
        <Image style={{ height: 30, width: 30 }}
          source={require('./assets/puzz.png')} />
      </View>
      <View >
        {
          isLoading ? <ActivityIndicator /> :
            (
              <FlatList
                data={data}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={(()=>alert('Task'+{item}+' pressed'))}>
                    <View style={{ display: 'flex', flexDirection: 'row', borderColor: '#234', borderWidth: 2, padding: 5, margin: 5, borderColor: item.completed ? '#03fc1c' : '#fc0703', borderRadius: 10 }}>
                      <Text style={{ fontWeight: 'bold' }}>TASK NUMBER: {item.id} </Text>
                      <Text style={{ marginRight: 100 ,paddingRight:34}}>{item.title}</Text>
                      
                    </View>
                  </TouchableOpacity>
                )}
              />
            )
        }
      </View>
      <Text>Key:</Text>
    </ScrollView>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Settings"
        onPress={() =>
          navigation.navigate('Root', {
            screen: 'Settings',
            params: { user: 'jane' },
          })
        }
      />
    </View>
  );
}

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function Root() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tasks" component={TasksScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Root">
        <Drawer.Screen name="Appointments" component={Appointments} />

        <Drawer.Screen name="Capture" component={Capture} />
        <Drawer.Screen name="Domains" component={Domains} />
        <Drawer.Screen name="Goals" component={Goals} />
        <Drawer.Screen name="Notes" component={Notes} />
        <Drawer.Screen name="Performance" component={Performance} />
        <Drawer.Screen name="Projects" component={Projects} />
        <Drawer.Screen name="Roles" component={Roles} />
        <Drawer.Screen name="Tasks" component={Tasks} />
        <Drawer.Screen name="Visions" component={Visions} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: '#fff',
  },
  card:
  {
    marginBottom: 10,
    marginLeft: '2%',
    width: '96%'
  },
  cardImage:
  {
    width: 300,
    height: 200,
    // borderColor: 2,
    // border: '2 solid red',
    borderWidth: 6,
    borderColor: '#f00',
    // backgroundColor:'#f6d',
  },
  cardText:
  {
    padding: 10,
    fontSize: 16
  }
});
