import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const ViewRegisteredActsScreen = () => {
  const navigation = useNavigation();

  // Sample data for registered activities with human-readable dates
  const registeredActivities = [
    { title: 'Community Outreach', dateRegistered: 'October 30, 2024' },
    { title: 'Tech Workshop', dateRegistered: 'September 15, 2024' },
    { title: 'Health Awareness Campaign', dateRegistered: 'August 25, 2024' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        <Text style={styles.header}>Registered Activities</Text>

        {/* Table Header */}
        <View style={styles.tableHeader}>
          <Text style={styles.tableHeaderText}>Title</Text>
          <Text style={styles.tableHeaderText}>Date Registered</Text>
        </View>

        {/* Table Data */}
        {registeredActivities.map((activity, index) => (
          <View key={index} style={styles.tableRow}>
            <Text style={styles.tableCell}>{activity.title}</Text>
            <Text style={styles.tableCell}>{activity.dateRegistered}</Text>
          </View>
        ))}

        {/* Generate Report Button */}
        <TouchableOpacity style={styles.reportButton}>
          <MaterialCommunityIcons name="download" size={18} color="white" />
          <Text style={styles.reportButtonText}>Generate Report</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollContainer: {
    padding: 20,
    alignItems: 'center',
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  backText: {
    color: '#35408e',
    fontSize: 16,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#35408e',
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
    width: '100%',
  },
  tableHeaderText: {
    flex: 1,
    color: '#FFF',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    backgroundColor: '#EAF2FF',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 5,
    marginBottom: 3,
    width: '100%',
  },
  tableCell: {
    flex: 1,
    color: '#333',
    fontSize: 12,
    textAlign: 'center',
  },
  reportButton: {
    flexDirection: 'row',
    backgroundColor: '#35408e',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  reportButtonText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});

export default ViewRegisteredActsScreen;