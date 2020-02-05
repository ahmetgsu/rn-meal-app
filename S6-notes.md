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
> So when we use the StackNavigator (= next lecture), run
>
> **`npm install --save react-navigation-stack`**
>
> before you start using it (with v3 and lower, it was part of react-navigation itself).
> Also add this import in the file where you are using **`createStackNavigator`**:
>
> **`import { createStackNavigator } from 'react-navigation-stack';`**
