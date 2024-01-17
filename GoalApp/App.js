import { useState } from 'react';
import { StyleSheet, Text, View, FlatList,Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler(){
    setModalIsVisible(true);
  }

  function endAddGoalHandler(){
    setModalIsVisible(false);
  }
  function addGoalHandler(enteredGoalText){
    setCourseGoals((currentCourseGoals) => [
    ...currentCourseGoals,
    {text : enteredGoalText, id : Math.random().toString()},]) // add elements to courseGoals.
  };

  function deleteGoalHandler(a){
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== a);
    })
  }

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.appContainer}>
        <Button title='Add New Goal' color='black' onPress={startAddGoalHandler}/>
        <GoalInput onAddGoal={addGoalHandler} 
        define={modalIsVisible}
        onCancel = {endAddGoalHandler}/>
        <View style={styles.goalsContainer}>
          <FlatList data={courseGoals} renderItem={(itemData) => {
            return (
            <GoalItem text={itemData.item.text} 
            id={itemData.item.id}
            onDeleteItem = {deleteGoalHandler}/>
            )
          }}
          keyExtractor={(item, index) =>{
            return item.id;
          } }/>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex : 1,
    paddingTop : 50,
    paddingHorizontal : 15,
    textAlign : 'center',
    
  },
  goalsContainer: {
    flex : 5
  },
  
});