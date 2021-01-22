 const drivers =  ["Milo", "Otis", "Garfield"]

  function destructivelyAppendDriver(name){
      drivers.push(name)
  }
  function  destructivelyPrependDriver(name){
      drivers.unshift(name)
  }
  function  destructivelyRemoveLastDriver(){
      drivers.pop()
  }
  function destructivelyRemoveFirstDriver(){
      drivers.shift()
  }
  function  appendDriver(name){
    const newArray =  [...drivers,name]
    return newArray
  }
  function prependDriver(name){
      let newDriver = [name,...drivers]
      return newDriver
  }
  function removeLastDriver(){
     const s =  drivers.slice(0,2)
     return s 
  }
  function removeFirstDriver(){
      const x = drivers.slice(1)
      return x
  }
 
 
