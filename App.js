
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Image, Switch} from 'react-native';
import { PlaySound, StopSound, PlaySoundRepeat, PlaySoundMusicVolume } from 'react-native-play-sound';




export default class App extends Component {

  constructor(props) {
    super(props);
    this.generateRandomTime = this.generateRandomTime.bind(this);
    this.startSmoke = this.startSmoke.bind(this);
    this.state = { 
      random: 0 ,
      manual: false
    };
  }

  async componentDidMount(){
    await this.generateRandomTime();
    this.startSmoke();
  } 

  async restartSmoke(){

    await this.generateRandomTime();
    this.startSmoke();
    
  }
  
    generateRandomTime() {

    let min = 1;
    let max = 5;   
    let rand = min + Math.random() * (max - min);
    var randtoint = Math.trunc( rand );
       this.setState({ random: randtoint*(60000)});
     //this.setState({ random:2000});
   }
 
  startSmoke() {
    console.log(this.state.random)

    if (this.state.manual == false) {
      setTimeout(() => {

        min = 1;
        max = 150;
        rand = min + Math.random() * (max - min);

        this.chiFuma();

        this.restartSmoke();

      }, this.state.random);
    }
  }

  chiFuma() {
    min = 1;
    max = 150;
    rand = min + Math.random() * (max - min);

    if (rand <= 50) {
      PlaySound('cicileu')
    } else if (rand > 50 && rand <= 100) {
      PlaySound('bdiino')
    } else if (rand > 100) {
      PlaySound('bdii')
    } else {
      this.generateRandomTime();
    }
  
  }

  render() {
    return (


      <View style={{flex:1}}>

<View style={{alignSelf: 'flex-end',
alignItems:'center',
 
        flexDirection: 'row'}}>

        <Text>Manuale: </Text> 
<Switch
value={this.state.manual}
onValueChange={()=>{
  this.setState({manual: !this.state.manual})
  this.restartSmoke()

}}
>

</Switch>

</View>


      <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
      
       <TouchableOpacity
       style={{
       borderWidth:1, 
       borderColor:'rgba(0,0,0,0.2)',
       alignItems:'center',
       justifyContent:'center',
       width:100,
       height:100,
       backgroundColor:'#fff',
       borderRadius:100,
     }}

     onPress={() =>{
      if(this.state.manual == true){

       StopSound()
        this.chiFuma()}

      }
       }
 >




 <Image
 style={{width:100, height: 100}}
 source={require('../CiciLeu/src/cannaaa.png')}
  />



</TouchableOpacity> 
<Text> Inizia a fumare!! </Text>

</View>
 </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
