import React from 'react';
import { Platform, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';

import Colors from '../constants/Colors';

const defaultStackNavOptions = {
  // this targets header background, not the text
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
  },
  // this targets the text of the header
  headerTitleStyle: {
    fontFamily: 'roboto-slab',
    fontSize: 22
  },
  // this targets the text appears next to back button (only IOS)
  // Android doe not have back-text
  headerBackTitleStyle: {},
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
};

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen
      // navigationOptions: {
      //   headerTitle: 'Meal Categories'
      // }
    },
    CategoryMeals: {
      screen: CategoryMealsScreen
    },
    MealDetail: MealDetailScreen
  },
  // createStackNavigator 2nd parameter
  {
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
  },
  {
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primaryColor,
      // this targets tab bar label styling (for android)
      tabBarLabel:
        Platform.OS === 'android' ? (
          <Text style={{ fontFamily: 'roboto-slab' }}>Meals</Text>
        ) : (
          'Meals'
        )
    }
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      // tabBarLabel: 'Favorites!',
      tabBarIcon: tabInfo => {
        return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.secondaryColor,
      // this targets tab bar label styling (for android)
      tabBarLabel:
        Platform.OS === 'android' ? (
          <Text style={{ fontFamily: 'roboto-slab' }}>Favorites</Text>
        ) : (
          'Favorites'
        )
    }
  }
};

const MealsFavTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: 'white',
        shifting: true
      })
    : createBottomTabNavigator(
        // 1st item is the tabs configuration object
        tabScreenConfig,
        // 2nd item is the general configurator of tabs
        {
          tabBarOptions: {
            // activeTintColor defines the active tab text's color
            activeTintColor: Colors.secondaryColor,
            // this targets the bottom tab label (only IOS)
            labelStyle: {
              fontFamily: 'roboto-slab'
            }
          }
        }
      );

const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen
  },

  {
    // navigationOptions: {
    //   drawerLabel: 'Meal Filter'
    // },
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const MainNavigator = createDrawerNavigator(
  {
    // This navigator does not automatically add hamburger menu to related screens
    // We need to add it manually
    MealsFavs: {
      screen: MealsFavTabNavigator,
      navigationOptions: { drawerLabel: 'Meals' }
    },
    Filters: {
      screen: FiltersNavigator,
      navigationOptions: {
        drawerLabel: 'Meal Filter'
      }
    }
  },
  {
    contentOptions: {
      activeTintColor: Colors.secondaryColor,
      labelStyle: {
        fontFamily: 'roboto-slab',
        fontSize: 16
      }
    }
  }
);

export default createAppContainer(MainNavigator);
