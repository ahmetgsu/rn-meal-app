# Section 6 Course Notes

1. Installing custom fonts

First, `npm install --save expo-font` or `expo install expo-font`. The latter guarantees the installation of the right version of the package for our expo version. Then,
`import * as Fonts from "expo-font"`

Second, `import { AppLoading } from "expo"` in order to upload the custom font, it prolongs the splash screen.

After that, outside of the App component, we create a function for the font installation.

```javascript
const fetchFonts = () => {
  return Font.loadAsync({
    'roboto-slab': require('./assets/fonts/RobotoSlab-Regular.ttf'),
    'roboto-slab-bold': require('./assets/fonts/RobotoSlab-Bold.ttf')
  });
};
```

Then, we need a state in order to manage the font loading. As we use hooks, we need to import `{ useState }`.

```javascript
const [fontLoaded, setFontLoaded] = useState(false);

if (!fontLoaded) {
  return (
    <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} />
  );
}
```
