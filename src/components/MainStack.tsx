import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { WebViewScreen } from "./WebViewScreen";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="WebView"
            screenOptions={{
                headerShown: false
            }}
        >
            <StackNavigator.Screen
                name="WebView"
                component={WebViewScreen}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);