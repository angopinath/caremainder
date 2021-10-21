## installation

```shell
npx --package react-native react-native-cli
```

## add `.jsx` file extension support

Default react-native project doesnt support `.jsx` file extension. 
to enable the support we need add following content into `metro.js.config` file
```js
getSourceExts: () => [ 'jsx' ]
```

