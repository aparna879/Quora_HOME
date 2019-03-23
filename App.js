import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    Animated,
    TextInput,
    AppRegistry,
    Dimensions,
    Button,
    Alert,
} from "react-native";
import { Icon } from 'react-native-elements';
import { Row } from "native-base";
import { Dropdown } from 'react-native-material-dropdown';


class App extends Component {

    _onPress() {
        Alert.alert('Happy Coding!!');
       }
    
       _onP() {
        Alert.alert('Happy Coding!!');
       }
       
    render() {
        let data = [{
            value: 'Downvote',
          }, {
            value: 'Share',
          }, {
            value: 'Answer Later',
          }, {
              value: 'Edit',
          }, {
              value: 'Merge Questions',
          }];
        return (
            <View style={{ flex: 1 }} >
            
                <View style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: 'red',
                    height: 60,
                    zIndex: 5,
                    elevation: 5,
                    alignItems: 'flex-start'
                }}>

                    <View style={{ position: 'relative',flexDirection:'row'}}>
                        <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold', color:'white',alignItems:'flex-start' }}>QuoraTry</Text>
                        <View style={{alignItems:'flex-end',flexDirection:'row',left:120}}>
                        <Icon
                            raised
                            name='search'
                            size={ 18 }
                            type='font-awesome'
                            color='#f50'
                            onPress={this._onP} />
                        <Icon
                            raised
                            name='plus-circle'
                            type='font-awesome'
                            size={ 18 }
                            color='#f50'
                            onPress={this._onP} />
                        </View>
                    </View>
                </View>
            

            

                <ScrollView style={{ position: 'relative' }}>


                   <View style={{backgroundColor: "white",position:'relative',top:60,height:180}} >
                        
                        <View style={{
                            flexDirection:'row',
                        }}>
                        <Image source={require('./assets/me.jpg')}
                            style={{ 
                                height: 30,
                                width: 30,
                                borderRadius: 15,
                                borderColor: 'white',
                                borderWidth: 3,
                                overflow: 'hidden',
                                marginTop: 10,
                                marginLeft: 10,
                                position: 'relative'
                             }}>
                        </Image>

                        <Text style={{
                            position:'relative',
                            marginTop: 17,
                            left:10
                        }}>
                            Mario
                        </Text>
                        </View>
                        <TextInput 
                            placeholder = "What is your question or link?" 
                            style={{height: 60, borderColor: 'white', borderWidth: 1, position: 'relative', backgroundColor: "white",left:10,fontSize:25,color:'gray'}}
                            underlineColorAndroid='transparent'/>
                    </View>




                    <View style={{
                        flexDirection:'column',
                        position:'relative',
                        backgroundColor:'white',
                        height:250,
                        width:Dimensions.get('window').width,
                        borderWidth: 2
                        
                        //right:50,
                        }}>
                        <Text style={{position:'relative',top:10,color:'gray',left:10}}>Answer  Philosphy of Everyday Life  Topic you may like</Text>
                        <Text style={{position:'relative',fontWeight:'bold',color:'black',left:10,top:15,fontSize:20}}>What are the best examples of "Never Give Up?"</Text>
                        <View style={{position:'relative',top:15,left:10,flexDirection:'row'}}>
                            <Image source={require('./assets/me.jpg')}
                                style={{ 
                                    height: 30,
                                    width: 30,
                                    borderRadius: 15,
                                    borderColor: 'white',
                                    borderWidth: 3,
                                    overflow: 'hidden',
                                    marginTop: 10,
                                    marginLeft: 10,
                                    position: 'relative'
                                }}>
                            </Image>
                            <View style={{left:10,position:'relative'}}>
                            <Text style={{position:'relative',fontSize:15,top:10,width:Dimensions.get('window').width,flexShrink:1}}>Rishabh Verma, B.Tech Final from IIT Kanpur</Text>
                            <Text style={{top:8,position:'relative',fontSize:12}}>Answered 1h ago</Text>
                            </View>
                        </View>
                        <View style={{position:'relative',top:30,left:10,flexDirection:'row'}}>
                            <Text style={{fontSize:18,width:Dimensions.get('window').width,flexShrink:2}}>Paulami patel is a shining example of how a tragedy can be turned into a fuel that drives you to achieve your goals</Text>
                            <Image source={require('./assets/me.jpg')}
                                style={{ 
                                    height: 90,
                                    width: 90,
                                    borderRadius: 5,
                                    borderColor: 'white',
                                    borderWidth: 3,
                                    overflow: 'hidden',
                                    marginTop: 5,
                                    marginLeft: 10,
                                    right:10,
                                    position: 'relative'
                                }}>
                            </Image>
                        </View>
                    </View>



                    <View style={{
                        flexDirection:'column',
                        position:'relative',
                        backgroundColor:'white',
                        height:250,
                        borderWidth:2,
                        width:Dimensions.get('window').width,
                        //right:50,
                        }}>
                        <Text style={{left:10,position:'relative',fontSize:15,color:'black',top:10}}>Sponsored by CircleCl</Text>
                        <Text style={{left:10,position:'relative',fontSize:20,fontWeight:'bold',top:10,color:'black'}}>What's the best continuos integration tool for Github?</Text>
                        <Text style={{left:10,position:'relative',fontSize:17,color:'black',top:15,flex:0.7}}>Test before you merge! CircleCl integrates with Github seamlessly. Free setup takes 20 seconds.</Text>
                        <Button style={{left:10,position:'relative',top:1,flex:1,right:10}}onPress={this._onPress} title="Learn More" color="#234567" accessibilityLabel="Tap on Me"/>
                    </View>



                    <View style={{flexDirection:'row',position:'relative',borderWidth:1}}>
                            <Image source={require('./assets/ques.png')}
                                style={{ 
                                    height: 30,
                                    width: 30,
                                    borderRadius: 15,
                                    borderColor: 'white',
                                    borderWidth: 3,
                                    overflow: 'hidden',
                                    marginTop: 10,
                                    marginLeft: 10,
                                    position: 'relative'
                                }}>
                            </Image>
                            <Text style={{position:'relative',fontSize:15,color:'gray',top:13,left:10}}>QUESTIONS FOR YOU</Text>
                    </View>



                    <View style={{
                        flexDirection:'column',
                        position:'relative',
                        backgroundColor:'white',
                        height:250,
                        width:Dimensions.get('window').width,
                        borderWidth: 1,
                        //right:50,
                        }}>
                        <Text style={{position:'relative',top:10,color:'gray',left:10}}>Question added  Karnataka,India   Topic you may like</Text>
                        <Text style={{position:'relative',fontWeight:'bold',color:'black',left:10,top:15,fontSize:20}}>Why have OLA Cabs been banned in Karnataka for 6 months?</Text>
                        <View style={{position:'relative',top:20,flexDirection:'row',left:10}}>
                            <Text style={{fontWeight:'bold'}}>No answer yet</Text>
                            <Text style={{left:10}}>Last followed 3h ago</Text>
                        </View>
                        <View style={{position:'relative',top:20,flexDirection:'row',left:10}}>
                            <View style={{flexDirection:'column'}}>
                            <Icon
                                raised
                                name='heart'
                                type='font-awesome'
                                color='#f50'
                                height= '10'
                                width='10'
                                onPress={this._onPress} />
                            <Text style={{left:10,position:'relative',top:10}}>Answer</Text>
                            </View>
                            <View style={{flexDirection:'column'}}>
                            <Icon
                                raised
                                name='heart'
                                type='font-awesome'
                                color='#f50'
                                onPress={this._onPress} />
                            <Text style={{left:10,position:'relative',top:10}}>Pass</Text>
                            </View>
                            <View style={{flexDirection:'column'}}>
                            <Icon
                                raised
                                name='angle-right'
                                type='font-awesome'
                                color='#f50'
                                onPress={this._onPress} />
                            <Text style={{left:10,position:'relative',top:10}}>Follow</Text>
                            </View>
                            <View style={{width:100,left:40}}>
                            <Dropdown
                                label='Question'
                                    data={data}/>
                            </View>
                        </View>
                    </View>



                    <View style={{
                        flexDirection:'column',
                        position:'relative',
                        backgroundColor:'white',
                        height:250,
                        width:Dimensions.get('window').width,
                        borderWidth: 2,
                        
                        //right:50,
                        }}>
                        <Text style={{position:'relative',top:10,color:'gray',left:10}}>Question added BBC News   Topic you may like</Text>
                        <Text style={{position:'relative',fontWeight:'bold',color:'black',left:10,top:15,fontSize:20}}>Is the BBC a biased source of news?</Text>
                        <View style={{position:'relative',top:20,flexDirection:'row',left:10}}>
                            <Text style={{fontWeight:'bold'}}>No answer yet</Text>
                            <Text style={{left:10}}>Last followed 4 days ago</Text>
                        </View>
                        <View style={{position:'relative',top:20,flexDirection:'row',left:10}}>
                            <View style={{flexDirection:'column'}}>
                            <Icon
                                raised
                                name='heart'
                                type='font-awesome'
                                color='#f50'
                                height= '10'
                                width='10'
                                onPress={this._onPress} />
                            <Text style={{left:10,position:'relative',top:10}}>Answer</Text>
                            </View>
                            <View style={{flexDirection:'column'}}>
                            <Icon
                                raised
                                name='heart'
                                type='font-awesome'
                                color='#f50'
                                onPress={this._onPress} />
                            <Text style={{left:10,position:'relative',top:10}}>Pass</Text>
                            </View>
                            <View style={{flexDirection:'column'}}>
                            <Icon
                                raised
                                name='angle-right'
                                type='font-awesome'
                                color='#f50'
                                onPress={this._onPress} />
                            <Text style={{left:10,position:'relative',top:10}}>Follow</Text>
                            </View>
                            <View style={{width:100,left:40}}>
                            <Dropdown
                                label='Question'
                                    data={data}/>
                            </View>
                        </View>
                    </View>



                    <View style={{
                        flexDirection:'column',
                        position:'relative',
                        backgroundColor:'white',
                        height:250,
                        borderWidth:2,
                        width:Dimensions.get('window').width,
                        //right:50,
                        }}>
                        <Text style={{left:10,position:'relative',fontSize:15,color:'black',top:10}}>Sponsored by CircleCl</Text>
                        <Text style={{left:10,position:'relative',fontSize:20,fontWeight:'bold',top:10,color:'black'}}>What's the best continuos integration tool for Github?</Text>
                        <Text style={{left:10,position:'relative',fontSize:17,color:'black',top:15,flex:0.7}}>Test before you merge! CircleCl integrates with Github seamlessly. Free setup takes 20 seconds.</Text>
                        <Button style={{left:10,position:'relative',top:1,flex:1,right:10}}onPress={this._onPress} title="Shop Now" color="#234567" accessibilityLabel="Tap on Me"/>
                    </View>



                    <View style={{
                        flexDirection:'column',
                        position:'relative',
                        backgroundColor:'white',
                        height:250,
                        width:Dimensions.get('window').width,
                        borderWidth: 2
                        
                        //right:50,
                        }}>
                        <Text style={{position:'relative',top:10,color:'gray',left:10}}>Answer  Philosphy of Everyday Life  Topic you may like</Text>
                        <Text style={{position:'relative',fontWeight:'bold',color:'black',left:10,top:15,fontSize:20}}>What are the best examples of "Never Give Up?"</Text>
                        <View style={{position:'relative',top:15,left:10,flexDirection:'row'}}>
                            <Image source={require('./assets/me.jpg')}
                                style={{ 
                                    height: 30,
                                    width: 30,
                                    borderRadius: 15,
                                    borderColor: 'white',
                                    borderWidth: 3,
                                    overflow: 'hidden',
                                    marginTop: 10,
                                    marginLeft: 10,
                                    position: 'relative'
                                }}>
                            </Image>
                            <View style={{left:10,position:'relative'}}>
                            <Text style={{position:'relative',fontSize:15,top:10,width:Dimensions.get('window').width,flexShrink:1}}>Rishabh Verma, B.Tech Final from IIT Kanpur</Text>
                            <Text style={{top:8,position:'relative',fontSize:12}}>Answered 1h ago</Text>
                            </View>
                        </View>
                        <View style={{position:'relative',top:30,left:10,flexDirection:'row'}}>
                            <Text style={{fontSize:18,width:Dimensions.get('window').width,flexShrink:2}}>Paulami patel is a shining example of how a tragedy can be turned into a fuel that drives you to achieve your goals</Text>
                            <Image source={require('./assets/me.jpg')}
                                style={{ 
                                    height: 90,
                                    width: 90,
                                    borderRadius: 5,
                                    borderColor: 'white',
                                    borderWidth: 3,
                                    overflow: 'hidden',
                                    marginTop: 5,
                                    marginLeft: 10,
                                    right:10,
                                    position: 'relative'
                                }}>
                            </Image>
                        </View>
                    </View>
                </ScrollView>


                
                <View style={{flexDirection:'row',left:10,right:10,height:90}}>
                    <View style={{flexDirection:'column'}}>
                    <Icon
                        raised
                        name='angle-right'
                        type='font-awesome'
                        size={ 20 }
                        color='#f50'
                        onPress={this._onPress} />
                    <Text style={{left:10,position:'relative',top:3,alignItems:'center'}}>Home</Text>
                    </View>
                    <View style={{flexDirection:'column'}}>
                    <Icon
                        raised
                        name='angle-right'
                        type='font-awesome'
                        size={ 20 }
                        color='#f50'
                        onPress={this._onPress} />
                    <Text style={{left:10,position:'relative',top:3,alignItems:'center'}}>Answer</Text>
                    </View>
                    <View style={{flexDirection:'column'}}>
                    <Icon
                        raised
                        name='angle-right'
                        type='font-awesome'
                        size={ 20 }
                        color='#f50'
                        onPress={this._onPress} />
                    <Text style={{left:10,position:'relative',top:3,alignItems:'center'}}>Spaces</Text>
                    </View>
                    <View style={{flexDirection:'column'}}>
                    <Icon
                        raised
                        name='angle-right'
                        type='font-awesome'
                        size={ 20 }
                        color='#f50'
                        onPress={this._onPress} />
                    <Text style={{left:10,position:'relative',top:3,alignItems:'center'}}>Notifs</Text>
                    </View>
                    <View style={{flexDirection:'column'}}>
                    <Icon
                        raised
                        name='angle-right'
                        type='font-awesome'
                        size={ 20 }
                        color='#f50'
                        onPress={this._onPress} />
                    <Text style={{left:10,position:'relative',top:3,alignItems:'center'}}>You</Text>
                    </View>
                    <View style={{flexDirection:'column'}}>
                    <Icon
                        raised
                        name='angle-right'
                        type='font-awesome'
                        size={ 20 }
                        color='#f50'
                        onPress={this._onPress} />
                    <Text style={{left:5,position:'relative',top:3,alignItems:'center'}}>Discover</Text>
                    </View>
                </View>
            </View>

            
        );
    }
}
export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});