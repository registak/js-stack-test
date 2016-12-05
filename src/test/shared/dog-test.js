/* eslint-disable import/no-extraneous-dependencies, no-console */

import chai from 'chai';
// Sinonは スタブ (とその他もろもろ)を提供するテスティングライブラリ
import { stub } from 'sinon';
// Chaiのアサーションを使うためのChaiプラグイン
import sinonChai from 'sinon-chai';
import { describe, it } from 'mocha';
import Dog from '../../shared/dog';

chai.should();
chai.use(sinonChai);

describe('Shared', () => {
  describe('Dog', () => {
    describe('barkInConsole', () => {
      it('should print a bark string with its name', () => {
        // console.log()が 正常に呼び出されるかどうかであり、テストしたいのはどのようなパラメーターが呼び出されるのか
        // stub(console, 'log')がconsole.logを無効化し監視
        stub(console, 'log');
        new Dog('Test Toby').barkInConsole();
        // 新たなconsole.logが用意し呼び出す
        console.log.should.have.been.calledWith('Wah wah, I am Test Toby');
        // 最後にrestoreでconsole.logを元に戻している
        console.log.restore();
      });
    });
  });
});
