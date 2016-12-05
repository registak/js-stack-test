// @flow
import * as Immutable from 'immutable';
import { MAKE_BARK } from '../actions/dog-actions';

// アプリケーションの初期状態を定義
const initialState = Immutable.Map({
  hasBarked: false,
});
// どのアクションが実行されたかによって状態を作る関数を定義
const dogReducer = (state: Object = initialState, action: Object) => {
  switch (action.type) {
    case MAKE_BARK:
      return state.set('hasBarked', action.payload);
    default:
      return state;
  }
};

export default dogReducer;
