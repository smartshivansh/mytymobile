

import * as React from 'react';


import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Chats from '../myChat/Chats'
import Notify from './Notify';



const Stack = createNativeStackNavigator();

function MytyStack() {
    return (

        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name='Notify' component={Notify} />
            <Stack.Screen name="Chats" component={Chats} />

            


        </Stack.Navigator>

    );
}

export default MytyStack;