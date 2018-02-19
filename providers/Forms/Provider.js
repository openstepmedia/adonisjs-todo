'use strict'

/*
 * Forms Provider
 *
 * Wrapper around: https://github.com/caolan/forms/tree/master/lib
 */

const { ServiceProvider } = require('@adonisjs/fold')

class FormsProvider extends ServiceProvider {
  
  /**
   * Registers providers
   *
   * @method register
   *
   * @return {void}
   */
  register () {
    this._registerProvider()
  }
  
  /**
   * When provider is booted, fold will call
   * this method
   *
   * @method boot
   *
   * @return {void}
   */
  boot () {
    this._bootProvider()
  }  
  
  /**
   * Registers provider under `Adonis/Addons/Forms`
   * namespace.
   *
   * @method _registerProvider
   *
   * @return {void}
   *
   * @private
   */
  _registerProvider () {
    this.app.bind('Adonis/Addons/Forms', () => {
      return require('forms')
    })
  }
  
  _bootProvider () {
    /**
     * Adding flash globals to the view layer, only when it is in use
     */
    try {
      require('./FormsGlobals')(this.app.use('Adonis/Src/View'))
    } catch (error) {}    
  }
  
}

module.exports = FormsProvider