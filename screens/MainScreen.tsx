import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { List, FAB } from "react-native-paper";
import format from "date-fns/format";
import { useNavigation } from "@react-navigation/native";

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
  const navigation = useNavigation();

  const onPressAdd = () => {
    navigation.navigate('Compose');
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={memo}
        keyExtractor={item => '${item.createdAt}'}
        renderItem={({item}) => (
          <List.Item
            title={item.text}
            titleNumberOfLines={5}
            description={
              format(item.createdAt, 'yyyy/MM/dd HH:mm')
            }
            descriptionStyle={{ textAlign: 'right' }}
          />
        )}
      />
      <FAB
        style={{ 
          position: 'absolute',
          right: 16,
          bottom: 16,
        }}
        icon="plus"
        onPress={onPressAdd}
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