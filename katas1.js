
//01 ATIVIDADE
function oneThroughTwenty(){
  let meuRetorno = []
  for(let contador = 1;contador <=20; contador++){
  meuRetorno.push(contador)
    }
  return meuRetorno 
    }
  console.log(oneThroughTwenty())
    
  //02 ATIVIDADE
  function evensToTwenty(){
      let meuRetorno = []
      
      for(let contador = 1;contador <=20; contador++){
          if(contador % 2 == 0){
              meuRetorno.push(contador)    
          }
            
      }
      return meuRetorno 
      
      }
      console.log(evensToTwenty())
  
  
      //03 ATIVIDADE
      function oddsToTwenty(){
          let meuRetorno = []
          
          for(let contador = 1;contador <=20; contador++){
              if(contador % 2 == 1){
                  meuRetorno.push(contador)    
              }
                   
          }
          return meuRetorno 
                    }
          console.log(oddsToTwenty())
  
  
          //04 ATIVIDADE
          function multiplesOfFive(){
              let meuRetorno = []
              
              for(let contador = 1;contador <=100; contador++){
                  if(contador % 5 == 0){
                      meuRetorno.push(contador)    
                  }
                            
              }
              return meuRetorno 
                }
              console.log(multiplesOfFive())
  
              //05 ATIVIDADE
    
              function squareNumbers(){
                  let meuRetorno = []
                  
                  for(let contador = 1;contador <=10; contador++){
                          meuRetorno.push(contador * contador)    
                      }
                  return meuRetorno 
                  
                  }
                  console.log(squareNumbers())
                  
                  //06 ATIVIDADE
  function countingBackwards(){
      let meuRetorno = []
      for(let contador = 20;contador >=1; contador--){
      meuRetorno.push(contador)
          }
      return meuRetorno 
            }
      console.log(countingBackwards())
  
      // 07 ATIVIDADE
  
     
      function evenNumbersBackwards(){
          let meuRetorno = []
          
          for(let contador = 20;contador >=1; contador--){
              if(contador % 2  == 0 ){
                  meuRetorno.push(contador)    
              }
                
          }
          return meuRetorno 
           }
             console.log(evenNumbersBackwards())
  
          //08 ATIVIDADE
  
           
      function oddNumbersBackwards(){
          let meuRetorno = []
          
          for(let contador = 20;contador >=1; contador--){
              if(contador % 2  == 1 ){
                  meuRetorno.push(contador)    
              }
          }
          return meuRetorno 
          }
   
          console.log(oddNumbersBackwards())
  
          //09 ATIVIDADE
  
           
      function multiplesOfFiveBackwards(){
          let meuRetorno = []
          
          for(let contador = 100;contador >=1; contador--){
              if(contador % 5  == 0 ){
                  meuRetorno.push(contador)    
              }
          
          }
          return meuRetorno 
          }
   
          console.log(multiplesOfFiveBackwards())
  
  
          //10 ATIVIDADE
  
          function squareNumbersBackwards(){
              let meuRetorno = []
              
              for(let contador = 10;contador >=1; contador--){
              
                      meuRetorno.push(contador * contador)    
                  
              
              
              }
              return meuRetorno 
              
              }
              console.log(squareNumbersBackwards())
