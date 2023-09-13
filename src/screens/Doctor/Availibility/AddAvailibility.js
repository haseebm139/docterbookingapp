// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, TextInput, FlatList, StyleSheet } from 'react-native';
// import DatePicker from 'react-native-datepicker';
// import axios from 'axios';
// import { responsiveScreenHeight } from 'react-native-responsive-dimensions';

// // const daysOfWeek = [
// //   'Monday',
// //   'Tuesday',
// //   'Wednesday',
// //   'Thursday',
// //   'Friday',
// //   'Saturday',
// //   'Sunday',
// // ];

// // const AddAvailability = () => {
// //   const [availabilityData, setAvailabilityData] = useState({
// //     dr_id: 16,
// //     detail: {
// //       Monday: {},
// //       Tuesday: {},
// //       Wednesday: {},
// //       Thursday: {},
// //       Friday: {},
// //       Saturday: {},
// //       Sunday: {},
// //     },
// //     week_date: null,
// //   });
// //   const [selectedDay, setSelectedDay] = useState(daysOfWeek[new Date().getDay()]);
// //   const [newSlotFrom, setNewSlotFrom] = useState('');
// //   const [newSlotTo, setNewSlotTo] = useState('');

// //   const formatDate = (date) => {
// //     console.log(date)
// //     const year = date.getFullYear();
// //     console.log(year)
// //     const month = date.getMonth() + 1;
// //     const day = date.getDate();
// //     const res = `${day < 10 ? '0' : ''}${day}-${month < 10 ? '0' : ''}${month}-${year}`;
// //     console.log(res)
// //     return res
// //   };

// //   const calculateWeekDates = (selectedDate) => {
// //     console.log(selectedDate)
// //     const startOfWeek = new Date(selectedDate);
// //     startOfWeek.setDate(selectedDate.getDate() - selectedDate.getDay()); // Get the starting date of the week (Sunday)
// //     const endOfWeek = new Date(selectedDate);
// //     endOfWeek.setDate(selectedDate.getDate() + (6 - selectedDate.getDay())); // Get the ending date of the week (Saturday)

// //     // Update the availabilityData with the calculated week start and end dates
// //     setAvailabilityData({
// //       ...availabilityData,
// //       week_date: formatDate(selectedDate),
// //     });

// //     // Update the selected day based on the selected date
// //     setSelectedDay(daysOfWeek[selectedDate.getDay()]);
// //   };

// //   const addNewSlot = () => {
// //     // Validate inputs
// //     if (newSlotFrom.trim() === '' || newSlotTo.trim() === '') {
// //       // Show an error message or alert
// //       return;
// //     }

// //     const updatedAvailabilityData = { ...availabilityData };

// //     if (!updatedAvailabilityData.detail[selectedDay]) {
// //       updatedAvailabilityData.detail[selectedDay] = {};
// //     }

// //     const slotCount = Object.keys(updatedAvailabilityData.detail[selectedDay]).length;
// //     updatedAvailabilityData.detail[selectedDay][slotCount] = {
// //       from: newSlotFrom,
// //       to: newSlotTo,
// //     };

// //     setAvailabilityData(updatedAvailabilityData);

// //     // Clear the inputs after adding the slot
// //     setNewSlotFrom('');
// //     setNewSlotTo('');
// //   };

// //   const updateSelectedDay = (day) => {
// //     // Validate if the provided day is a valid day of the week
// //     if (daysOfWeek.includes(day)) {
// //       setSelectedDay(day);
// //     }
// //   };

// //   const submitAvailabilityData = () => {
// //     // Send availabilityData to the API
// //     axios.post('https://customdemowebsites.com/dbapi/availability', availabilityData)
// //       .then((response) => {
// //         // Handle successful API response
// //         console.log('Data successfully saved:', response.data);
// //       })
// //       .catch((error) => {
// //         // Handle error
// //         console.error('Error saving data:', error);
// //       });
// //   };

// //   const renderSlotItem = ({ item }) => (
// //     <TouchableOpacity
// //       onPress={() => {}}
// //       style={{ padding: 10, backgroundColor: '#5cb85c' }}
// //     >
// //       <Text style={{ color: 'white' }}>
// //         {selectedDay} - {item.from} to {item.to}
// //       </Text>
// //     </TouchableOpacity>
// //   );
// //   console.log(availabilityData.week_date)
// //   console.log(selectedDay)

// //   return (
// //     <View style={styles.container}>
// //       <Text>Add Availability</Text>
// //       <View style={styles.datePickerContainer}>
// //         <DatePicker
// //           style={styles.datePicker}
// //           date={availabilityData.week_date}
// //           mode="date"
// //           placeholder="Select week date"
// //           format="DD-MM-YYYY"
// //           confirmBtnText="Confirm"
// //           cancelBtnText="Cancel"
// //           onDateChange={(date) => {
// //             console.log(date)
// //             const selectedDate = new Date(date);
// //             calculateWeekDates(selectedDate);
// //           }}
// //         />
// //       </View>
// //       {availabilityData.week_date && (
// //         <>
// //           <Text>Selected Week Date: {availabilityData.week_date}</Text>
// //           <View style={styles.my4}>
// //             <TextInput
// //               placeholder="Enter day of the week (e.g., Monday)"
// //               value={selectedDay}
// //               onChangeText={updateSelectedDay}
// //             />
// //             <FlatList
// //               data={Object.values(availabilityData.detail[selectedDay])}
// //               renderItem={renderSlotItem}
// //               keyExtractor={(slot, index) => index.toString()}
// //             />
// //           </View>
// //           <View style={styles.timeSlotsContainer}>
// //             <TextInput
// //               placeholder="From"
// //               value={newSlotFrom}
// //               onChangeText={(text) => setNewSlotFrom(text)}
// //               style={styles.timeSlotInput}
// //             />
// //             <TextInput
// //               placeholder="To"
// //               value={newSlotTo}
// //               onChangeText={(text) => setNewSlotTo(text)}
// //               style={styles.timeSlotInput}
// //             />
// //             <TouchableOpacity onPress={addNewSlot} style={styles.addButton}>
// //               <Text style={styles.addButtonLabel}>Add Slot</Text>
// //             </TouchableOpacity>
// //           </View>
// //         </>
// //       )}
// //       <TouchableOpacity onPress={submitAvailabilityData} style={styles.submitButton}>
// //         <Text style={styles.submitButtonLabel}>Submit Availability</Text>
// //       </TouchableOpacity>
// //     </View>
// //   );
// // };

// // export default AddAvailability;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 20,
//     paddingTop: responsiveScreenHeight(6),
//   },
//   datePickerContainer: {
//     borderColor: 'gray',
//     borderWidth: 1,
//     borderRadius: 8,
//     overflow: 'hidden',
//     marginBottom: 10,
//   },
// //   datePicker: {
// //     width: '100%',
// //   },
//   my4: {
//     paddingVertical: responsiveScreenHeight(1.5),
//     borderBottomColor: '#F5F5F5',
//     borderBottomWidth: 1,
//     marginBottom: 10,
//   },
//   timeSlotsContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   timeSlotInput: {
//     flex: 1,
//     padding: 10,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginRight: 5,
//   },
//   addButton: {
//     padding: 10,
//     backgroundColor: '#007bff',
//     borderRadius: 8,
//   },
//   addButtonLabel: {
//     color: 'white',
//   },
//   submitButton: {
//     padding: 10,
//     backgroundColor: '#007bff',
//     borderRadius: 8,
//     marginTop: 10,
//     alignItems: 'center',
//   },
//   submitButtonLabel: {
//     color: 'white',
//   },
// });



// // import React, { useState } from 'react';
// // import { View, Text, TouchableOpacity, TextInput, FlatList } from 'react-native';
// // import DatePicker from 'react-native-datepicker';
// // import axios from 'axios';

// // const daysOfWeek = [
// //   'Monday',
// //   'Tuesday',
// //   'Wednesday',
// //   'Thursday',
// //   'Friday',
// //   'Saturday',
// //   'Sunday',
// // ];

// // const AddAvailibility = () => {
// //     const [availabilityData, setAvailabilityData] = useState({
// //         dr_id: 16,
// //         detail: {
// //           Monday: {},
// //           Tuesday: {},
// //           Wednesday: {},
// //           Thursday: {},
// //           Friday: {},
// //           Saturday: {},
// //           Sunday: {},
// //         },
// //         week_date: null,
// //       });
// //       const [selectedDay, setSelectedDay] = useState(daysOfWeek[new Date().getDay()]);
// //       const [newSlotFrom, setNewSlotFrom] = useState('');
// //       const [newSlotTo, setNewSlotTo] = useState('');
// //       const formatDateDDMMYYYY = (date) => {
// //         const day = date.getDate();
// //         const month = date.getMonth() + 1;
// //         const year = date.getFullYear();
// //         return `${day < 10 ? '0' : ''}${day}-${month < 10 ? '0' : ''}${month}-${year}`;
// //       };
// //       const calculateWeekDates = (selectedDate) => {
// //         const startOfWeek = new Date(selectedDate);
// //         startOfWeek.setDate(selectedDate.getDate() - selectedDate.getDay()); // Get the starting date of the week (Sunday)
// //         const endOfWeek = new Date(selectedDate);
// //         endOfWeek.setDate(selectedDate.getDate() + (6 - selectedDate.getDay())); // Get the ending date of the week (Saturday)
      
// //         // Update the availabilityData with the calculated week start and end dates
// //         setAvailabilityData({
// //           ...availabilityData,
// //           week_date: formatDateDDMMYYYY(startOfWeek),
// //         });
      
// //         // Update the selected day based on the selected date
// //         setSelectedDay(daysOfWeek[selectedDate.getDay()]);
// //       };
    
// //       const addNewSlot = () => {
// //         // Validate inputs
// //         if (newSlotFrom.trim() === '' || newSlotTo.trim() === '') {
// //           // Show an error message or alert
// //           return;
// //         }
    
// //         const updatedAvailabilityData = { ...availabilityData };
    
// //         if (!updatedAvailabilityData.detail[selectedDay]) {
// //           updatedAvailabilityData.detail[selectedDay] = {};
// //         }
    
// //         const slotCount = Object.keys(updatedAvailabilityData.detail[selectedDay]).length;
// //         updatedAvailabilityData.detail[selectedDay][slotCount] = {
// //           from: newSlotFrom,
// //           to: newSlotTo,
// //         };
    
// //         setAvailabilityData(updatedAvailabilityData);
    
// //         // Clear the inputs after adding the slot
// //         setNewSlotFrom('');
// //         setNewSlotTo('');
// //       };
    
// //       const updateSelectedDay = (day) => {
// //         // Validate if the provided day is a valid day of the week
// //         if (daysOfWeek.includes(day)) {
// //           setSelectedDay(day);
// //         }
// //       };
    
// //       const submitAvailabilityData = () => {
// //         // Send availabilityData to the API
// //         axios
// //           .post('https://customdemowebsites.com/dbapi/availability/add', availabilityData)
// //           .then((response) => {
// //             // Handle successful API response
// //             console.log('Data successfully saved:', response.data);
// //           })
// //           .catch((error) => {
// //             // Handle error
// //             console.error('Error saving data:', error);
// //           });
// //       };
    
// //       const renderSlotItem = ({ item }) => (
// //         <TouchableOpacity
// //           onPress={() => {}}
// //           style={{ padding: 10, backgroundColor: '#5cb85c' }}
// //         >
// //           <Text style={{ color: 'white' }}>
// //             {selectedDay} - {item.from} to {item.to}
// //           </Text>
// //         </TouchableOpacity>
// //       );
    
    
// //   console.log(availabilityData)

// //   return (
// //     <View style={styles.container}>
// //       <Text>Doctor Availability Screen</Text>
// //       <DatePicker
// //         style={{ width: "100%", borderColor: 'gray', borderWidth: 1 }}
// //         date={availabilityData.week_date}
// //         mode="date"
// //         placeholder="Select week date"
// //         format="YYYY-MM-DD" // Use ISO format for correct parsing
// //         confirmBtnText="Confirm"
// //         cancelBtnText="Cancel"
// //         onDateChange={(date) => {
// //           const selectedDate = new Date(date);
// //           calculateWeekDates(selectedDate);
// //         }}
// //       />
// //       {availabilityData.week_date && (
// //         <>
// //           <Text>Selected Week Date: {availabilityData.week_date}</Text>
// //           <View style={{ flexDirection: 'column', gap: 30, alignItems: 'center' }}>
// //             <TextInput
// //               placeholder="Enter day of the week (e.g., Monday)"
// //               value={selectedDay}
// //               onChangeText={updateSelectedDay}
// //               style={{
// //                 flex: 1,
// //                 padding: 10,
// //                 borderColor: 'gray',
// //                 borderWidth: 1,
// //                 marginRight: 10,
// //               }}
// //             />
// //             <View style={{ flexDirection: 'row', alignItems: 'center' }}>
// //               <TextInput
// //                 placeholder="From"
// //                 value={newSlotFrom}
// //                 onChangeText={(text) => setNewSlotFrom(text)}
// //                 style={{
// //                   padding: 10,
// //                   borderColor: 'gray',
// //                   borderWidth: 1,
// //                   marginRight: 10,
// //                 }}
// //               />
// //               <TextInput
// //                 placeholder="To"
// //                 value={newSlotTo}
// //                 onChangeText={(text) => setNewSlotTo(text)}
// //                 style={{
// //                   padding: 10,
// //                   borderColor: 'gray',
// //                   borderWidth: 1,
// //                   marginRight: 10,
// //                 }}
// //               />
// //               <TouchableOpacity
// //                 onPress={addNewSlot}
// //                 style={{ padding: 10, backgroundColor: '#007bff' }}
// //               >
// //                 <Text style={{ color: 'white' }}>Add Slot</Text>
// //               </TouchableOpacity>
// //             </View>
// //           </View>
// //           {availabilityData.detail[selectedDay] && (
// //             <FlatList
// //               data={Object.values(availabilityData.detail[selectedDay])}
// //               renderItem={renderSlotItem}
// //               keyExtractor={(item, index) => index.toString()}
// //             />
// //           )}
// //         </>
// //       )}
// //       <TouchableOpacity
// //         onPress={submitAvailabilityData}
// //         style={{ padding: 10, backgroundColor: '#007bff', marginTop: 10 }}
// //       >
// //         <Text style={{ color: 'white' }}>Submit Availability</Text>
// //       </TouchableOpacity>
// //     </View>
// //   );
// // };


// export default AddAvailibility;


import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import BackBtn from '../../../assets/assets/icon-button.svg';
import Calender from '../../../assets/assets/calendar_today.svg';
import Header from '../../../components/Header';
import { responsiveScreenHeight, responsiveScreenWidth, responsiveScreenFontSize } from 'react-native-responsive-dimensions';
import { Divider, TextInput } from 'react-native-paper';
import { CheckBox } from 'react-native-elements';
import CustomButtom from '../../../components/Button';
import MyStatusBar from '../../../components/Statusbar';
import { useNavigation } from '@react-navigation/native';
import DatePicker from 'react-native-datepicker';
import axios from 'axios';
import { useSelector } from 'react-redux';
// import { TouchableOpacity } from 'react-native-gesture-handler';


const AddAvailability = () => {
  const [availabilityData, setAvailabilityData] = useState({});
  const [selectedWeek, setSelectedWeek] = useState('');
  const user = useSelector(state => state.doctorAccount)
  console.log(user.id)
  const Navigation = useNavigation();

  // Mock API response, replace this with the actual API call to fetch availability data
  useEffect(() => {
    // Replace this with your API call to fetch availability data for the doctor
    const availabilityApiResponse = {
      // Data here...
    };

    // Initialize availabilityData with all weekdays
    const initialAvailabilityData = {
      Monday: { status: false, timings: [] },
      Tuesday: { status: false, timings: [] },
      Wednesday: { status: false, timings: [] },
      Thursday: { status: false, timings: [] },
      Friday: { status: false, timings: [] },
      Saturday: { status: false, timings: [] },
      Sunday: { status: false, timings: [] },
    };

    // Merge the fetched data with the initial data (if available)
    const mergedData = {
      ...initialAvailabilityData,
      ...availabilityApiResponse.detail,
    };

    setAvailabilityData(mergedData);
    setSelectedWeek(availabilityApiResponse.week_date);
  }, []);
  const handleSaveAvailability = () => {
    // Create an object to store availability data for each day
    const availabilityDataToSend = {};
  
    // Loop through the availabilityData object and extract "from" and "to" values for each day
    Object.entries(availabilityData).forEach(([day, data]) => {
      if (data.timings && data.timings.length > 0) {
        // Extract "from" and "to" values from timings array
        const timingsToSend = {};
        data.timings.forEach((timing, index) => {
          timingsToSend[index] = {
            from: timing.from,
            to: timing.to,
          };
        });
  
        // Update the data for each day in the object
        availabilityDataToSend[day] = timingsToSend;
      }
    });
    console.log(availabilityDataToSend);
  
    // Example data to be sent to the server
    const data = {
      dr_id: user.id,
      detail: availabilityDataToSend,
      week_date: selectedWeek,
    };
  
    // Send the POST request to save the availability data
    axios
      .post('https://customdemowebsites.com/dbapi/availability/add', data)
      .then((response) => {
        // Handle the response from the server if needed
        console.log('Availability data saved successfully:', response.data);
      })
      .catch((error) => {
        // Handle errors if any
        console.error('Error saving availability data:', error);
      });
  };
  const handleCheck = (day) => {
    setAvailabilityData((prevData) => {
      const updatedData = { ...prevData };
      if (updatedData[day].status) {
        updatedData[day].timings = [];
      } else {
        updatedData[day].timings = [{ from: '', to: '' }];
      }
      updatedData[day].status = !prevData[day].status;
      return updatedData;
    });
  };

  const handleAddTiming = (day) => {
    setAvailabilityData((prevData) => {
      const updatedData = { ...prevData };
      updatedData[day].timings.push({ from: '', to: '' });
      return updatedData;
    });
  };

  const handleRemoveTiming = (day, index) => {
    setAvailabilityData((prevData) => {
      const updatedData = { ...prevData };
      updatedData[day].timings.splice(index, 1);
      return updatedData;
    });
  };

  const handleTimingChange = (day, index, field, value) => {
    setAvailabilityData((prevData) => {
      const updatedData = { ...prevData };
      updatedData[day].timings[index][field] = value;
      return updatedData;
    });
  };
  console.log(selectedWeek)
 

  console.log(availabilityData)

  return (
    <View style={styles.container}>
    <MyStatusBar backgroundColor="transparent" />
    <View style={{ flexDirection: "row" }}>
      <Header
        image={<BackBtn />}
        handlePress={() => Navigation.goBack()}
      />
      <View style={{ textAlign: "center", alignSelf: "center", margin: "auto" }}>
        <Text style={styles.h1}>My Availability</Text>
      </View>
    </View>

    <ScrollView>
      <View style={styles.my}>
        <Text style={styles.header}>Update your preferred working week days and time</Text>
      </View>
      <View style={styles.my4}>
        <DatePicker
          style={styles.datePicker}
          date={selectedWeek}
          mode="date"
          placeholder="Select Week"
          format="DD-MM-YYYY"
          minDate="01-01-2020"
          maxDate="31-12-2030"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateInput: {
              borderWidth: 0,
              alignItems: 'flex-start',
            },
            dateText: {
              fontSize: 16,
              color: '#172331',
              fontFamily: 'Raleway-Medium',
            },
          }}
          onDateChange={(date) => setSelectedWeek(date)}
        />
        <Calender style={{ position: "absolute", right: 10, top: 32 }} />
      </View>

      {Object.entries(availabilityData).map(([day, data]) => (
        <View key={day}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5, justifyContent: 'flex-start' }}>
            <CheckBox
              checked={data.status === true}
              onPress={() => handleCheck(day)}
              checkedColor="#4464D9"
              iconType="material-community"
              uncheckedIcon="checkbox-blank-outline"
              checkedIcon="checkbox-marked"
              containerStyle={{ marginLeft: 0, paddingLeft: 0 }}
            />
            <Text style={styles.checkboxLabel}>{day}</Text>
          </View>
          {data.status === false && <Text style={styles.unavailable}>Unavailable</Text>}
          {data.status === true && data.timings && (
            <View>
              {data.timings.map((timing, index) => (
                <View key={index} style={styles.timingContainer}>
                  <TextInput
                    mode="outlined"
                    label="From"
                    placeholder="09:00am"
                    value={timing.from}
                    onChangeText={(text) => handleTimingChange(day, index, 'from', text)}
                    theme={{
                      roundness: 12,
                      colors: {
                        primary: "#D8D5D3",
                        underlineColor: "#D9D5D3",
                        background: "#fff"
                      }
                    }}
                  />
                  <TextInput
                    mode="outlined"
                    label="To"
                    placeholder="05:00pm"
                    value={timing.to}
                    onChangeText={(text) => handleTimingChange(day, index, 'to', text)}
                    theme={{
                      roundness: 12,
                      colors: {
                        primary: "#D8D5D3",
                        underlineColor: "#D9D5D3",
                        background: "#fff"
                      }
                    }}
                  />
                  {index === data.timings.length - 1 && (
                    <CustomButtom text="+" onPress={() => handleAddTiming(day)} />
                  )}
                  {index !== data.timings.length - 1 && (
                    <CustomButtom text="-" onPress={() => handleRemoveTiming(day, index)} />
                  )}
                </View>
              ))}
            </View>
          )}
          <Divider style={{ marginTop: 10 }} />
        </View>
      ))}
    </ScrollView>

    <View
      onPress={handleSaveAvailability}
      style={{
        position: "absolute",
        width: '100%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        bottom: 0,
      }}
    >
      {/* <CustomButtom
        text="Save"
        onPress={handleSaveAvailability}
        style={{
          marginBottom: responsiveScreenHeight(3),
          marginTop: responsiveScreenHeight(1),
          width: responsiveScreenWidth(90),
        }}
      /> */}
      <TouchableOpacity
      onPress={handleSaveAvailability}
       style={{
          marginBottom: responsiveScreenHeight(3),
          marginTop: responsiveScreenHeight(1),
          width: responsiveScreenWidth(90),
          padding: 15, backgroundColor: '#007bff',
          alignItems:'center',borderRadius: 28
        }}>
        <Text style={{color: "#fff"}}>Save</Text>
      </TouchableOpacity>
    </View>
  </View>
);
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: responsiveScreenHeight(5)
  },
  h1: {
    fontFamily: "Raleway-SemiBold",
    fontSize: 20,
    color: "#172331",
    marginHorizontal: responsiveScreenWidth(15)
  },
  my: {
    marginTop: responsiveScreenHeight(3)
  },
  my4: {
    paddingVertical: responsiveScreenHeight(1.5),
    borderBottomColor: "#F5F5F5",
    borderBottomWidth: 1,
  },
  header: {
    fontFamily: "Raleway-Regular",
    fontSize: 12,
    color: "#172331"
  },
  checkboxLabel: {
    color: "#172331",
    fontFamily: "Raleway-SemiBold",
    fontSize: 16
  },
  unavailable: {
    fontFamily: "Raleway-Regular",
    fontSize: 14,
    color: "#172331",
    marginTop: responsiveScreenHeight(1.5),
    lineHeight: 20
  },
  timingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: responsiveScreenHeight(1.5),
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  timingcard: {
    borderColor: "#D8D5D3",
    borderWidth: 1,
    borderRadius: 8,
    width: responsiveScreenWidth(20),
    height: responsiveScreenHeight(5),
    alignItems: "center",
    justifyContent: "center"
  },
  timingcardTxt: {
    fontFamily: "Raleway-Medium",
    fontSize: 10,
    color: "#172331"
  },
});
export default AddAvailability