# React Native Tailwindcss

This library aims to target both **React Native** and **React Native Web**.
We support SSR with TailwindCSS Media Queries which was the main objective of this project. `@react-native-tailwindcss/styled` uses [tailwind-react-native-classnames](<[https://link](https://github.com/jaredh159/tailwind-react-native-classnames)>) in the background. We recommend that if you are not targeting web to use that library, although we provide some fancy selectors to make your life easier such as `:focus` and `:active`.

## Installation

```console
yarn add @react-native-tailwindcss/styled

yarn add -D @react-native-tailwindcss/postcss @react-native-tailwindcss/tailwind tailwindcss@latest autoprefixer@latest postcss@latest
```

## NextJS setup

```console
yarn add -D next-transpile-modules
```

```javascript
// next.config.js
const withTM = require('next-transpile-modules')([
  '@react-native-tailwindcss/styled',
]);

module.exports = withTM({
  // ... The rest of your config
});
```

```javascript
// postcss.config.js
module.exports = {
  plugins: ['tailwindcss', 'autoprefixer', '@react-native-tailwindcss/postcss'],
};
```

```javascript
// tailwind.config.js
const { withRNTailwind } = require('@react-native-tailwindcss/tailwind');

module.exports = withRNTailwind({
  mode: 'jit',
  // ... The rest of your config
});
```

## Usage

```javascript
import React from 'react';

import { Text, View } from 'react-native';

import styled from '@react-native-tailwindcss/styled';

const Container = styled(
  View,
  'flex-1 bg-white dark:bg-black items-center justify-center',
);
const Description = styled(
  Text,
  'text-white shadow-black shadow-color-opacity-50',
);

export default function App() {
  return (
    <Container>
      {/* Inline styles */}
      <Description tw="text-indigo-50">
        Open up App.tsx to start working on your app!
      </Description>
    </Container>
  );
}
```

## Roadmap

- [x] Simple Styled API
- [x] PostCSS Plugin
- [x] SSR Support
- [x] Fully working example
- [x] Primitive components
- [ ] Moti support
- [ ] Tests
- [ ] Styled access to props in tailwind classnames
- [ ] Classnames like API

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
