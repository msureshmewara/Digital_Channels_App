import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

const WelcomeScreen = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Input Text: {props.details.values}</Text>
      <Button
        title="Next Screen"
        onPress={() => props.navigation.navigate('DetailsScreen')}
      />
    </View>
  );
};

const mapStateToProps = state => {
  const {details} = state;
  console.log('***STATE*****', state);
  return {details};
};

export default connect(mapStateToProps)(WelcomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  label: {
    alignSelf: 'flex-end',
    marginTop: -5,
    position: 'absolute',
    margin: 10,
  },
});
