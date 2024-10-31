import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const RegisterActivityScreen = () => {
  const navigation = useNavigation();
  const [checked, setChecked] = useState(null);

  const nextStep = () => {
    if (!checked) {
      Alert.alert('Notice', 'Please select an option to proceed.');
      return;
    }
    // Logic for moving to the next step or final submit can be added here
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        <View style={styles.formCard}>
          <Text style={styles.formTitle}>Localized Registration Form for NU MOA Participants</Text>
          <Text style={styles.formSubtitle}>This registration is controlled by NU MOA COMEX. Please complete the form below.</Text>
          <Text style={styles.sectionTitle}>This registration is controlled by NU MOA COMEX...</Text>
          <RadioButton.Group onValueChange={value => setChecked(value)} value={checked}>
            <RadioButton.Item 
              label="I understand" 
              value="understand" 
              labelStyle={styles.choiceLabel} 
              uncheckedColor="#555" 
              color="#333"
            />
          </RadioButton.Group>
        </View>

        <View style={styles.formCard}>
          <Text style={styles.formTitle}>Data Privacy</Text>
          <Text style={styles.formSubtitle}>By answering this form, you are allowing NU MOA COMEX to safekeep your data...</Text>
          <Text style={styles.sectionTitle}>By answering this form, you allow NU MOA COMEX...</Text>
          <RadioButton.Group onValueChange={value => setChecked(value)} value={checked}>
            <RadioButton.Item 
              label="I agree" 
              value="agreeData" 
              labelStyle={styles.choiceLabel} 
              uncheckedColor="#555" 
              color="#333"
            />
            <RadioButton.Item 
              label="Exit the form" 
              value="exitData" 
              labelStyle={styles.choiceLabel} 
              uncheckedColor="#555" 
              color="#333"
            />
          </RadioButton.Group>

          <Text style={styles.sectionTitle}>Do you permit NU MOA COMEX to use these materials...</Text>
          <RadioButton.Group onValueChange={value => setChecked(value)} value={checked}>
            <RadioButton.Item 
              label="Yes" 
              value="yesMaterials" 
              labelStyle={styles.choiceLabel} 
              uncheckedColor="#555" 
              color="#333"
            />
            <RadioButton.Item 
              label="No" 
              value="noMaterials" 
              labelStyle={styles.choiceLabel} 
              uncheckedColor="#555" 
              color="#333"
            />
          </RadioButton.Group>
        </View>

        <View style={styles.formCard}>
          <Text style={styles.formTitle}>Safety Declaration</Text>
          <Text style={styles.formSubtitle}>By continuing answering this form, you acknowledge that this event is voluntary...</Text>
          <Text style={styles.sectionTitle}>By continuing answering this form, you acknowledge...</Text>
          <RadioButton.Group onValueChange={value => setChecked(value)} value={checked}>
            <RadioButton.Item 
              label="I agree" 
              value="agreeSafety" 
              labelStyle={styles.choiceLabel} 
              uncheckedColor="#555" 
              color="#333"
            />
            <RadioButton.Item 
              label="Exit the form" 
              value="exitSafety" 
              labelStyle={styles.choiceLabel} 
              uncheckedColor="#555" 
              color="#333"
            />
          </RadioButton.Group>

          <Text style={styles.sectionTitle}>I am declaring that I am physically fit to take part in this event...</Text>
          <RadioButton.Group onValueChange={value => setChecked(value)} value={checked}>
            <RadioButton.Item 
              label="I agree" 
              value="agreeFit" 
              labelStyle={styles.choiceLabel} 
              uncheckedColor="#555" 
              color="#333"
            />
            <RadioButton.Item 
              label="Exit the form" 
              value="exitFit" 
              labelStyle={styles.choiceLabel} 
              uncheckedColor="#555" 
              color="#333"
            />
          </RadioButton.Group>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={nextStep} style={styles.nextButton}>
            <Text style={styles.nextButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
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
  formCard: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  formTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  formSubtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  choiceLabel: {
    fontSize: 15,
    color: '#555',
    marginLeft: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  nextButton: {
    backgroundColor: '#d8b638',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  nextButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default RegisterActivityScreen;