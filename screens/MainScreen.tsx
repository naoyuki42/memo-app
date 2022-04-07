import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { List, FAB } from "react-native-paper";
import format from "date-fns/format";
import { useNavigation } from "@react-navigation/native";
import { loadAll } from "../storage";

export const MainScreen = () => {
  const navigation = useNavigation();
  const [memos, setMemos] = useState([]);

  useEffect(() => {
    const initialize = async () => {
      const newMemos: any = await loadAll();
      setMemos(newMemos);
    }
    const unsubscribe = navigation.addListener('focus', initialize);
  }, [navigation]);

  const onPressAdd = () => {
    navigation.navigate('Compose');
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={memos}
        keyExtractor={item => '${item.createdAt}'}
        renderItem={({item}: any) => (
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