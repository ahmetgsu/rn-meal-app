import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

const CategoryMealsScreen = props => {
  // console.log(props);
  const catId = props.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(elem => elem.id === catId);
  console.log('catId: ', catId);
  return (
    <View style={styles.screen}>
      <Text>The Category Meal Screen</Text>
      <Button
        title='Go to Meal Detail!'
        onPress={() => {
          props.navigation.navigate({
            routeName: 'MealDetail'
          });
        }}
      />
      <Button
        title='Go Back!'
        onPress={() => {
          props.navigation.goBack();
        }}
      />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = navigationData => {
  console.log('navigationData: ', navigationData);
  const catId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(elem => elem.id === catId);
  return {
    headerTitle: selectedCategory.title
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealsScreen;
