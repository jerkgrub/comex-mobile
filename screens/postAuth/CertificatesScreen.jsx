import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CertificatesScreen = () => {
  // Sample data for certificates
  const certificates = [
    {
      title: 'Facebook Launch',
      dateReceived: 'October 16, 2024',
      location: 'California',
      totalHours: '8 hours',
      beneficiaries: 'Victoria',
    },
    {
      title: 'Community Health Drive',
      dateReceived: 'September 10, 2024',
      location: 'New York',
      totalHours: '5 hours',
      beneficiaries: 'City Health',
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>Certificates</Text>

        {certificates.map((certificate, index) => (
          <View key={index} style={styles.certificateCard}>
            <TouchableOpacity onPress={() => toggleExpand(index)} style={styles.certificateHeader}>
              <View>
                <Text style={styles.certificateTitle}>{certificate.title}</Text>
                <Text style={styles.dateText}>Date Received: {certificate.dateReceived}</Text>
              </View>
              <MaterialCommunityIcons
                name={expandedIndex === index ? 'chevron-up' : 'chevron-down'}
                size={24}
                color="#666"
              />
            </TouchableOpacity>

            {expandedIndex === index && (
              <View style={styles.certificateDetails}>
                <Text style={styles.detailText}>Location: {certificate.location}</Text>
                <Text style={styles.detailText}>Total Hours Rendered: {certificate.totalHours}</Text>
                <Text style={styles.detailText}>Beneficiaries: {certificate.beneficiaries}</Text>

                <TouchableOpacity style={styles.downloadButton}>
                  <MaterialCommunityIcons name="download" size={18} color="black" />
                  <Text style={styles.downloadButtonText}>Download Certificate</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        ))}
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
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  certificateCard: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    marginBottom: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  certificateHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  certificateTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  dateText: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  certificateDetails: {
    marginTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#EEE',
    paddingTop: 15,
  },
  detailText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  downloadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  downloadButtonText: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default CertificatesScreen;