import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Alert,
} from 'react-native';

export default function TaskDetailsScreen({ route, navigation }) {
  const { task } = route.params || {};

  const [completed, setCompleted] = useState(
    task?.completed || false
  );

  if (!task) {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>‹ Back</Text>
        </TouchableOpacity>

        <View style={styles.emptyContainer}>
          <Text style={styles.emptyTitle}>Task Not Found</Text>
          <Text style={styles.emptyText}>
            The selected task could not be found.
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  const handleComplete = () => {
    setCompleted(!completed);

    Alert.alert(
      completed ? 'Task Reopened' : 'Task Completed',
      completed
        ? 'This task has been marked as incomplete.'
        : 'Great job! The task has been completed.'
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Task Details</Text>

        <TouchableOpacity
          style={styles.editButton}
          onPress={() => {
            Alert.alert('Edit Task', 'Edit functionality can be added here.');
          }}
        >
          <Text style={styles.editText}>✎</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Task Icon */}
        <View style={styles.iconContainer}>
          <Text style={styles.taskIcon}>
            {task.subject === 'Mathematics'
              ? '∑'
              : task.subject === 'Science'
              ? '⚗'
              : '📖'}
          </Text>
        </View>

        {/* Title */}
        <Text style={styles.title}>{task.title}</Text>

        {/* Subject */}
        <Text style={styles.subject}>{task.subject}</Text>

        {/* Information Card */}
        <View style={styles.infoCard}>
          <View style={styles.infoRow}>
            <Text style={styles.infoIcon}>📅</Text>

            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Due Date</Text>
              <Text style={styles.infoValue}>
                {task.time || 'Not specified'}
              </Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <Text style={styles.infoIcon}>⏰</Text>

            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Reminder</Text>
              <Text style={styles.infoValue}>
                7:00 PM
              </Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <Text style={styles.infoIcon}>🏷</Text>

            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Category</Text>
              <Text style={styles.infoValue}>
                {task.subject}
              </Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <Text style={styles.infoIcon}>✓</Text>

            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Status</Text>

              <Text
                style={[
                  styles.status,
                  completed
                    ? styles.completedStatus
                    : styles.pendingStatus,
                ]}
              >
                {completed ? 'Completed' : 'Pending'}
              </Text>
            </View>
          </View>
        </View>

        {/* Description */}
        <Text style={styles.sectionTitle}>Description</Text>

        <View style={styles.descriptionCard}>
          <Text style={styles.description}>
            {task.description ||
              `Complete the ${task.title} study task and review the important concepts related to ${task.subject}.`}
          </Text>
        </View>

        {/* Complete Button */}
        <TouchableOpacity
          style={[
            styles.completeButton,
            completed && styles.completedButton,
          ]}
          onPress={handleComplete}
        >
          <Text style={styles.completeButtonText}>
            {completed
              ? 'Mark as Incomplete'
              : '✓  Mark as Complete'}
          </Text>
        </TouchableOpacity>

        {/* Delete Button */}
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => {
            Alert.alert(
              'Delete Task',
              'Are you sure you want to delete this task?',
              [
                {
                  text: 'Cancel',
                  style: 'cancel',
                },
                {
                  text: 'Delete',
                  style: 'destructive',
                  onPress: () => navigation.goBack(),
                },
              ]
            );
          }}
        >
          <Text style={styles.deleteText}>Delete Task</Text>
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

  backText: {
    fontSize: 35,
    color: '#12263A',
    lineHeight: 38,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#12263A',
  },

  editButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  editText: {
    fontSize: 23,
    color: '#10B981',
  },

  content: {
    padding: 20,
    paddingBottom: 40,
  },

  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#E7F8F1',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 15,
  },

  taskIcon: {
    fontSize: 38,
  },

  title: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#12263A',
    textAlign: 'center',
    marginTop: 18,
  },

  subject: {
    fontSize: 15,
    color: '#64748B',
    textAlign: 'center',
    marginTop: 5,
  },

  infoCard: {
    backgroundColor: '#F8FAFC',
    borderRadius: 15,
    padding: 18,
    marginTop: 25,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },

  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 50,
  },

  infoIcon: {
    fontSize: 21,
    width: 40,
  },

  infoContent: {
    flex: 1,
  },

  infoLabel: {
    fontSize: 12,
    color: '#64748B',
    marginBottom: 3,
  },

  infoValue: {
    fontSize: 15,
    color: '#12263A',
    fontWeight: '600',
  },

  divider: {
    height: 1,
    backgroundColor: '#E2E8F0',
    marginVertical: 8,
  },

  status: {
    fontSize: 14,
    fontWeight: '600',
  },

  pendingStatus: {
    color: '#F59E0B',
  },

  completedStatus: {
    color: '#10B981',
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#12263A',
    marginTop: 25,
    marginBottom: 10,
  },

  descriptionCard: {
    backgroundColor: '#F8FAFC',
    padding: 18,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },

  description: {
    fontSize: 14,
    color: '#475569',
    lineHeight: 22,
  },

  completeButton: {
    backgroundColor: '#10B981',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 25,
  },

  completedButton: {
    backgroundColor: '#64748B',
  },

  completeButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  deleteButton: {
    borderWidth: 1,
    borderColor: '#10B981',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 12,
  },

  deleteText: {
    color: '#10B981',
    fontSize: 15,
    fontWeight: '600',
  },

  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },

  emptyTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#12263A',
  },

  emptyText: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 8,
    textAlign: 'center',
  },
});
