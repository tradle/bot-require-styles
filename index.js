const extend = require('xtend/mutable')
const keepFresh = require('@tradle/bot-keep-fresh')

/**
 * If styles change, we want to apprise our users with a stylesPack
 * @param  {Array}      models
 * @return {Function}   strategy installation function
 */
module.exports = function keepStylesFresh (styles) {
  return keepFresh({
    id: 'styles',
    item: styles,
    // in proactive mode, the bot will update all known users on start
    // proactive: true,
    update: function update ({ bot, user, item }) {
      // send the latest styles to the user
      return bot.send({
        userId: user.id,
        object: extend({
          _t: 'tradle.StylesPack'
        }, item)
      })
    }
  })
}
