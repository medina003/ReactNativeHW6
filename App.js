import {
  View,
  Text,
  Modal,
  Button,
  StyleSheet,
  ImageBackground,
  Alert,
} from "react-native";
import { Image } from "expo-image";
import Main from "./components/Main";
import Card from "./components/Card";

const App = () => {
  return (
    <ImageBackground
      resizeMode="cover"
      source="https://catherineasquithgallery.com/uploads/posts/2023-02/1676524657_catherineasquithgallery-com-p-sero-zelenii-fon-oboi-131.jpg"
    >
      <View style={styles.container}>
        <Main></Main>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});

export default App;
