# Social Widget

### Description

This is a social sharing widget that can be plugged into any web page

### Features

    * Default option to share content on Facebook, Twitter, Google Plus, Pinterest
    * Configurable by replacing sprites and templates
    * Easily extensible for other platforms

### Usage

##### Dependencies

* YUI3 Library - http://yui.yahooapis.com/3.17.2/build/yui/yui-min.js

##### Example

To include this widget we need to fire the global event as follows:

```js
    YCustom.use('node', function(Y) {
        Y.fire('global-social', {node: Y.one("#social_widget"), url: window.location.href});
    });
```