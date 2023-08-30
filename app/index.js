import React from "react";
import { View, Text } from "react-native";

// MyComponent is written as a functional component.
function MyComponent(props) {
  return (
    <View>
      <Text>
        <Text>{props.heading}</Text>
        {"\n"}
        <Text>This is a functional component. It has {props.body}.</Text>
      </Text>
    </View>
  );
}

export default function App() {
  return <MyComponent heading="React Native" body="props" />;
}
