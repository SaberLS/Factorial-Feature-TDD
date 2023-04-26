const Calculate = {}

Calculate.factorial = (input) => {
  if(input === 0){
    return 1;
  }else if(input < 0){
    throw new Error('Parameter is lower than 0');
  }

  for(let i=input-1; i>=1; i--){
    input=input*i;
  }
  return input;
}

module.exports = Calculate;


