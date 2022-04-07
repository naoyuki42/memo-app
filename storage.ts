import AsyncStorage from '@react-native-async-storage/async-storage';

export const save = async (text: string, createdAt:number) => {
  const key = '${createdAt}';
  const value = JSON.stringify({
    text,
    createdAt,
  });

  await AsyncStorage.setItem(key, value);
}

export const loadAll = async () => {
  const keys = await AsyncStorage.getAllKeys();
  keys.sort();
  const entryList = await AsyncStorage.multiGet(keys);

  return entryList.map((entry: any) => JSON.parse(entry[1]));
}