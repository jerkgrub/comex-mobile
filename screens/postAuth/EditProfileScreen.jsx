import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, SafeAreaView, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'react-native-image-picker';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const EditProfileScreen = () => {
  const navigation = useNavigation();
  const [profile, setProfile] = useState({
    firstName: 'Jermaine George',
    middleName: 'Villanueva',
    lastName: 'Acosta',
    idNumber: '2022-120102',
    mobileNumber: '9298519323',
    department: '',
    email: 'acostajg@students.nu-moa.edu.ph',
  });
  const [avatar, setAvatar] = useState(null);

  const selectImage = () => {
    ImagePicker.launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.assets && response.assets.length > 0) {
        setAvatar(response.assets[0].uri);
      }
    });
  };

  const handleSaveChanges = () => {
    // Save changes logic here
    console.log('Profile saved');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        <Text style={styles.header}>Edit Profile</Text>

        {/* Avatar Section */}
        <View style={styles.avatarContainer}>
          {avatar ? (
            <Image source={{ uri: avatar }} style={styles.avatar} />
          ) : (
            <MaterialCommunityIcons name="account-circle" size={100} color="#333" />
          )}
          <TouchableOpacity onPress={selectImage} style={styles.chooseFileButton}>
            <Text style={styles.chooseFileText}>Choose File</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveAvatarButton}>
            <Text style={styles.saveAvatarText}>Save Avatar</Text>
          </TouchableOpacity>
          <Text style={styles.roleText}>Faculty</Text>
        </View>

        {/* Form Fields */}
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            value={profile.firstName}
            onChangeText={(text) => setProfile({ ...profile, firstName: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Middle Name"
            value={profile.middleName}
            onChangeText={(text) => setProfile({ ...profile, middleName: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            value={profile.lastName}
            onChangeText={(text) => setProfile({ ...profile, lastName: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="ID Number"
            value={profile.idNumber}
            onChangeText={(text) => setProfile({ ...profile, idNumber: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Mobile Number"
            value={profile.mobileNumber}
            onChangeText={(text) => setProfile({ ...profile, mobileNumber: text })}
            keyboardType="phone-pad"
          />
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={profile.department}
              onValueChange={(value) => setProfile({ ...profile, department: value })}
              style={styles.picker}
            >
              <Picker.Item label="Select Department" value="" />
              <Picker.Item label="School of Information Technology" value="School of Information Technology" />
              <Picker.Item label="School of Health Sciences" value="School of Health Sciences" />
            </Picker>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={profile.email}
            onChangeText={(text) => setProfile({ ...profile, email: text })}
            keyboardType="email-address"
            editable={false} // Email is typically not editable
          />
        </View>

        {/* Save Changes Button */}
        <TouchableOpacity onPress={handleSaveChanges} style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save Changes</Text>
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
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  chooseFileButton: {
    backgroundColor: '#333',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginBottom: 5,
  },
  chooseFileText: {
    color: '#FFF',
    fontSize: 14,
  },
  saveAvatarButton: {
    backgroundColor: '#d8b638',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  saveAvatarText: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
  },
  roleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  form: {
    width: '100%',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 8,
    width: '100%',
    marginBottom: 15,
    fontSize: 16,
    borderColor: '#DDD',
    borderWidth: 1,
  },
  pickerContainer: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    width: '100%',
    marginBottom: 15,
    borderColor: '#DDD',
    borderWidth: 1,
  },
  picker: {
    width: '100%',
  },
  saveButton: {
    backgroundColor: '#d8b638',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EditProfileScreen;