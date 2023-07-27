import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, FlatList, StyleSheet } from 'react-native';
import DatePicker from 'react-native-datepicker';
import axios from 'axios';
import { responsiveScreenHeight } from 'react-native-responsive-dimensions';

// const daysOfWeek = [
//   'Monday',
//   'Tuesday',
//   'Wednesday',
//   'Thursday',
//   'Friday',
//   'Saturday',
//   'Sunday',
// ];

// const AddAvailability = () => {
//   const [availabilityData, setAvailabilityData] = useState({
//     dr_id: 16,
//     detail: {
//       Monday: {},
//       Tuesday: {},
//       Wednesday: {},
//       Thursday: {},
//       Friday: {},
//       Saturday: {},
//       Sunday: {},
//     },
//     week_date: null,
//   });
//   const [selectedDay, setSelectedDay] = useState(daysOfWeek[new Date().getDay()]);
//   const [newSlotFrom, setNewSlotFrom] = useState('');
//   const [newSlotTo, setNewSlotTo] = useState('');

//   const formatDate = (date) => {
//     console.log(date)
//     const year = date.getFullYear();
//     console.log(year)
//     const month = date.getMonth() + 1;
//     const day = date.getDate();
//     const res = `${day < 10 ? '0' : ''}${day}-${month < 10 ? '0' : ''}${month}-${year}`;
//     console.log(res)
//     return res
//   };

//   const calculateWeekDates = (selectedDate) => {
//     console.log(selectedDate)
//     const startOfWeek = new Date(selectedDate);
//     startOfWeek.setDate(selectedDate.getDate() - selectedDate.getDay()); // Get the starting date of the week (Sunday)
//     const endOfWeek = new Date(selectedDate);
//     endOfWeek.setDate(selectedDate.getDate() + (6 - selectedDate.getDay())); // Get the ending date of the week (Saturday)

//     // Update the availabilityData with the calculated week start and end dates
//     setAvailabilityData({
//       ...availabilityData,
//       week_date: formatDate(selectedDate),
//     });

//     // Update the selected day based on the selected date
//     setSelectedDay(daysOfWeek[selectedDate.getDay()]);
//   };

//   const addNewSlot = () => {
//     // Validate inputs
//     if (newSlotFrom.trim() === '' || newSlotTo.trim() === '') {
//       // Show an error message or alert
//       return;
//     }

//     const updatedAvailabilityData = { ...availabilityData };

//     if (!updatedAvailabilityData.detail[selectedDay]) {
//       updatedAvailabilityData.detail[selectedDay] = {};
//     }

//     const slotCount = Object.keys(updatedAvailabilityData.detail[selectedDay]).length;
//     updatedAvailabilityData.detail[selectedDay][slotCount] = {
//       from: newSlotFrom,
//       to: newSlotTo,
//     };

//     setAvailabilityData(updatedAvailabilityData);

//     // Clear the inputs after adding the slot
//     setNewSlotFrom('');
//     setNewSlotTo('');
//   };

//   const updateSelectedDay = (day) => {
//     // Validate if the provided day is a valid day of the week
//     if (daysOfWeek.includes(day)) {
//       setSelectedDay(day);
//     }
//   };

//   const submitAvailabilityData = () => {
//     // Send availabilityData to the API
//     axios.post('https://customdemowebsites.com/dbapi/availability', availabilityData)
//       .then((response) => {
//         // Handle successful API response
//         console.log('Data successfully saved:', response.data);
//       })
//       .catch((error) => {
//         // Handle error
//         console.error('Error saving data:', error);
//       });
//   };

//   const renderSlotItem = ({ item }) => (
//     <TouchableOpacity
//       onPress={() => {}}
//       style={{ padding: 10, backgroundColor: '#5cb85c' }}
//     >
//       <Text style={{ color: 'white' }}>
//         {selectedDay} - {item.from} to {item.to}
//       </Text>
//     </TouchableOpacity>
//   );
//   console.log(availabilityData.week_date)
//   console.log(selectedDay)

//   return (
//     <View style={styles.container}>
//       <Text>Add Availability</Text>
//       <View style={styles.datePickerContainer}>
//         <DatePicker
//           style={styles.datePicker}
//           date={availabilityData.week_date}
//           mode="date"
//           placeholder="Select week date"
//           format="DD-MM-YYYY"
//           confirmBtnText="Confirm"
//           cancelBtnText="Cancel"
//           onDateChange={(date) => {
//             console.log(date)
//             const selectedDate = new Date(date);
//             calculateWeekDates(selectedDate);
//           }}
//         />
//       </View>
//       {availabilityData.week_date && (
//         <>
//           <Text>Selected Week Date: {availabilityData.week_date}</Text>
//           <View style={styles.my4}>
//             <TextInput
//               placeholder="Enter day of the week (e.g., Monday)"
//               value={selectedDay}
//               onChangeText={updateSelectedDay}
//             />
//             <FlatList
//               data={Object.values(availabilityData.detail[selectedDay])}
//               renderItem={renderSlotItem}
//               keyExtractor={(slot, index) => index.toString()}
//             />
//           </View>
//           <View style={styles.timeSlotsContainer}>
//             <TextInput
//               placeholder="From"
//               value={newSlotFrom}
//               onChangeText={(text) => setNewSlotFrom(text)}
//               style={styles.timeSlotInput}
//             />
//             <TextInput
//               placeholder="To"
//               value={newSlotTo}
//               onChangeText={(text) => setNewSlotTo(text)}
//               style={styles.timeSlotInput}
//             />
//             <TouchableOpacity onPress={addNewSlot} style={styles.addButton}>
//               <Text style={styles.addButtonLabel}>Add Slot</Text>
//             </TouchableOpacity>
//           </View>
//         </>
//       )}
//       <TouchableOpacity onPress={submitAvailabilityData} style={styles.submitButton}>
//         <Text style={styles.submitButtonLabel}>Submit Availability</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default AddAvailability;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: responsiveScreenHeight(6),
  },
  datePickerContainer: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 10,
  },
//   datePicker: {
//     width: '100%',
//   },
  my4: {
    paddingVertical: responsiveScreenHeight(1.5),
    borderBottomColor: '#F5F5F5',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  timeSlotsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  timeSlotInput: {
    flex: 1,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 5,
  },
  addButton: {
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 8,
  },
  addButtonLabel: {
    color: 'white',
  },
  submitButton: {
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
  },
  submitButtonLabel: {
    color: 'white',
  },
});



// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, TextInput, FlatList } from 'react-native';
// import DatePicker from 'react-native-datepicker';
// import axios from 'axios';

const daysOfWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const AddAvailibility = () => {
    const [availabilityData, setAvailabilityData] = useState({
        dr_id: 16,
        detail: {
          Monday: {},
          Tuesday: {},
          Wednesday: {},
          Thursday: {},
          Friday: {},
          Saturday: {},
          Sunday: {},
        },
        week_date: null,
      });
      const [selectedDay, setSelectedDay] = useState(daysOfWeek[new Date().getDay()]);
      const [newSlotFrom, setNewSlotFrom] = useState('');
      const [newSlotTo, setNewSlotTo] = useState('');
      const formatDateDDMMYYYY = (date) => {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day < 10 ? '0' : ''}${day}-${month < 10 ? '0' : ''}${month}-${year}`;
      };
      const calculateWeekDates = (selectedDate) => {
        const startOfWeek = new Date(selectedDate);
        startOfWeek.setDate(selectedDate.getDate() - selectedDate.getDay()); // Get the starting date of the week (Sunday)
        const endOfWeek = new Date(selectedDate);
        endOfWeek.setDate(selectedDate.getDate() + (6 - selectedDate.getDay())); // Get the ending date of the week (Saturday)
      
        // Update the availabilityData with the calculated week start and end dates
        setAvailabilityData({
          ...availabilityData,
          week_date: formatDateDDMMYYYY(startOfWeek),
        });
      
        // Update the selected day based on the selected date
        setSelectedDay(daysOfWeek[selectedDate.getDay()]);
      };
    
      const addNewSlot = () => {
        // Validate inputs
        if (newSlotFrom.trim() === '' || newSlotTo.trim() === '') {
          // Show an error message or alert
          return;
        }
    
        const updatedAvailabilityData = { ...availabilityData };
    
        if (!updatedAvailabilityData.detail[selectedDay]) {
          updatedAvailabilityData.detail[selectedDay] = {};
        }
    
        const slotCount = Object.keys(updatedAvailabilityData.detail[selectedDay]).length;
        updatedAvailabilityData.detail[selectedDay][slotCount] = {
          from: newSlotFrom,
          to: newSlotTo,
        };
    
        setAvailabilityData(updatedAvailabilityData);
    
        // Clear the inputs after adding the slot
        setNewSlotFrom('');
        setNewSlotTo('');
      };
    
      const updateSelectedDay = (day) => {
        // Validate if the provided day is a valid day of the week
        if (daysOfWeek.includes(day)) {
          setSelectedDay(day);
        }
      };
    
      const submitAvailabilityData = () => {
        // Send availabilityData to the API
        axios
          .post('https://customdemowebsites.com/dbapi/availability/add', availabilityData)
          .then((response) => {
            // Handle successful API response
            console.log('Data successfully saved:', response.data);
          })
          .catch((error) => {
            // Handle error
            console.error('Error saving data:', error);
          });
      };
    
      const renderSlotItem = ({ item }) => (
        <TouchableOpacity
          onPress={() => {}}
          style={{ padding: 10, backgroundColor: '#5cb85c' }}
        >
          <Text style={{ color: 'white' }}>
            {selectedDay} - {item.from} to {item.to}
          </Text>
        </TouchableOpacity>
      );
    
    
  console.log(availabilityData)

  return (
    <View style={styles.container}>
      <Text>Doctor Availability Screen</Text>
      <DatePicker
        style={{ width: "100%", borderColor: 'gray', borderWidth: 1 }}
        date={availabilityData.week_date}
        mode="date"
        placeholder="Select week date"
        format="YYYY-MM-DD" // Use ISO format for correct parsing
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        onDateChange={(date) => {
          const selectedDate = new Date(date);
          calculateWeekDates(selectedDate);
        }}
      />
      {availabilityData.week_date && (
        <>
          <Text>Selected Week Date: {availabilityData.week_date}</Text>
          <View style={{ flexDirection: 'column', gap: 30, alignItems: 'center' }}>
            <TextInput
              placeholder="Enter day of the week (e.g., Monday)"
              value={selectedDay}
              onChangeText={updateSelectedDay}
              style={{
                flex: 1,
                padding: 10,
                borderColor: 'gray',
                borderWidth: 1,
                marginRight: 10,
              }}
            />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TextInput
                placeholder="From"
                value={newSlotFrom}
                onChangeText={(text) => setNewSlotFrom(text)}
                style={{
                  padding: 10,
                  borderColor: 'gray',
                  borderWidth: 1,
                  marginRight: 10,
                }}
              />
              <TextInput
                placeholder="To"
                value={newSlotTo}
                onChangeText={(text) => setNewSlotTo(text)}
                style={{
                  padding: 10,
                  borderColor: 'gray',
                  borderWidth: 1,
                  marginRight: 10,
                }}
              />
              <TouchableOpacity
                onPress={addNewSlot}
                style={{ padding: 10, backgroundColor: '#007bff' }}
              >
                <Text style={{ color: 'white' }}>Add Slot</Text>
              </TouchableOpacity>
            </View>
          </View>
          {availabilityData.detail[selectedDay] && (
            <FlatList
              data={Object.values(availabilityData.detail[selectedDay])}
              renderItem={renderSlotItem}
              keyExtractor={(item, index) => index.toString()}
            />
          )}
        </>
      )}
      <TouchableOpacity
        onPress={submitAvailabilityData}
        style={{ padding: 10, backgroundColor: '#007bff', marginTop: 10 }}
      >
        <Text style={{ color: 'white' }}>Submit Availability</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddAvailibility;