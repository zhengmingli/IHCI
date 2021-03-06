import { injectReducer } from '../reducers'

export const user = (store) => ({
  path : 'user',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {

      const component = require('../containers/User/user-auth').default

      cb(null, component)
    }, 'user')
  }
})


export const signUp = (store) => ({
  path : 'SignUp',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const component = require('../containers/User/sign-up').default
      cb(null, component)
    }, 'signUp')
  }
})


export const login = (store) => ({
    path: 'login',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            const component = require('../containers/User/login').default
            cb(null, component)
        }, 'login')
    }
})

export const powerControl = (store) => ({
  path : 'powerControl',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const component = require('../containers/User/power-control').default
      cb(null, component)
    }, 'powerControl')
  }
})

