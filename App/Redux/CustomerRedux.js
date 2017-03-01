import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  addOrder: ['order'],
  closeTab: [],
  renderTabView: ['display'],
  setBeers: ['beers'],
  setShots: ['shots'],
  setCocktails: ['cocktails'],
  setAddIns: ['addIns']
})

export const customerTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  paidOrders: [],
  displayTab: false,
  beers: [],
  shots: [],
  cocktails: [],
  addIns: []
})

/* ------------- Reducers ------------- */

export const addOrder = (state: Object, { order }: Object) =>
  Immutable.merge(state, { paidOrders: state.paidOrders.concat(order) })

export const closeTab = () => INITIAL_STATE

export const renderTabView = (state: Object, { display }: Boolean) =>
  Immutable.merge(state, { displayTab: display })

export const setBeers = (state: Object, { beers }: Object) =>
  Immutable.merge(state, { beers: beers })

export const setShots = (state: Object, { shots }: Object) =>
  Immutable.merge(state, { shots: shots })

export const setCocktails = (state: Object, { cocktails }: Object) =>
  Immutable.merge(state, { cocktails: cocktails })

export const setAddIns = (state: Object, { addIns }: Object) =>
  Immutable.merge(state, { addIns: addIns })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_ORDER]: addOrder,
  [Types.CLOSE_TAB]: closeTab,
  [Types.RENDER_TAB_VIEW]: renderTabView,
  [Types.SET_BEERS]: setBeers,
  [Types.SET_SHOTS]: setShots,
  [Types.SET_COCKTAILS]: setCocktails,
  [Types.SET_ADDINS]: setAddIns
})
