import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";

import Colors from "../../constants/Colors";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props) {
    return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                headerStyle: {
                    backgroundColor: Colors[colorScheme].tint
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: "bold"
                },
                tabBarStyle: {
                    backgroundColor: Colors[colorScheme].tint
                },
                tabBarActiveTintColor: Colors[colorScheme].tabIconSelected,
                tabBarInactiveTintColor: Colors[colorScheme].tabIconDefault,
                tabBarActiveBackgroundColor:
                    Colors[colorScheme].tabIconActiveBackground
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Tab One",
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="code" color={color} />
                    ),
                    headerRight: () => (
                        <Link href="/modal" asChild>
                            <Pressable>
                                {({ pressed }) => (
                                    <FontAwesome
                                        name="info-circle"
                                        size={25}
                                        color={
                                            Colors[colorScheme].tabIconDefault
                                        }
                                        style={{
                                            marginRight: 15,
                                            opacity: pressed ? 0.5 : 1
                                        }}
                                    />
                                )}
                            </Pressable>
                        </Link>
                    )
                }}
            />
            <Tabs.Screen
                name="two"
                options={{
                    title: "Tab Two",
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="code" color={color} />
                    )
                }}
            />
        </Tabs>
    );
}
