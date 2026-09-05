import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Switch,
  Alert,
} from 'react-native';

export default function SettingsScreen({ navigation }) {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const handleSave = () => {
    Alert.alert(
      'Settings Saved',
      'Your preferences have been updated.'
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Text style={styles.backIcon}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Settings</Text>

        <View style={styles.spacer} />
      </View>

      {/* Profile */}
      <View style={styles.profileCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>H</Text>
        </View>

        <View>
          <Text style={styles.profileName}>Hussain</Text>
          <Text style={styles.profileEmail}>
            hussain@example.com
          </Text>
        </View>
      </View>

      {/* Notification Settings */}
      <Text style={styles.sectionTitle}>Notifications</Text>

      <View style={styles.settingItem}>
        <View>
          <Text style={styles.settingTitle}>
            Study Notifications
          </Text>

          <Text style={styles.settingDescription}>
            Receive reminders for your study tasks
          </Text>
        </View>

        <Switch
          value={notifications}
          onValueChange={setNotifications}
        />
      </View>

      {/* Appearance */}
      <Text style={styles.sectionTitle}>Appearance</Text>

      <View style={styles.settingItem}>
        <View>
          <Text style={styles.settingTitle}>
            Dark Mode
          </Text>

          <Text style={styles.settingDescription}>
            Change the appearance of the application
          </Text>
        </View>

        <Switch
          value={darkMode}
          onValueChange={setDarkMode}
        />
      </View>

      {/* Other Settings */}
      <Text style={styles.sectionTitle}>Other</Text>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('Privacy')}
      >
        <Text style={styles.menuIcon}>🔒</Text>

        <Text style={styles.menuText}>
          Privacy & Security
        </Text>

        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('DataSync')}
      >
        <Text style={styles.menuIcon}>☁️</Text>

        <Text style={styles.menuText}>
          Data & Synchronization
        </Text>

        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('Help')}
      >
        <Text style={styles.menuIcon}>❓</Text>

        <Text style={styles.menuText}>
          Help & Support
        </Text>

        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      {/* Save */}
      <TouchableOpacity
        style={styles.saveButton}
        onPress={handleSave}
      >
        <Text style={styles.saveText}>
          Save Settings
        </Text>
      </TouchableOpacity>

      {/* Logout */}
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => {
          Alert.alert(
            'Log Out',
            'Are you sure you want to log out?',
            [
              {
                text: 'Cancel',
                style: 'cancel',
              },
              {
                text: 'Log Out',
                style: 'destructive',
                onPress: () =>
                  navigation.navigate('Login'),
              },
            ]
          );
        }}
      >
        <Text style={styles.logoutText}>
          Log Out
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  header: {
    height: 65,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },

  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  backIcon: {
    fontSize: 38,
    color: '#12263A',
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#12263A',
  },

  spacer: {
    width: 40,
  },

  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    padding: 18,
    borderRadius: 14,
    backgroundColor: '#E7F8F1',
  },

  avatar: {
    width: 55,
    height: 55,
    borderRadius: 28,
    backgroundColor: '#10B981',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },

  avatarText: {
    color: '#FFFFFF',
    fontSize: 23,
    fontWeight: 'bold',
  },

  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#12263A',
  },

  profileEmail: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 4,
  },

  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#64748B',
    marginHorizontal: 20,
    marginTop: 15,
    marginBottom: 8,
    textTransform: 'uppercase',
  },

  settingItem: {
    minHeight: 70,
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 12,
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  settingTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#12263A',
  },

  settingDescription: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 4,
    maxWidth: 260,
  },

  menuItem: {
    height: 58,
    marginHorizontal: 20,
    marginBottom: 8,
    paddingHorizontal: 15,
    borderRadius: 12,
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    flexDirection: 'row',
    alignItems: 'center',
  },

  menuIcon: {
    fontSize: 19,
    width: 35,
  },

  menuText: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    color: '#12263A',
  },

  arrow: {
    fontSize: 27,
    color: '#94A3B8',
  },

  saveButton: {
    marginHorizontal: 20,
    marginTop: 25,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#10B981',
    alignItems: 'center',
  },

  saveText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  logoutButton: {
    marginHorizontal: 20,
    marginTop: 12,
    padding: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#EF4444',
    alignItems: 'center',
  },

  logoutText: {
    color: '#EF4444',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
