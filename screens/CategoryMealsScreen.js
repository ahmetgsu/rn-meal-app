import React from 'react';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealsScreen = props => {
  const catId = props.navigation.getParam('categoryId');

  const displayedMeals = MEALS.filter(
    elem => elem.categoryIds.indexOf(catId) >= 0
  );
  // console.log('displayedMeals: ', displayedMeals);
  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = navigationData => {
  // console.log('navigationData: ', navigationData);
  const catId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(elem => elem.id === catId);
  return {
    headerTitle: selectedCategory.title
  };
};

export default CategoryMealsScreen;
