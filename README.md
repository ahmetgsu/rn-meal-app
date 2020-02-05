# Section 6 Course Notes

### 1. Installing custom fonts

First, **`npm install --save expo-font`** or **`expo install expo-font`**. The latter guarantees the installation of the right version of the package for our expo version. Then,
**`import * as Fonts from "expo-font"`**

Second, **`import { AppLoading } from "expo"`** in order to upload the custom font, it prolongs the splash screen.

After that, outside of the App component, we create a function for the font installation.

```javascript
const fetchFonts = () => {
  return Font.loadAsync({
    'roboto-slab': require('./assets/fonts/RobotoSlab-Regular.ttf'),
    'roboto-slab-bold': require('./assets/fonts/RobotoSlab-Bold.ttf')
  });
};
```

Then, we need a state in order to manage the font loading. As we use hooks, we need to import **`{ useState }`**.

```javascript
const [fontLoaded, setFontLoaded] = useState(false);

if (!fontLoaded) {
  return (
    <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} />
  );
}
```

### 2. Installing React Navigation & Adding Navigation to the App

We first install react-navigation 3rd party library: **`npm install --save react-navigation`**. Then, we need to install the following dependencies:

```javascript
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
```

Finally, we create a navigation folder in the root folder. Inside of it, create a MealsNavigator.js file to configure the navigation.

> If you're using React Navigation v4 or higher, everything works as shown in this module but there is one important difference:
> You need to install the different navigators which we'll use in this module(StackNavigator, DrawerNavigator, TabsNavigator) separately.
>
> So when we use the [StackNavigator](https://reactnavigation.org/docs/en/stack-navigator.html) (= next lecture), run
>
> **`npm install --save react-navigation-stack`**
>
> before you start using it (with v3 and lower, it was part of react-navigation itself).
> Also add this import in the file where you are using **`createStackNavigator`**:
>
> **`import { createStackNavigator } from 'react-navigation-stack';`**
>
> Same for TabsNavigator (used a little bit later in this module):
>
> **`npm install --save react-navigation-tabs`**
>
> **`import { createBottomTabNavigator } from 'react-navigation-tabs';`**
>
> And also for DrawerNavigator (also used later in this module):
>
> **`npm install --save react-navigation-drawer`**
>
> **`import { createDrawerNavigator } from 'react-navigation-drawer';`**

### 3. Creating a StackNavigator

Provides a way for your app to transition between screens where each new screen is placed on top of a stack.

In `MealsNavigator.js` file we use the following configurations:

```javascript
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: {
    screen: CategoryMealsScreen
  },
  MealDetail: MealDetailScreen
});

export default createAppContainer(MealsNavigator);
```

important note, **`createStackNavigator`** is moved to **`react-navigation-stack`**.

Then, we need to import MealsNavigator in `App.js` file and simply return it <MealsNavigator />

### 4. Navigating Between Screens

MealsNavigator automatically passes some props related to react-navigation. So we can employ them to navigate between screens.

For example, we put a button in **`CategoriesScreen.js`** file which allows us to navigate to CategoryMealsScreen

```javascript
<Button
  title='Go to Meals!'
  onPress={() => {
    props.navigation.navigate({
      routeName: 'CategoryMeals'
    });
  }}
/>
```

The below code is shorter alternative syntax for navigation. Both are valid.

```javascript
<Button
  title='Go to Meals!'
  onPress={() => {
    props.navigation.navigate({'CategoryMeals'});
  }}
/>
```

### 5. Pushing, Popping & Replacing in React-Navigation

`props.navigation.navigate({'CategoryMeals'})` takes object
`props.navigate.push("CategoryMeals")` just takes route name as string

The main difference between `.push()` and `.navigate()` is the fact that .push() allows us to navigate between even in the same screen. For example, suppose that we change the button configuration in **`CategoriesScreen.js`** file as follows:

```javascript
<Button
  title='Go to Meals!'
  onPress={() => {
    props.navigation.push('Categories');
  }}
/>
```

With this configuration, when the button is clicked the same page is reloaded but in case of .navigate(), nothing happens.

_`props.navigation.goBack()`
_`props.navigation.pop()`
_`props.navigation.popToTop()`
_`props.navigation.replace('CategoryMeals')`
