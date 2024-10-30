import React from 'react';
import {
  Dimensions,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  ScrollView,
  Image,
} from 'react-native';

const { height } = Dimensions.get('window');

const AboutusScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Hero Section */}
        <View style={styles.heroContainer}>
          <ImageBackground
            source={{
              uri: 'https://www.marconews.com/gcdn/presto/2021/09/18/PTCN/299593ab-386d-41d4-bd8d-6f3018a0c512-TCN_COASTAL_CLEANUP07.jpg',
            }}
            style={styles.heroImage}
          >
            <View style={styles.overlay}>
              <Text style={styles.heroText}>About Us</Text>
              <Text style={styles.heroSubText}>
                The Community Extension Office is responsible for the
                development and implementation of sustainable community
                projects, social responsibility, and long-term learning programs
                on behalf of National University.
              </Text>
            </View>
          </ImageBackground>
        </View>

        {/* Main Content */}
        <View style={styles.content}>
          {/* Mission and Vision */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>🚀 Our Mission</Text>
            <Text style={styles.sectionText}>
              Guided by the core values and characterized by our cultural
              heritage of Dynamic Filipinism, National University is committed
              to provide relevant, innovative, and accessible quality education
              and other development programs to its students, associates,
              faculty, alumni, and other stakeholders to be proactive in
              socio-economic-environmental problems both local and national
              through the Community Extension Office program and services
              addressing local and international concerns as well as
              contributing to global priorities.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>📌 Our Vision</Text>
            <Text style={styles.sectionText}>
              The Community Extension Unit of National University will be the
              primary facilitator and provider of effective programs and
              projects to help empower communities and sectors in addressing
              socio-economic environmental problems as well as promoting
              volunteerism by using dynamic, science-based educational
              resources.
            </Text>
          </View>

          {/* Contact Information */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Contact Us</Text>
            <Text style={styles.sectionText}>
              📞 Mobile Number: {' '}
              <Text style={styles.contactText}>0912 345 6789</Text>
            </Text>
            <Text style={styles.sectionText}>
              📧 Email: {' '}
              <Text style={styles.contactText}>comexoffice@nu-moa.edu.ph</Text>
            </Text>
          </View>

          {/* Administration & Staff */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Administration & Staff</Text>
            <View style={styles.staffContainer}>
              <Image
                source={{
                  uri: 'https://i.imgur.com/xHQfWxh.png',
                }}
                style={styles.staffImage}
              />
              <Text style={styles.staffName}>Zoren Matthew M. Blardonny</Text>
              <Text style={styles.staffRole}>
                Coordinator of Community Extension
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AboutusScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  contentContainer: {
    paddingBottom: 30,
  },
  heroContainer: {
    height: height / 2.5,
    backgroundColor: '#ddd',
  },
  heroImage: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  heroText: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  heroSubText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#35408e',
  },
  sectionText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
  },
  contactText: {
    fontWeight: 'bold',
    color: '#35408e',
  },
  staffContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  staffImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  staffName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  staffRole: {
    fontSize: 16,
    color: '#666',
  },
});
