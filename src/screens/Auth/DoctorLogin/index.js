import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Picker,
  KeyboardAvoidingView,
  SafeAreaView,
} from 'react-native';
import {Avatar, RadioButton} from 'react-native-paper';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useNavigation} from '@react-navigation/native';
import InputField from '../../../components/InputFiels';
import CustomButtom from '../../../components/Button';
import Header from '../../../components/Header';
import BackBtn from '../../../assets/assets/icon-button.svg';
import DropdownIcon from '../../../assets/assets/arrow_drop_down.svg';
import Location from '../../../assets/assets/my_location.svg';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import MyStatusBar from '../../../components/Statusbar';

const ProgressBarWithGap = ({totalSteps, currentStep}) => {
  return (
    <View style={styles.progressBarContainer}>
      {Array.from({length: totalSteps}, (_, index) => (
        <View
          key={index}
          style={[
            styles.progressBarSegment,
            index < currentStep ? styles.progressBarSegmentActive : null,
            index === currentStep ? styles.progressBarSegmentCurrent : null,
          ]}
        />
      ))}
    </View>
  );
};

const DoctorAccount = () => {
  const [avatar, setAvatar] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigation = useNavigation();

  const handleImageUpload = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (!response.didCancel && !response.errorCode) {
        setAvatar(response.uri);
      }
    });
  };
  const handlePress = () => {
    navigation.goBack('DoctorHomePage');
  };

  const handleCameraUpload = () => {
    launchCamera({mediaType: 'photo'}, response => {
      if (!response.didCancel && !response.errorCode) {
        setAvatar(response.uri);
      }
    });
  };
  const [step, setStep] = useState(1);
  const totalSteps = 2;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      // Submit form data
      navigation.navigate('DoctorHome');
    }
  };

  const options = ['Option 1', 'Option 2', 'Option 3'];

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const selectOption = option => {
    setSelectedValue(option);
    setDropdownVisible(false);
  };
  const [isLiked, setIsLiked] = useState([
    {id: 1, value: true, name: 'Male', selected: false},
    {id: 2, value: false, name: 'Female', selected: false},
    {id: 3, value: false, name: 'Other', selected: false},
  ]);
  const onRadioBtnClick = item => {
    let updatedState = isLiked.map(isLikedItem =>
      isLikedItem.id === item.id
        ? {...isLikedItem, selected: true}
        : {...isLikedItem, selected: false},
    );
    setIsLiked(updatedState);
  };

  return (
    <KeyboardAvoidingView  behavior='position' style={{ flex:1 }}>
      <View>
      <MyStatusBar backgroundColor="transparent" barStyle= "dark-content" />
      <View style={{height: responsiveScreenHeight(70)}}>
        <View style={{flexDirection: 'row'}}>
          <Header image={<BackBtn />} handlePress={handlePress} />
          <View
            style={{textAlign: 'center', alignSelf: 'center', margin: 'auto'}}>
            <Text style={styles.h1}>CreateAccount</Text>
          </View>
        </View>
        <ProgressBarWithGap totalSteps={totalSteps} currentStep={step - 1} />
        <Text style={styles.inputLabel}>
          {step === 1 ? 'Personal Detals' : 'Professional Details'}
        </Text>
        {/* Render form inputs based on the current step */}
        {/* ... */}
        {step === 1 && (
          <View style={{marginVertical: responsiveScreenHeight(2)}}>
            <TouchableOpacity
              style={styles.avatarContainer}
              onPress={handleImageUpload}>
              <View onPress={handleCameraUpload}>
                <Avatar.Image
                  size={72}
                  source={require('../../../assets/assets/avatar.png')}
                />
                <Image
                  style={{position: 'absolute', bottom: 2, right: 0}}
                  source={require('../../../assets/assets/cameraIcon.png')}
                />
              </View>
            </TouchableOpacity>

            <View>
              <Text style={styles.inputLabel}>First Name</Text>
              <InputField
                placeholder="First Name"
                value={firstName}
                handleChange={text => setFirstName(text)}
                keyboardType="default"
              />
            </View>
            <View>
              <Text style={styles.inputLabel}>Last Name</Text>
              <InputField
                placeholder="Last Name"
                value={lastName}
                handleChange={text => setLastName(text)}
                keyboardType="default"
              />
            </View>
            <View>
              <Text style={styles.inputLabel}>Email</Text>
              <InputField
                placeholder="Email"
                value={email}
                handleChange={text => setEmail(text)}
                keyboardType="email-address"
              />
            </View>
            <View style={styles.genderContainer}>
              <Text style={styles.inputLabel}>Gender:</Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: responsiveScreenHeight(2)}}>
                {isLiked.map((item, e) => (
                  <View key={e} style={styles.radioButtonContainer}>
                    <TouchableOpacity
                      onPress={() => onRadioBtnClick(item)}
                      style={styles.radioButton}>
                      {item.selected ? (
                        <View style={styles.radioButtonIcon} />
                      ) : (
                        <View style={styles.radioButtonIcon2} />
                      )}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onRadioBtnClick(item)}>
                      <Text
                        style={
                          !item.selected
                            ? styles.radioButtonText
                            : styles.radioButtonText2
                        }>
                        {item.name}
                      </Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            </View>
          </View>
        )}
        {step === 2 && (
          <View style={{ marginVertical: responsiveScreenHeight(2)}}>
            <Text style={styles.inputLabel}>Profession Type</Text>
            <View style={styles.inputSelect}>
              <TouchableOpacity onPress={toggleDropdown}>
                <Text style={{fontFamily: 'Raleway-Medium', color: '#172331', paddingHorizontal: 10}}>
                  {selectedValue || 'Select'}
                </Text>
                <DropdownIcon
                  style={{position: 'absolute', right: 5, top: '30%'}}
                />
              </TouchableOpacity>
              {/* {dropdownVisible && (
                <View
                  style={{
                    position: 'absolute',
                    right: 0,
                    bottom: 0,
                    borderColor: '#EBEBEB',
                  }}>
                  {options.map((option, index) => (
                    <TouchableOpacity
                      key={index}
                      onPress={() => selectOption(option)}>
                      <Text
                        style={{
                          fontFamily: 'Raleway-Medium',
                          fontSize: responsiveScreenFontSize(1.5),
                          color: '#172331',
                        }}>
                        {option}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )} */}
            </View>
            <View>
              <Text style={styles.inputLabel}>
                Where you work (Hospital/ Clinic)
              </Text>
              <InputField
                placeholder="Name"
                value={email}
                handleChange={text => setEmail(text)}
                keyboardType="default"
              />
            </View>
            <View>
              <Text style={styles.inputLabel}>Experience (yrs)</Text>
              <InputField
                placeholder="0"
                value={email}
                handleChange={text => setEmail(text)}
                keyboardType="default"
              />
            </View>
            <View>
              <Text style={styles.inputLabel}>Fee (in INR)</Text>
              <InputField
                placeholder="0"
                value={email}
                handleChange={text => setEmail(text)}
                keyboardType="default"
              />
            </View>
            <View>
              <Text style={styles.inputLabel}>My Address</Text>
              <InputField
                placeholder="Address"
                value={email}
                handleChange={text => setEmail(text)}
                keyboardType="default"
                image={<Location />}
              />
            </View>
          </View>
        )}
      </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>
          {step < totalSteps ? 'Next' : 'Submit'}
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    paddingTop: responsiveScreenHeight(6),
    justifyContent:"space-between"
  },
  progressBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  progressBarSegment: {
    flex: 1,
    height: 5,
    backgroundColor: '#ccc',
    marginRight: 10,
    marginTop: 20,
  },
  progressBarSegmentActive: {
    backgroundColor: '#4464D9',
  },
  progressBarSegmentCurrent: {
    backgroundColor: '#4464D9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  // button: {
  //   backgroundColor: '#4464D9',
  //   paddingVertical: 10,
  //   paddingHorizontal: 20,
  //   borderRadius: 5,
  //   marginTop: responsiveScreenHeight(12),
  // },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  h1: {
    fontFamily: 'Raleway-SemiBold',
    fontSize: 20,
    color: '#172331',
    marginHorizontal: responsiveScreenWidth(15),
  },
  avatarContainer: {
    alignItems: 'flex-start',
    marginBottom: 20,
    marginTop: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  avatarText: {
    fontSize: 16,
    marginTop: 10,
  },
  cameraButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    alignItems: 'center',
  },
  cameraButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputLabel: {
    fontFamily: 'Raleway-SemiBold',
    fontSize: 14,
    color: '#172331',
    marginBottom: responsiveScreenHeight(0.5),
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#EBEBEB',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  genderContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  genderLabel: {
    marginRight: 10,
    fontSize: 16,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  radioLabel: {
    fontSize: 16,
    fontFamily: 'Raleway-SemiBold',
    color: '#172331',
  },
  button: {
    backgroundColor: '#4464D9',
    width: '100%',
    height: responsiveScreenHeight(6),
    color: '#fff',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    fontFamily: 'PlusJakartaSans-ExtraBold',
    marginTop: responsiveScreenHeight(10),
  },
  colorWhite: {
    fontFamily: 'PlusJakartaSans-ExtraBold',
    color: '#fff',
    textAlign: 'center',
  },
  inputSelect: {
    fontFamily: 'Raleway-Medium',
    backgroundColor: '#fff',
    borderColor: '#EBEBEB',
    borderWidth: 1,
    paddingHorizontal: 4,
    marginBottom: responsiveScreenHeight(1.5),
    borderRadius: 8,
    height: responsiveScreenHeight(5.5),
    color: '#172331',
    alignContent: 'center',
    justifyContent: 'center',
  },
  radioButton: {
    height: 25,
    width: 25,
    backgroundColor: '#F8F8F8',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#4464D9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonIcon2: {
    height: 25,
    width: 25,
    backgroundColor: '#F8F8F8',
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: '#D9D9D9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonIcon: {
    height: 12,
    width: 12,
    borderRadius: 7,
    backgroundColor: '#4464D9',
  },
  radioButtonText: {
    fontSize: 16,
    marginLeft: 16,
    fontFamily: 'Raleway-SemiBold',
    color: '#D9D9D9',
  },
  radioButtonText2: {
    fontSize: 16,
    marginLeft: 16,
    fontFamily: 'Raleway-SemiBold',
    color: '#172331',
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
});

export default DoctorAccount;
