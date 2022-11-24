import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

const DetailsScreen = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Input Text: {props.details.values}</Text>
      <Button
        title="Back to Home"
        onPress={() => props.navigation.navigate('Home')}
      />
    </View>
  );
};

const mapStateToProps = state => {
  const {details} = state;
  return {details};
};

export default connect(mapStateToProps)(DetailsScreen);

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
