// @flow

// Promiseなど最新のES仕様を使う
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
// react-reduxがReactアプリにstoreを渡せるようにするため、アプリ全体を<Provider>コンポーネントで包む
import { Provider } from 'react-redux';
import dogReducer from './reducers/dog-reducer';
import BarkMessage from './containers/bark-message';
import BarkButton from './containers/bark-button';
/*
components Reduxの状態について何も知らないReactコンポーネント
containers 状態を知っていて、componentsにconnectできる
*/


// Reduxの関数createStoreがstoreを作る
// combineReducers関数でreducerを集める(この例では1つだけ)
const store = createStore(combineReducers({
  dog: dogReducer,
}));
/* コンポーネントは1つだけしか子要素を持てない。
そのためここでは<div>要素を作り、
この<div>要素にアプリの2つの重要な要素であるBarkMessageとBarkButtonを持たせる
*/
ReactDOM.render(
  <Provider store={store}>
    <div>
      <BarkMessage />
      <BarkButton />
    </div>
  </Provider>
  , document.querySelector('.app'),
);
