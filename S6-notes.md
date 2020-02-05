# Section 6 Course Notes

1. Installing custom fonts

First, `npm install --save expo-font` or `expo install expo-font`. The latter guarantees the installation of the right version of the package for our expo version. Then,
`import * as Fonts from "expo-font"`

Second, `import { AppLoading } from "expo"` in order to upload the custom font, it prolongs the splash screen.
