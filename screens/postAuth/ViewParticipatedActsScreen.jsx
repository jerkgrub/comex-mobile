import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ProgressChart } from 'react-native-chart-kit';

const { width } = Dimensions.get('window');

const ViewParticipatedActsScreen = () => {
  const navigation = useNavigation();

  const data = [
    { title: 'Facebook Launch', extensionServices: '-', collegeDriven: '-', institutional: '8', capacityBuilding: '-' },
  ];

  const accumulatedHours = 8;
  const equivalentPoints = 1.5;
  const maxPoints = 18;
  const completionPercentage = Math.min(equivalentPoints / maxPoints, 1); // Ensure value is within 0-1

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        <Text style={styles.header}>Participated Activities</Text>

        {/* Table Header */}
        <View style={styles.tableHeader}>
          <Text style={styles.tableHeaderText}>Title Of Activities/Project/Program</Text>
          <Text style={styles.tableHeaderText}>Extension Services</Text>
          <Text style={styles.tableHeaderText}>College Driven</Text>
          <Text style={styles.tableHeaderText}>Institutional</Text>
          <Text style={styles.tableHeaderText}>Capacity Building Services</Text>
        </View>

        {/* Table Data */}
        {data.map((item, index) => (
          <View key={index} style={styles.tableRow}>
            <Text style={styles.tableCell}>{item.title}</Text>
            <Text style={styles.tableCell}>{item.extensionServices}</Text>
            <Text style={styles.tableCell}>{item.collegeDriven}</Text>
            <Text style={styles.tableCell}>{item.institutional}</Text>
            <Text style={styles.tableCell}>{item.capacityBuilding}</Text>
          </View>
        ))}

        {/* Total Hours & Points Rows */}
        <View style={styles.summaryRow}>
          <Text style={styles.summaryText}>Total number of hours rendered</Text>
          <Text style={styles.summaryText}>{accumulatedHours}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryText}>Equivalent Points</Text>
          <Text style={styles.summaryText}>{equivalentPoints}</Text>
        </View>

        {/* Accumulated Hours Chart */}
        <View style={styles.chartContainer}>
          <View style={styles.chartBox}>
            <Text style={styles.chartTitle}>Accumulated Hours of Community Service</Text>
            <ProgressChart
              data={{ data: [accumulatedHours / 10] }}
              width={width * 0.4}
              height={150}
              strokeWidth={8}
              radius={50}
              chartConfig={{
                backgroundGradientFrom: '#FFF',
                backgroundGradientTo: '#FFF',
                color: (opacity = 1) => `rgba(58, 128, 186, ${opacity})`,
              }}
              hideLegend
            />
            <Text style={styles.chartValue}>{accumulatedHours} hrs</Text>
          </View>

          <View style={styles.chartBox}>
            <Text style={styles.chartTitle}>Equivalent Total Points</Text>
            <ProgressChart
              data={{ data: [completionPercentage] }}
              width={width * 0.4}
              height={150}
              strokeWidth={8}
              radius={50}
              chartConfig={{
                backgroundGradientFrom: '#FFF',
                backgroundGradientTo: '#FFF',
                color: (opacity = 1) => `rgba(216, 182, 56, ${opacity})`,
              }}
              hideLegend
            />
            <Text style={styles.chartValue}>{equivalentPoints}/{maxPoints}</Text>
            <Text style={styles.chartSubtext}>{(completionPercentage * 100).toFixed(1)}% Completed</Text>
          </View>
        </View>

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
  summaryRow: {
    flexDirection: 'row',
    backgroundColor: '#EAF2FF',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 5,
    marginBottom: 3,
    width: '100%',
    justifyContent: 'space-between',
  },
  summaryText: {
    color: '#333',
    fontSize: 12,
  },
  chartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  chartBox: {
    alignItems: 'center',
    width: width * 0.45,
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  chartTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  chartValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  chartSubtext: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
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

export default ViewParticipatedActsScreen;