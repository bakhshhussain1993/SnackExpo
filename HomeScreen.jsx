import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';

const tasks = [
  {
    id: '1',
    title: 'Math Review',
    subject: 'Mathematics',
    time: 'Today, 5:00 PM',
    completed: false,
  },
  {
    id: '2',
    title: 'Read Chapter 4',
    subject: 'English Literature',
    time: 'Today, 7:00 PM',
    completed: false,
  },
  {
    id: '3',
    title: 'Science Project',
    subject: 'Science',
    time: 'Tomorrow, 3:00 PM',
    completed: false,
  },
];

export default function HomeScreen({ navigation }) {
  const openTask = (task) => {
    navigation.navigate('TaskDetails', {
      taskId: task.id,
      task: task,
    });
  };

  const renderTask = ({ item }) => (
    <TouchableOpacity
      style={styles.taskCard}
      onPress={() => openTask(item)}
    >
      <View style={styles.taskIcon}>
        <Text style={styles.iconText}>
          {item.subject === 'Mathematics'
            ? '∑'
            : item.subject === 'Science'
            ? '⚗'
            : '📖'}
        </Text>
      </View>

      <View style={styles.taskInfo}>
        <Text style={styles.taskTitle}>{item.title}</Text>
        <Text style={styles.taskTime}>{item.time}</Text>
      </View>

      <View style={styles.checkbox}>
        {item.completed && <Text>✓</Text>}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.openDrawer?.()}
          style={styles.headerButton}
        >
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>

        <Text style={styles.logo}>
          <Text style={styles.logoGreen}>Study</Text>
          Buddy
        </Text>

        <TouchableOpacity style={styles.headerButton}>
          <Text style={styles.notificationIcon}>🔔</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={renderTask}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            {/* Welcome Section */}
            <View style={styles.welcomeCard}>
              <View>
                <Text style={styles.welcomeTitle}>
                  Hello, Student!
                </Text>
                <Text style={styles.welcomeText}>
                  Keep going! You're building a brighter future.
                </Text>
              </View>

              <Text style={styles.welcomeIcon}>🌱</Text>
            </View>

            {/* Today's Tasks Header */}
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Today's Tasks</Text>

              <TouchableOpacity
                onPress={() => navigation.navigate('Tasks')}
              >
                <Text style={styles.seeAll}>See All</Text>
              </TouchableOpacity>
            </View>
          </>
        }
        ListFooterComponent={
          <>
            {/* Progress */}
            <View style={styles.progressCard}>
              <View style={styles.progressHeader}>
                <Text style={styles.progressTitle}>
                  Today's Progress
                </Text>

                <Text style={styles.progressPercent}>67%</Text>
              </View>

              <View style={styles.progressBarBackground}>
                <View style={styles.progressBar} />
              </View>

              <Text style={styles.progressText}>
                8 of 12 tasks completed
              </Text>
            </View>

            {/* Quick Actions */}
            <Text style={styles.sectionTitle}>Quick Actions</Text>

            <View style={styles.quickActions}>
              <TouchableOpacity
                style={styles.actionCard}
                onPress={() => navigation.navigate('CreateTask')}
              >
                <Text style={styles.actionIcon}>＋</Text>
                <Text style={styles.actionText}>Add Task</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.actionCard}
                onPress={() => navigation.navigate('Tasks')}
              >
                <Text style={styles.actionIcon}>📅</Text>
                <Text style={styles.actionText}>Schedule</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.actionCard}
                onPress={() => navigation.navigate('Progress')}
              >
                <Text style={styles.actionIcon}>📊</Text>
                <Text style={styles.actionText}>Progress</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.actionCard}
                onPress={() => navigation.navigate('Settings')}
              >
                <Text style={styles.actionIcon}>⚙</Text>
                <Text style={styles.actionText}>Settings</Text>
              </TouchableOpacity>
            </View>
          </>
        }
      />

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.activeNavIcon}>⌂</Text>
          <Text style={styles.activeNavText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('Tasks')}
        >
          <Text style={styles.navIcon}>▣</Text>
          <Text style={styles.navText}>Tasks</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('Progress')}
        >
          <Text style={styles.navIcon}>▥</Text>
          <Text style={styles.navText}>Progress</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('Profile')}
        >
          <Text style={styles.navIcon}>♙</Text>
          <Text style={styles.navText}>Profile</Text>
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

  headerButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  menuIcon: {
    fontSize: 25,
    color: '#12263A',
  },

  notificationIcon: {
    fontSize: 20,
  },

  logo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#12263A',
  },

  logoGreen: {
    color: '#10B981',
  },

  welcomeCard: {
    margin: 20,
    padding: 20,
    borderRadius: 16,
    backgroundColor: '#E7F8F1',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  welcomeTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#12263A',
    marginBottom: 6,
  },

  welcomeText: {
    fontSize: 13,
    color: '#456B60',
    maxWidth: 230,
    lineHeight: 19,
  },

  welcomeIcon: {
    fontSize: 38,
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#12263A',
    marginHorizontal: 20,
    marginTop: 18,
    marginBottom: 12,
  },

  seeAll: {
    color: '#10B981',
    fontWeight: '600',
  },

  taskCard: {
    marginHorizontal: 20,
    marginVertical: 6,
    padding: 14,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    flexDirection: 'row',
    alignItems: 'center',
  },

  taskIcon: {
    width: 45,
    height: 45,
    borderRadius: 12,
    backgroundColor: '#EAF2FF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconText: {
    fontSize: 21,
  },

  taskInfo: {
    flex: 1,
    marginLeft: 12,
  },

  taskTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#12263A',
  },

  taskTime: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 4,
  },

  checkbox: {
    width: 22,
    height: 22,
    borderWidth: 1.5,
    borderColor: '#94A3B8',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  progressCard: {
    marginHorizontal: 20,
    marginTop: 20,
    padding: 18,
    borderRadius: 14,
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },

  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  progressTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#12263A',
  },

  progressPercent: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#10B981',
  },

  progressBarBackground: {
    height: 8,
    borderRadius: 5,
    backgroundColor: '#DCE5E2',
    marginTop: 12,
  },

  progressBar: {
    width: '67%',
    height: 8,
    borderRadius: 5,
    backgroundColor: '#10B981',
  },

  progressText: {
    marginTop: 8,
    fontSize: 12,
    color: '#64748B',
  },

  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 12,
    marginBottom: 20,
  },

  actionCard: {
    width: 75,
    height: 75,
    borderRadius: 12,
    backgroundColor: '#F1F5F9',
    justifyContent: 'center',
    alignItems: 'center',
  },

  actionIcon: {
    fontSize: 23,
    marginBottom: 5,
  },

  actionText: {
    fontSize: 10,
    color: '#475569',
    textAlign: 'center',
  },

  bottomNavigation: {
    height: 65,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },

  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  navIcon: {
    fontSize: 21,
    color: '#64748B',
  },

  activeNavIcon: {
    fontSize: 21,
    color: '#10B981',
  },

  navText: {
    fontSize: 10,
    color: '#64748B',
    marginTop: 3,
  },

  activeNavText: {
    fontSize: 10,
    color: '#10B981',
    fontWeight: '600',
    marginTop: 3,
  },
});
