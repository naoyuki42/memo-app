import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { List } from "react-native-paper";

const memo = [
    {
      text: 'メモ1',
      createdAt: 1585574700000,
    },
    {
      text: 'メモ2',
      createdAt: 1585574700000,
    },
    {
      text: 'メモ3',
      createdAt: 1585574700000,
    },
  ];

export const MainScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={memo}
        keyExtractor={item => '${item.createdAt}'}
        renderItem={({item}) => (
          <List.Item
            title={item.text}
            description={item.createdAt}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
});