import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const HighlightsScreen = () => {
  // Data for Pie Chart
  const data = [
    { name: 'School of Information Technology', population: 70, color: '#4C9FF0', legendFontColor: '#333', legendFontSize: 12 },
    { name: 'School of Health Sciences', population: 30, color: '#6CD1A3', legendFontColor: '#333', legendFontSize: 12 },
  ];

  return (
    <View style={styles.container}>

      {/* Pie Chart */}
      <View style={styles.chartContainer}>
        <Text style={styles.sectionTitle}>Department Classification</Text>
        <PieChart
          data={data}
          width={width * 0.9} // Adjust to fit the screen
          height={220}
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="10" // Adjusted to provide more space for legends
          absolute
          hasLegend={false}
        />
        <View style={styles.legendContainer}>
          {data.map((item, index) => (
            <View key={index} style={styles.legendItem}>
              <View style={[styles.legendColor, { backgroundColor: item.color }]} />
              <Text style={styles.legendText}>{item.population} - {item.name}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Top Performing Department */}
      <View style={styles.topPerformingContainer}>
        <MaterialCommunityIcons name="chart-timeline-variant" size={48} color="white" />
        <Text style={styles.topPerformingTitle}>Top Performing Department</Text>
        <Text style={styles.topDepartment}>School of Information Technology</Text>
        <Text style={styles.topDepartmentDescription}>
          This department made the most significant contributions with its number of activities.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    paddingTop: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  chartContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    width: width * 0.9,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  legendContainer: {
    marginTop: 10,
    width: '100%',
    paddingHorizontal: 10,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  legendColor: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  legendText: {
    fontSize: 12,
    color: '#333',
    flexShrink: 1, // Ensures the text wraps to avoid truncation
  },
  topPerformingContainer: {
    backgroundColor: '#4C9FF0',
    borderRadius: 10,
    padding: 20,
    width: width * 0.9,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  topPerformingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
  },
  topDepartment: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 5,
  },
  topDepartmentDescription: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
    paddingHorizontal: 10, // Adds padding to prevent text from hitting the edges
  },
});

export default HighlightsScreen;