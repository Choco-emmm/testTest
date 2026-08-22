import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthLoginScreen from './screens/AuthLoginScreen';
import AuthRegisterScreen from './screens/AuthRegisterScreen';
import YouthMemoriesScreen from './screens/YouthMemoriesScreen';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="AuthLogin">
                <Stack.Screen name="AuthLogin" component={AuthLoginScreen} />
                <Stack.Screen name="AuthRegister" component={AuthRegisterScreen} />
                <Stack.Screen name="YouthMemories" component={YouthMemoriesScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
