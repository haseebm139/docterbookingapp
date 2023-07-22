import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  responsiveScreenWidth,
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';
import Quotation from '../assets/assets/qotation.svg';
import Verified from '../assets/assets/doctorverified.svg';
import Poplular from '../assets/assets/popdoc.svg';
import Poplular2 from '../assets/assets/popdoc2.svg';
import Reviewer from '../assets/assets/reviewer.svg';
import {Avatar} from 'react-native-paper';
import Swiper from 'react-native-swiper';
import DoctorReviews from '../components/doctor/HomepageReviews';
import {Dropdown} from 'react-native-element-dropdown';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleIndexChanged = index => {
    setCurrentIndex(index);
  };
  const user = useSelector(state => state.customerAccount)
  console.log(user)
  const navigation = useNavigation();
  const data = [
    {
      id: '1',
      name: 'Physiotherapy',
      image: require('../assets/assets/cat1.png'),
    },
    {id: '2', name: 'Dietician', image: require('../assets/assets/cat2.png')},
    {
      id: '3',
      name: 'Mental Wellness',
      image: require('../assets/assets/cat3.png'),
    },
  ];
  const reciew = [
    {
      review: 'Heal Slot help my team wellness productivity.',
      reviewerName: 'Daniel Brown',
      reviewOccupation: 'CEO, Barone INC',
    },
    {
      review: 'Heal Slot help my team wellness productivity.',
      reviewerName: 'Daniel Brown',
      reviewOccupation: 'CEO, Barone INCssss',
    },
    {
      review: 'Heal Slot help my team wellness productivity.',
      reviewerName: 'Daniel Brown',
      reviewOccupation: 'CEO, Barone INC',
    },
  ];
  const dropdown = [
    {label: 'Item 1', value: '1'},
    {label: 'Item 2', value: '2'},
    {label: 'Item 3', value: '3'},
    {label: 'Item 4', value: '4'},
    {label: 'Item 5', value: '5'},
    {label: 'Item 6', value: '6'},
    {label: 'Item 7', value: '7'},
    {label: 'Item 8', value: '8'},
  ];
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const renderLabel = () => {
    if (value || isFocus) {
      return <Text style={[styles.label, isFocus && {color: 'blue'}]} />;
    }
    return null;
  };
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: responsiveScreenHeight(5),
      }}>
      <View style={styles.container}>
        <View style={{marginVertical: 20}}>
          <Text style={styles.title}>Hello {user.firstName}</Text>
          <View style={{ flexDirection: "row", justifyContent:"space-between", alignItems:"center" }}>
            <Text style={styles.heading}>Find your specialist</Text>
            <View >
            {/* {renderLabel()} */}
            <Dropdown
              style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={dropdown}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? 'Select item' : '...'}
              searchPlaceholder="Search..."
              value={value}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={item => {
                setValue(item.value);
                setIsFocus(false);
              }}
            />
          </View>
          </View>

         
        </View>
        <View style={{gap: 20, flexDirection: 'row'}}>
          {data.map(item => (
            <View key={item.id} style={styles.col3}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Specialist');
                }}>
                <View style={styles.card}>
                  <Image
                    style={{resizeMode: 'cover', width: '100%'}}
                    source={item.image}
                  />
                </View>
                <Text
                  style={{
                    marginTop: 10,
                    color: '#172331',
                    fontFamily: 'Raleway-Medium',
                    fontSize: 12,
                  }}>
                  {item.name}{' '}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <View>
          <Text style={styles.heading}>Popular Doctor</Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={false}>
            <View style={{flexDirection: 'row', gap: 20}}>
              <View style={styles.col4}>
                <View style={styles.horizontalCard}>
                  <Poplular2 />
                </View>
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 2,
                      marginVertical: 5,
                    }}>
                    <Text
                      style={{
                        color: '#172331',
                        fontFamily: 'Raleway-Regular',
                        fontWeight: 700,
                      }}>
                      Dr Rahul
                    </Text>
                    <Verified />
                  </View>
                  <Text
                    style={{
                      color: '#172331',
                      fontFamily: 'Raleway-Regular',
                      fontWeight: 500,
                      fontSize: 12,
                    }}>
                    Physiotherapist
                  </Text>
                  <Text
                    style={{
                      color: '#172331',
                      fontFamily: 'Raleway-Regular',
                      fontWeight: 500,
                      fontSize: 12,
                    }}>
                    8 yrs exp
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 10,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 2,
                        marginVertical: 8,
                      }}>
                      <Image source={require('../assets/assets/star.png')} />
                      <Text
                        style={{
                          color: '#172331',
                          fontFamily: 'Raleway-Regular',
                          fontWeight: 600,
                          fontSize: 12,
                        }}>
                        4.1
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 5,
                      }}>
                      <Image
                        source={require('../assets/assets/location.png')}
                      />
                      <Text
                        style={{
                          color: '#172331',
                          fontFamily: 'Raleway-Regular',
                          fontWeight: 500,
                          fontSize: 12,
                        }}>
                        Patparganj
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      borderColor: '#4464D9',
                      borderWidth: 1,
                      backgroundColor: '#fff',
                      borderRadius: 74,
                      width: 70,
                      height: 30,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        color: '#4464D9',
                        alignItems: 'center',
                        textAlign: 'center',
                        fontFamily: 'Raleway-SemiBold',
                        fontWeight: 600,
                      }}>
                      Book
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.col4}>
                <View style={styles.horizontalCard}>
                  <Poplular />
                </View>
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 2,
                      marginVertical: 5,
                    }}>
                    <Text
                      style={{
                        color: '#172331',
                        fontFamily: 'Raleway-Regular',
                        fontWeight: 700,
                      }}>
                      Dr Rahul
                    </Text>
                    <Verified />
                  </View>
                  <Text
                    style={{
                      color: '#172331',
                      fontFamily: 'Raleway-Regular',
                      fontWeight: 500,
                      fontSize: 12,
                    }}>
                    Physiotherapist
                  </Text>
                  <Text
                    style={{
                      color: '#172331',
                      fontFamily: 'Raleway-Regular',
                      fontWeight: 500,
                      fontSize: 12,
                    }}>
                    8 yrs exp
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 10,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 2,
                        marginVertical: 8,
                      }}>
                      <Image source={require('../assets/assets/star.png')} />
                      <Text
                        style={{
                          color: '#172331',
                          fontFamily: 'Raleway-Regular',
                          fontWeight: 600,
                          fontSize: 12,
                        }}>
                        4.1
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 5,
                      }}>
                      <Image
                        source={require('../assets/assets/location.png')}
                      />
                      <Text
                        style={{
                          color: '#172331',
                          fontFamily: 'Raleway-Regular',
                          fontWeight: 500,
                          fontSize: 12,
                        }}>
                        Patparganj
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      borderColor: '#4464D9',
                      borderWidth: 1,
                      backgroundColor: '#fff',
                      borderRadius: 74,
                      width: 70,
                      height: 30,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        color: '#4464D9',
                        alignItems: 'center',
                        textAlign: 'center',
                        fontFamily: 'Raleway-SemiBold',
                        fontWeight: 600,
                      }}>
                      Book
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.col4}>
                <View style={styles.horizontalCard}>
                  <Poplular2 />
                </View>
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 2,
                      marginVertical: 5,
                    }}>
                    <Text
                      style={{
                        color: '#172331',
                        fontFamily: 'Raleway-Regular',
                        fontWeight: 700,
                      }}>
                      Dr Rahul
                    </Text>
                    <Verified />
                  </View>
                  <Text
                    style={{
                      color: '#172331',
                      fontFamily: 'Raleway-Regular',
                      fontWeight: 500,
                      fontSize: 12,
                    }}>
                    Physiotherapist
                  </Text>
                  <Text
                    style={{
                      color: '#172331',
                      fontFamily: 'Raleway-Regular',
                      fontWeight: 500,
                      fontSize: 12,
                    }}>
                    8 yrs exp
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 10,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 2,
                        marginVertical: 8,
                      }}>
                      <Image source={require('../assets/assets/star.png')} />
                      <Text
                        style={{
                          color: '#172331',
                          fontFamily: 'Raleway-Regular',
                          fontWeight: 600,
                          fontSize: 12,
                        }}>
                        4.1
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 5,
                      }}>
                      <Image
                        source={require('../assets/assets/location.png')}
                      />
                      <Text
                        style={{
                          color: '#172331',
                          fontFamily: 'Raleway-Regular',
                          fontWeight: 500,
                          fontSize: 12,
                        }}>
                        Patparganj
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      borderColor: '#4464D9',
                      borderWidth: 1,
                      backgroundColor: '#fff',
                      borderRadius: 74,
                      width: 70,
                      height: 30,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        color: '#4464D9',
                        alignItems: 'center',
                        textAlign: 'center',
                        fontFamily: 'Raleway-SemiBold',
                        fontWeight: 600,
                      }}>
                      Book
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
          <View>
            {/* <Swiper
              loop={false}
              onIndexChanged={handleIndexChanged}
              showsPagination={false}
              dot={<View style={styles.dot} />}
              activeDot={<View style={styles.activeDot} />}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 30,
                  width: '100%',
                }}>
                <View style={{gap: 3, width: responsiveScreenWidth(50)}}>
                  <Quotation />
                  <Text style={styles.reviewer}>
                    Heal Slot help my team wellness productivity.
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Raleway-SemiBold',
                      fontSize: 12,
                      color: '#172331',
                    }}>
                    Daniel Brown
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Raleway-Medium',
                      fontSize: 10,
                      color: '#172331',
                    }}>
                    CEO, Barone INC
                  </Text>
                </View>
                <View>
                  <Reviewer />
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 30,
                  width: '100%',
                }}>
                <View style={{gap: 3, width: responsiveScreenWidth(50)}}>
                  <Quotation />
                  <Text style={styles.reviewer}>
                    Heal Slot help my team wellness productivity.
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Raleway-SemiBold',
                      fontSize: 12,
                      color: '#172331',
                    }}>
                    Daniel Brown
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Raleway-Medium',
                      fontSize: 10,
                      color: '#172331',
                    }}>
                    CEO, Barone INC
                  </Text>
                </View>
                <View>
                  <Avatar.Image size={62} />
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 30,
                  width: '100%',
                }}>
                <View style={{gap: 3, width: responsiveScreenWidth(50)}}>
                  <Quotation />
                  <Text style={styles.reviewer}>
                    Heal Slot help my team wellness productivity.
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Raleway-SemiBold',
                      fontSize: 12,
                      color: '#172331',
                    }}>
                    Daniel Brown
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Raleway-Medium',
                      fontSize: 10,
                      color: '#172331',
                    }}>
                    CEO, Barone INC
                  </Text>
                </View>
                <View>
                  <Avatar.Image size={62} />
                </View>
              </View>
            </Swiper>
            <View style={styles.dotsContainer}>
              <View
                style={[styles.dot, currentIndex === 0 && styles.activeDot]}
              />
              <View
                style={[styles.dot, currentIndex === 1 && styles.activeDot]}
              />
              <View
                style={[styles.dot, currentIndex === 2 && styles.activeDot]}
              />
            </View> */}
            <DoctorReviews />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 40,
    backgroundColor: '#fff',
  },
  title: {
    fontFamily: 'Raleway-medium',
    color: '#172331',
    fontSize: 14,
  },
  heading: {
    color: '#172331',
    fontFamily: 'Raleway-SemiBold',
    fontSize: 18,
    marginTop: 10,
  },
  card: {
    width: '100%',
    height: responsiveScreenHeight(14),
    borderRadius: 20,
    overflow: 'hidden',
  },
  horizontalCard: {
    height: responsiveScreenHeight(10),
    borderRadius: 12,
    marginTop: 10,
    overflow: 'hidden',
  },
  col4: {
    width: responsiveScreenWidth(30),
  },
  col3: {
    width: responsiveScreenWidth(27),
  },
  dotsContainer: {
    position: 'absolute',
    right: 0,
    bottom: 10,
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 30,
    marginBottom: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#BDBDBD',
    marginHorizontal: 5,
    opacity: 0.4,
  },
  activeDot: {
    backgroundColor: '#4464D9',
    opacity: 1,
  },
  reviewer: {
    fontFamily: 'Raleway-Medium',
    color: '#172331',
    fontSize: 16,
  },
  dropdown: {
    height: 30,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    wheight: 50,
    width: 150,
    marginTop: 10
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
