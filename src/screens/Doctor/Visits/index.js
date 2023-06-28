import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import ClockImg from '../../../assets/assets/pace.svg';
import PhoneIcon from '../../../assets/assets/phoneicon.svg';
import PencilIcon from '../../../assets/assets/border_color.svg';
import {Avatar, Divider} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Visits from '../../../components/doctor/Visits';
import MyStatusBar from '../../../components/Statusbar';
import { responsiveScreenHeight } from 'react-native-responsive-dimensions';

const TotalVisits = () => {
  const [status, setStatus] = useState('Upcoming');
  const [dataList, setDataList] = useState(data);

  const navigation = useNavigation()
  const ListTab = [
    {
      status: 'Upcoming',
    },
    {
      status: 'Past',
    },
  ];
  const data = [
    {
        id: 1,
      name: 'Dr. Neeraj Mehraniya',
      specialist: 'Physiotherapist',
      experience: '24 yrs exp',
      AppointmentDate: 'Fri, 20 Mar',
      AppointmentTime: ' 07:00 - 07:30 PM',
      status: 'Upcoming',
      statusCode: "Upcoming"
    },
    {
        id: 2,
      name: 'Dr. Neeraj Mehraniya',
      specialist: 'Physiotherapist',
      experience: '24 yrs exp',
      AppointmentDate: 'Fri, 20 Mar',
      AppointmentTime: ' 07:00 - 07:30 PM',
      status: 'Upcoming',
      statusCode: "Upcoming"
      
    },
    {
        id: 3,
      name: 'Dr. Neeraj Mehraniya',
      specialist: 'Physiotherapist',
      experience: '24 yrs exp',
      AppointmentDate: 'Fri, 20 Mar',
      AppointmentTime: ' 07:00 - 07:30 PM',
      status: 'Upcoming',
      statusCode: "Upcoming"
    },
    {
        id: 4,
      name: 'Dr. Neeraj Mehraniyaaaaaaaaaaaa',
      specialist: 'Physiotherapist',
      experience: '24 yrs exp',
      AppointmentDate: 'Fri, 20 Mar',
      AppointmentTime: ' 07:00 - 07:30 PM',
      status: 'Past',
      statusCode: "Past"
    },
  ];
  const setStatusFilter = status => {
     
    if(!status){
        setDataList(data)
    }
    else{
        
      setDataList([...data.filter(e=> e.status === status)])
    }
    setStatus(status);
  };

  console.log(dataList)

 
  return (
    <View style={styles.container}>
      <MyStatusBar backgroundColor="transparent"/>
      <View style={styles.my2}>
        <Text style={styles.h1}>Visits</Text>
      </View>
      <View style={styles.tabcontainer}>
        {ListTab.map(e => (
          <TouchableOpacity
            onPress={() => setStatusFilter(e.status)}
            style={[styles.btnTab, status === e.status && styles.btnActiveTab]}>
            <View
              style={{alignItems:"center", flexDirection:"row", justifyContent:"center"}}>
              <Text style={[
                styles.tabText,
                status === e.status && styles.tabActiveText,
              ]}>{e.status}</Text>
              <View style={[styles.totalvisits, status === e.status && styles.totolvisitsActive]}>
                <Text style={{color:"#fff", fontWeight: 600}}>4</Text></View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      {/* <FlatList
        data={dataList}
        keyExtractor={(item, index) => {
            return(index.toString());
         }}
        renderItem={renderItem}
      /> */}
      {data?.map((item, e)=>{
    const leftLine = [ item.statusCode === 'Completed' && styles.linegreen, item.statusCode === 'Cancelled' && styles.linered, !item.statusCode && styles.lineblue];
    return (
        <>
      {status === "Upcoming" && item.statusCode == "Upcoming" && <Visits/>}
      {status === "Past" && item.statusCode == "Past" && <Visits/>}
      </>
    );
  })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: responsiveScreenHeight(5),
    flex: 1,
  },
  appointContainer: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#E9ECF2',
    padding: 10,
    gap: 5,
    borderRadius: 12,
    marginLeft: 10
  },
  tabcontainer: {
    backgroundColor: '#F0F4F9',
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnActiveTab: {
    backgroundColor: '#FEFEFE',
  },
  btnTab: {
    backgroundColor: 'transparent',
    padding: 10,
    borderRadius: 8,
    flex: 2,
    alignContent: 'center',
  },
  tabText: {
    color: '#172331',
    fontFamily: 'Raleway-SemiBold',
    fontSize: 14,
    textAlign: 'center',
    flexDirection:"row",
    gap: 5
  },
  tabActiveText: {
    color: '#666E7D',
  },
  lineblue: {
    borderLeftWidth: 5,
    borderLeftColor: '#4464D9',
    height: '100%',
    position:"absolute",
    borderRadius: 10,
    left: -3,
    top: 10
  },
  linegreen: {
    borderLeftWidth: 5,
    borderLeftColor: '#48BD69',
    height: '80%',
    position:"absolute",
    borderRadius: 10,
    left: -3,
    top: 10
  },
  linered: {
    borderLeftWidth: 5,
    borderLeftColor: '#FC2C2C',
    height: '100%',
    position:"absolute",
    borderRadius: 10,
    left: -3,
    top: 10
  },
  my2: {
    marginVertical: 10,
  },
  h1: {
    color: '#172331',
    fontSize: 23,
    fontFamily: 'Raleway-SemiBold',
  },
  textsm: {
    color: '#172331',
    fontFamily: 'Raleway-Medium',
    fontSize: 12,
  },
  textwhitelg: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Raleway-Bold',
  },
  profileDetail: {
    backgroundColor: '#4464D9',
    borderRadius: 12,
    padding: 10,
  },
  sectionDone: {
    flexDirection: 'row',
    gap: 20,
  },
  cardContainer: {
    borderBottomColor: '#E7E7E7',
    borderWidth: 1,
    borderColor: 'transparent',
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontFamily: 'Raleway-Bold',
    fontSize: 14,
    color: '#172331',
  },
  cardText: {
    color: '#66708F',
    fontFamily: 'Raleway-Medium',
    fontSize: 12,
  },
  button: {
    backgroundColor: '#4464D9',
    paddingVertical: 5,
    paddingHorizontal: 10,
    gap: 5,
    color: '#fff',
    borderRadius: 12,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    fontFamily: 'PlusJakartaSans-ExtraBold',
  },
  tag: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    fontFamily:"Ralway-Medium"
  },
  danger: {
    backgroundColor: '#FC2C2C1A',
  },
  warning: {
    backgroundColor: 'orange',
  },
  success: {
    backgroundColor: '#48BD691A',
  },
  labeldanger:{
    color: "#FC2C2C",
    fontFamily:"Raleway-Medium"
  },
  labelsuccess:{
    color:"#48BD69",
    fontFamily:"Raleway-Medium"
  },
  totalvisits:{
    backgroundColor: "#4464D9",
    width: 18,
    height: 18,
    marginLeft: 10,
    color: "#fff",
    borderRadius: 100,
    alignItems:"center",
    justifyContent:"center",
    alignSelf:"center",
  },
  totolvisitsActive:{
    backgroundColor:"#666E7D",
    width: 18,
    height: 18,
    marginLeft: 10,
    color: "#fff",
    borderRadius: 100,
    flexDirection:"row",
    alignContent:"center",
    alignItems:"center",
    justifyContent:"center",
textAlign:"center"
  }
});

export default TotalVisits;


const Tag = ({ label, color }) => {
    const tagStyles = [styles.tag, color === 'danger' && styles.danger, color === 'warning' && styles.warning, color === 'success' && styles.success];
    const labelStyles = [styles.label, label === 'cancelled' && styles.labeldanger,  label === 'Completed' && styles.labelsuccess];
  
    return (
      <View style={tagStyles}>
        <Text style={labelStyles}>{label}</Text>
      </View>
    );
  };