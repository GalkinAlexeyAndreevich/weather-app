import "react-native-get-random-values";
import { nanoid } from "nanoid";
import { StyleSheet, View,ScrollView} from "react-native";
import { AppNavigator } from "./routes/routes";
import { ThemeProvider, useTheme } from "./store/ThemeContext";
import { useEffect } from "react";


export default function App() {
    return (
        <ThemeProvider >
           {/* <ScrollView horizontal={false} alwaysBounceVertical={false}> */}
           <View style={{
                    flex: 1,
                    display: "flex",
            }}>
                <AppNavigator />
            </View>
           {/* </ScrollView> */}

        </ThemeProvider>
    );
}

