

// const myAlert = () => {
//     const x = "Help! I think I found a clue!";
//     const alerter = () => {
//       alert(x);
//     };
//     alerter();
//   };
  
//alert()

  const myAlert = () => {
    const x = "Help! I think I found a clue!";
    const alerter = () => {
      alert(x);
    };
  
    setTimeout(alerter, 1000)
    console.log('what happens first? this log or the alert?')
  };

myAlert() //log




const myAlert2 = () => {
    const x = "Help! I think I found a clue!";
    let count = 0;
    const alerter = () => {
      alert(`${x} ${++count}`);
    };
  
    return alerter;
  };
  
  const funcAlert = myAlert2(); 
  const funcAlert2 = myAlert2(); 
  funcAlert(); // return thr body of the function alerter
  // "Help! I think I found a clue!" 1
  funcAlert();
  // "Help! I think I found a clue!" 2
  //Porque solo se inicia la funcion del hijo y no la del padre Scope
  funcAlert2();
  // "Help! I think I found a clue!" 1
  funcAlert2();
  // "Help! I think I found a clue!" 2



  const newClue = (name) => {
    const length = name.length;
  
    return (weapon) => {
      let clue = length + weapon.length;
      return !!(clue % 2);
    };
  
  };

  const didGreenDoItWithA = newClue('Grenn')
  console.log(didGreen); //function expecting weapon
//(weapon) => {
//     let clue = length + weapon.length;
//     return !!(clue % 2);
//   };

  // length = 5

didGreenDoItWithA('candlestick') //false
  //weapon.length = 11
  //clue = 5 + 11
  // !!(16 % 2) // !!(0)

