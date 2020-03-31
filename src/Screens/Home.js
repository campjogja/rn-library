import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';

import {Book} from '../Components/book';
import {db} from '../Config/firebase';

class Home extends Component {
  state = {
    book: 'Dilan',
    name: '',
    data: [],
  };
  componentDidMount = () => {
    this.getData();
  };

  getData = () => {
    let ref = db.ref('/items');
    ref.on('value', snapshot => {
      const data = Object.values(snapshot.val());
      this.setState({data});
      console.log('data', Object.values(snapshot.val()));
    });
  };

  button = () => {
    this.props.navigation.navigate('Profile');
  };

  handleChange = e => {
    this.setState({
      name: e.nativeEvent.text,
    });
  };

  handleSubmit = () => {
    db.ref('/items').push({
      id: '1',
      name: this.state.name,
    });
    alert('success');
    // this.setState({
    //   name: '',
    // });
  };

  render() {
    const {data} = this.state;
    return (
      <View style={styles.container}>
        <Text>Ini Class Component</Text>
        <Book title={this.state.book} />
        <TouchableOpacity onPress={this.button} style={styles.button}>
          <Text>Go to Profile</Text>
        </TouchableOpacity>
        <TextInput style={styles.input} onChange={this.handleChange} />
        <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
          <Text>Add</Text>
        </TouchableOpacity>
        {data.map(item => (
          <View>
            <Text>{item.name}</Text>
          </View>
        ))}
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  button: {
    backgroundColor: '#fff',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    height: 30,
    borderRadius: 10,
  },
  input: {
    width: '70%',
    height: 40,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 5,
    marginTop: 20,
  },
});
