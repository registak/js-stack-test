class Dog {
  constructor(name) {
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

}

export default Dog;
