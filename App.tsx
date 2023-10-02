import "react-native-get-random-values";
import { nanoid } from "nanoid";
import { StyleSheet, View } from "react-native";
import { AppNavigator } from "./routes/routes";
import { ThemeProvider } from "./store/ThemeContext";
import styled from "styled-components/native";

const Container = styled.View`
    flex: 1;
    display: "flex";
    background-color:${props => props.theme.background};
`

export default function App() {
    return (
        <ThemeProvider>
            <Container>
                <AppNavigator />
            </Container>
        </ThemeProvider>
    );
}

