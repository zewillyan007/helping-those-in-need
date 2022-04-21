import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Incidents from './pages/Incidents'
import Detail from './pages/Detail'

export default function Routes() {
    return (
        <NavigationContainer>
            
            <Stack.Navigator screenOptions={{headerShown: false}}> 
                <Stack.Screen name='Incidents' component={Incidents} />
                <Stack.Screen name='Detail' component={Detail} />
            </Stack.Navigator>
        
        </NavigationContainer>
    )
}