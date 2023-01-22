import { Text, Button, Alert, View } from 'react-native';

export default function App() {
  return (
    <View style={{flex:1, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around'}}>
      <Text>Hey look, a mysterious button!</Text>
      <Button title="Button"onPress={buttonPressed}/>
    </View>
  );
}

const buttonPressed = () => {  Alert.alert('Oh oh!');}
