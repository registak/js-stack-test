// @flow

// Flowにこのファイルの型検査をしてほしいことを伝える
class Dog {
  constructor(name: string) {
    this.name = name;
  }

  bark() {
    return `Wah wah, I am ${this.name}`;
  }

  barkInConsole() {
    /* for test */
    /* eslint-disable no-console */
    console.log(this.bark());
    /* eslint-enable no-console */
  }
  /*
   console.logをスタブするのは通常はバッドプラクティス。
   もしテストが失敗するとconsole.log.restore()が呼び出されず、
   そのためconsole.logはターミナルで残りのコマンドをテストしている間中ずっと壊れてしまったままとなる
   例として単純なアプリでスタブを説明するためだけのもの
   */

}

export default Dog;
