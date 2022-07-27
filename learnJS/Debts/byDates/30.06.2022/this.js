'use strict'

class Name {
  constructor(props) {
  super(props)

this.name = 'Igor'

  }

logName1 = () => {
    console.log(this.name) // undefined
}

logName2() {
    console.log(this.name) // Igor
}

logName3 = () => {
    return function() {
      console.log(this.name) // undefined
  }
}

logName4() {
    return name = () => {
      console.log(this.name) // Igor
    }
  }
}

