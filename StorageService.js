import AsyncStorage from '@react-native-async-storage/async-storage';

const TASKS_KEY = '@studybuddy_tasks';
const USER_KEY = '@studybuddy_user';
const SETTINGS_KEY = '@studybuddy_settings';

// Save tasks
export const saveTasks = async (tasks) => {
  try {
    await AsyncStorage.setItem(
      TASKS_KEY,
      JSON.stringify(tasks)
    );
    return true;
  } catch (error) {
    console.error('Error saving tasks:', error);
    return false;
  }
};

// Retrieve tasks
export const getTasks = async () => {
  try {
    const storedTasks = await AsyncStorage.getItem(TASKS_KEY);

    if (storedTasks !== null) {
      return JSON.parse(storedTasks);
    }

    return [];
  } catch (error) {
    console.error('Error retrieving tasks:', error);
    return [];
  }
};

// Save user information
export const saveUser = async (user) => {
  try {
    await AsyncStorage.setItem(
      USER_KEY,
      JSON.stringify(user)
    );
    return true;
  } catch (error) {
    console.error('Error saving user:', error);
    return false;
  }
};

// Retrieve user information
export const getUser = async () => {
  try {
    const user = await AsyncStorage.getItem(USER_KEY);

    return user ? JSON.parse(user) : null;
  } catch (error) {
    console.error('Error retrieving user:', error);
    return null;
  }
};

// Save app settings
export const saveSettings = async (settings) => {
  try {
    await AsyncStorage.setItem(
      SETTINGS_KEY,
      JSON.stringify(settings)
    );
    return true;
  } catch (error) {
    console.error('Error saving settings:', error);
    return false;
  }
};

// Retrieve app settings
export const getSettings = async () => {
  try {
    const settings = await AsyncStorage.getItem(SETTINGS_KEY);

    return settings
      ? JSON.parse(settings)
      : {
          notificationsEnabled: true,
          theme: 'light',
        };
  } catch (error) {
    console.error('Error retrieving settings:', error);
    return null;
  }
};

// Remove all stored data
export const clearStorage = async () => {
  try {
    await AsyncStorage.multiRemove([
      TASKS_KEY,
      USER_KEY,
      SETTINGS_KEY,
    ]);

    return true;
  } catch (error) {
    console.error('Error clearing storage:', error);
    return false;
  }
};
