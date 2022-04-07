import React, { useState } from "react";
import { StyleSheet, KeyboardAvoidingView, TextInput } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { save } from "../storage";

export const ComposeScreen = () => {
  const [text, setText] = useState('');
  const navigation = useNavigation();

  const onPressSave = async () => {
      await save(text, Date.now());
      navigation.goBack();
  }
  
  return (
    <KeyboardAvoidingView style={styles.container}>
      <TextInput
        style={{ marginBottom: 16 }}
        placeholder="メモを入力してください"
        multiline
        onChangeText={(text) => setText(text)}
      />
      <Button mode="contained" onPress={onPressSave}>
        保存
      </Button>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  }
});