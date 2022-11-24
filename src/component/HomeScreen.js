import React, {useState} from 'react';
import {View, Text, Button, TextInput, StyleSheet, Alert} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addDetails} from './../actions/Actions';

const HomeScreen = props => {
  const [text, setText] = useState('');
  const onChangeText = values => {
    setText(values);
  };

  const addInfoToRedux = () => {
    if (text.values && text.values.trim().length > 0) {
      props.addDetails(text);
      props.navigation.navigate('WelcomeScreen');
    } else {
      Alert.alert('Empty!!!', 'Please enter some text', [
        {
          text: 'Ok',
        },
      ]);
    }
  };
  return (
    <View style={styles.constainer}>
      <Text>Please enter text</Text>
      <TextInput
        style={styles.input}
        placeholder="Please add some text"
        onChangeText={values => onChangeText({values})}
      />
      <Button title="Add text" onPress={() => addInfoToRedux()} />
    </View>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addDetails,
    },
    dispatch,
  );
const mapStateToProps = state => {
  const {details} = state;
  return {details};
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    justifyContent: 'center',
    margin: 10,
  },
  input: {
    height: 45,
    backgroundColor: 'azure',
    fontSize: 20,
  },
});
