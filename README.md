# react-native-letter-avatar

A React Native component that displays the first letter of a given text inside a circle.

## Installation

To install `react-native-letter-avatar`, run the following command in your React Native project:

```bash
npm install react-native-letter-avatar
```
Or if you use Yarn:
```bash
yarn add react-native-letter-avatar
```

## Usage
Import Letteravatar into your React Native component and use it like this:

```typescript jsx
import React from 'react';
import { View } from 'react-native';
import LetterAvatar from 'react-native-letter-avatar';

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <LetterAvatar text="Hello World" size={60} />
    </View>
  );
};

export default App;
```
## Props
The LetterAvatar component accepts the following props:

text: The text from which the first letter will be displayed inside the circle.

size: (optional) A custom size of avatar.

style: (optional) A custom style object to apply to the avatar. This can include backgroundColor, width, height, and other style properties.

textStyle: (optional) A custom style object to apply to the avatar text. This can include backgroundColor, width, height, and other style properties.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request with any improvements or fixes.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

Make sure to replace placeholder text where appropriate, and add any additional information specific to your component or project. This template provides a basic structure for documenting your npm package, including how to install, use, and contribute to it.
