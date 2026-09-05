import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';

export default function NotificationsScreen({ navigation }) {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [taskReminders, setTaskReminders] = useState(true);
  const [deadlineAlerts, setDeadlineAlerts] = useState(true);

  const saveNotificationSettings = () => {
    Alert.alert(
      'Saved',
      'Your notification preferences have been saved.'
    );
  };

  const testNotification = () => {
    Alert.alert(
      'StudyBuddy Reminder',
      'This is a test notification. Your study reminder is working!'
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backIcon}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Notifications</Text>

        <View style={styles.spacer} />
      </View>

      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Text style={styles.bell}>🔔</Text>
        </View>

        <Text style={styles.title}>Notification Preferences</Text>

        <Text style={styles.description}>
          Choose which study reminders you would like to receive.
        </Text>

        {/* Main notification switch */}
        <View style={styles.setting}>
          <View style={styles.settingInfo}>
            <Text style={styles.settingTitle}>
              Notifications
            </Text>

            <Text style={styles.settingDescription}>
              Enable or disable all notifications
            </Text>
          </View>

          <Switch
            value={notificationsEnabled}
            onValueChange={setNotificationsEnabled}
          />
        </View>

        {/* Task reminders */}
        <View style={styles.setting}>
          <View style={styles.settingInfo}>
            <Text style={styles.settingTitle}>
              Study Task Reminders
            </Text>

            <Text style={styles.settingDescription}>
              Receive reminders before scheduled tasks
            </Text>
          </View>

          <Switch
            value={taskReminders && notificationsEnabled}
            onValueChange={setTaskReminders}
            disabled={!notificationsEnabled}
          />
        </View>

        {/* Deadline alerts */}
        <View style={styles.setting}>
          <View style={styles.settingInfo}>
            <Text style={styles.settingTitle}>
              Deadline Alerts
            </Text>

            <Text style={styles.settingDescription}>
              Get notified about approaching deadlines
            </Text>
          </View>

          <Switch
            value={deadlineAlerts && notificationsEnabled}
            onValueChange={setDeadlineAlerts}
            disabled={!notificationsEnabled}
          />
        </View>

        {/* Reminder time */}
        <TouchableOpacity
          style={styles.timeSetting}
          onPress={() =>
            Alert.alert(
              'Reminder Time',
              'Select when you want to receive reminders.'
            )
          }
        >
          <View>
            <Text style={styles.settingTitle}>
              Default Reminder Time
            </Text>

            <Text style={styles.settingDescription}>
              30 minutes before the task
            </Text>
          </View>

          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        {/* Save */}
        <TouchableOpacity
          style={styles.saveButton}
          onPress={saveNotificationSettings}
        >
          <Text style={styles.saveText}>
            Save Preferences
          </Text>
        </TouchableOpacity>

        {/* Test notification */}
        <TouchableOpacity
          style={styles.testButton}
          onPress={testNotification}
        >
          <Text style={styles.testText}>
            Send Test Notification
          </Text>
        </TouchableOpacity>
      </View>
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

  content: {
    padding: 20,
  },

  iconContainer: {
    width: 75,
    height: 75,
    borderRadius: 38,
    backgroundColor: '#E7F8F1',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 15,
  },

  bell: {
    fontSize: 35,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#12263A',
    marginTop: 18,
  },

  description: {
    textAlign: 'center',
    color: '#64748B',
    fontSize: 14,
    lineHeight: 20,
    marginTop: 8,
    marginBottom: 25,
  },

  setting: {
    minHeight: 75,
    padding: 15,
    marginBottom: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    backgroundColor: '#F8FAFC',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  settingInfo: {
    flex: 1,
    paddingRight: 10,
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
  },

  timeSetting: {
    minHeight: 70,
    padding: 15,
    marginTop: 5,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    backgroundColor: '#F8FAFC',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  arrow: {
    fontSize: 28,
    color: '#94A3B8',
  },

  saveButton: {
    backgroundColor: '#10B981',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 25,
  },

  saveText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  testButton: {
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#10B981',
    alignItems: 'center',
    marginTop: 12,
  },

  testText: {
    color: '#10B981',
    fontSize: 15,
    fontWeight: '600',
  },
});
