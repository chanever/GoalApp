import { View, StyleSheet, TextInput, Button, Modal,Image } from "react-native";
import { useState } from "react";

function GoalInput (props){
    const [enteredGoalText, setEnteredText] =useState("");

    function textInputHandler(enteredText) {
        setEnteredText(enteredText);
    };
    
    function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredText('')
    }

    console.log(enteredGoalText)
    
    return (
    <Modal visible={props.define} animationType="slide">
        <View style={styles.inputContainer}>
            <Image style={styles.image} 
            source={require('../assets/images/goal.png')}
            />
            <TextInput 
            style={styles.textInput} 
            placeholder='this is input!'
            onChangeText={textInputHandler}
            placeholderTextColor='#005f73'
            value={enteredGoalText} />
            <View style={styles.buttonContainer}>
                <View style={styles.button}>  
                    <Button title='add your thing!' color='#006666' 
                    onPress={addGoalHandler}/>
                </View>
                <View style={styles.button2}>
                    <Button title="Cancel" color='#006666' onPress={props.onCancel}/>
                </View>
                
            </View>
            
        </View >
    </Modal>
    )
    
};

export default GoalInput

const styles = StyleSheet.create({
        inputContainer : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor: '#D5BDAF'
    },

    textInput : {
        borderWidth : 1,
        borderColor : '#588157',
        backgroundColor : '#f7ede2',
        borderWidth : 3,
        width:'60%',
        marginRight : 8,
        padding : 8,
        color : '#005f73',
        borderRadius : 5,
        padding : 15
    },

    buttonContainer:{
        flexDirection : 'row'
        
    },
    button :{
        width : '40%',
        marginTop : 10,
        marginHorizontal : 8,
        backgroundColor : 'pink',
        borderRadius: 10
    },
    button2 : {
        width : '25%',
        marginTop : 10,
        backgroundColor : 'pink',
        borderRadius : 10
    },
    image : {
        width : 200,
        height : 200,
        margin : 20
    }
})