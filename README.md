# react-resize-tools

Tools to help you with screen resizing.

## Install

```sh
yarn add react-resize
# or
npm i react-resize --save
```

## Change log
[https://github.com/Achaak/react-resize/blob/master/CHANGELOG.md](https://github.com/Achaak/react-resize/blob/master/CHANGELOG.md)

## Hooks
### useScreenSize
Return **innerWidth**, **innerHeight**, **outerWidth** and **outerHeight** when screen is resized.

Example:
``` js
const size = useScreenSize()
```

### useScreenWidthType
Return **xl**, **sm**, **md**, **lg**, **xl** or **xxl** when screen is resized.

Example:
``` js
const widthType = useScreenWidthType()
// or
const widthType = useScreenWidthType({
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1400
})
```
### Options :
| Option | Default |
|---------|---------|
| sm      | 640     |
| md      | 768     |
| lg      | 1024    |
| xl      | 1280    |
| xxl     | 1400    |
