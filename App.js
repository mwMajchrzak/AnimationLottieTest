import React, { Component } from 'react';
import { Animated, Easing, TouchableOpacity, View, Text } from 'react-native';
import LottieView from 'lottie-react-native';

export default class BasicExample extends Component {

  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0),
      progress2: new Animated.Value(0),
      firstAnimation: false
    };
  }

  componentDidMount() {
  }

  renderAnimation = () => {
    if(this.state.firstAnimation) {
      console.log('hiiiiiii')
      return (<LottieView source={require('./assets/done.json')} progress={this.state.progress2} />)
    }
    return  (<LottieView source={require('./assets/heart.json')} progress={this.state.progress} />)
  }

  handlePress = () => {

      Animated.timing(this.state.progress, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
      }).start(() => {
          console.log('calllback')
          this.setState({firstAnimation: true})
          console.log(this.state.firstAnimation)
          Animated.timing(this.state.progress2, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          }).start()

      });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.animationContainer}>
        {this.renderAnimation()}
        </View>
        <TouchableOpacity style={styles.button} onPress={this.handlePress}>
          <Text style={styles.buttonText}>WYŚLIJ</Text>
        </TouchableOpacity>
      </View>
    );
  }


}
const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center'

  },
  animationContainer: {
    //position: 'absolute', 
    // top: 0, 
    // left: 0, 
    // right: 0, 
    // bottom: 0, 
    // justifyContent: 'center', 
    // alignItems: 'center',
    width: '80%',
    height: '80%',
    // backgroundColor: 'red'
  },
  button: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    
    backgroundColor: 'grey',
    width: 200,
    height: 40,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',

  }
}