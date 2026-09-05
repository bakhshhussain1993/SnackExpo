import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';

export default function SettingsMenu({ navigation }) {
  const menuItems = [
    {
      id: '1',
      title: 'Profile Information',
      icon: '👤',
      screen: 'Profile',
    },
    {
      id: '2',
      title: 'Notification Preferences',
      icon: '🔔',
      screen: 'Notifications',
    },
    {
      id: '3',
      title: 'Appearance',
      icon: '🎨',
      screen: 'Settings',
    },
    {
      id: '4',
      title: 'Privacy & Security',
      icon: '🔒',
      screen: 'Privacy',
    },
    {
      id: '5',
      title: 'Data & Synchronization',
      icon: '☁️',
      screen: 'DataSync',
    },
    {
      id: '6',
      title: 'Help & Support',
      icon: '❓',
      screen: 'Help',
    },
    {
      id: '7',
      title: 'About StudyBuddy',
      icon: 'ℹ️',
      screen: 'About',
    },
  ];

  const handleMenuPress = (item) => {
    navigation.navigate(item.screen);
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

        <View style={styles.headerSpacer} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >

        {/* Account Section */}
        <Text style={styles.sectionTitle}>Account</Text>

        {menuItems.slice(0, 1).map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.menuItem}
            onPress={() => handleMenuPress(item)}
          >
            <View style={styles.iconContainer}>
              <Text style={styles.icon}>{item.icon}</Text>
            </View>

            <Text style={styles.menuText}>{item.title}</Text>

            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
        ))}

        {/* Preferences */}
        <Text style={styles.sectionTitle}>Preferences</Text>

        {menuItems.slice(1, 3).map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.menuItem}
            onPress={() => handleMenuPress(item)}
          >
            <View style={styles.iconContainer}>
              <Text style={styles.icon}>{item.icon}</Text>
            </View>

            <Text style={styles.menuText}>{item.title}</Text>

            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
        ))}

        {/* Privacy and Data */}
        <Text style={styles.sectionTitle}>Privacy & Data</Text>

        {menuItems.slice(3, 5).map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.menuItem}
            onPress={() => handleMenuPress(item)}
          >
            <View style={styles.iconContainer}>
              <Text style={styles.icon}>{item.icon}</Text>
            </View>

            <Text style={styles.menuText}>{item.title}</Text>

            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
        ))}

        {/* Support */}
        <Text style={styles.sectionTitle}>Support</Text>

        {menuItems.slice(5).map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.menuItem}
            onPress={() => handleMenuPress(item)}
          >
            <View style={styles.iconContainer}>
              <Text style={styles.icon}>{item.icon}</Text>
            </View>

            <Text style={styles.menuText}>{item.title}</Text>

            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
        ))}

        {/* Logout */}
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>

      </ScrollView>
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

  headerSpacer: {
    width: 40,
  },

  content: {
    padding: 20,
    paddingBottom: 40,
  },

  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#64748B',
    marginTop: 18,
    marginBottom: 8,
    textTransform: 'uppercase',
  },

  menuItem: {
    height: 62,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    marginBottom: 8,
    borderRadius: 12,
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },

  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#E7F8F1',
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    fontSize: 19,
  },

  menuText: {
    flex: 1,
    marginLeft: 14,
    fontSize: 15,
    fontWeight: '600',
    color: '#12263A',
  },

  arrow: {
    fontSize: 28,
    color: '#94A3B8',
  },

  logoutButton: {
    marginTop: 30,
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#EF4444',
    alignItems: 'center',
  },

  logoutText: {
    color: '#EF4444',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
