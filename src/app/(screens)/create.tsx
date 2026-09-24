import { View, Text, TouchableWithoutFeedback, Keyboard } from "react-native";

const Create = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <Text>Create</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Create;
