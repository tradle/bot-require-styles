
# @tradle/bot-require-styles

make sure your users are up to date with your latest styles

## Usage 

```js
// require your styles
const requireStyles = require('@tradle/bot-require-styles')
// the styles which will be sent to your user in a tradle.StylesPack
const myStyles = require('./mystyles')

module.exports = function myStrategy (bot) {
  bot.use(requireStyles(myStyles))
  // your code..
}
```
