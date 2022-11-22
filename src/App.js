import React, { useState } from 'react';
import {Button} from '@adobe/react-spectrum';
function App() {
  const [OperationEnCours,setOperationEnCours]=useState(0);

  const [resultat, setResultat] = useState(false);
  const [val1,setval1]=useState('');
  const [val2,setval2]=useState('');
  const [operation,setOperation]=useState("");
  const Ajouter=(valeur)=>{
    if (OperationEnCours) {
      setval2(val2+valeur);
    }else{
      setval1(val1+valeur);
    }
  }
  const Addoperation=(operation)=>{
    setOperationEnCours(true);
    setOperation(operation);
    
  }

  const clear=()=>{
    setval1("");
    setval2("");
    setResultat("");
    setOperation("");
    setOperationEnCours(false);
  }
  const calcul=()=>{
    switch (operation) {
      case "+":
        setResultat(parseInt(val1)+parseInt(val2))
        break;
      case "-":
       setResultat(parseInt(val1)-parseInt(val2))
       break; 
      case "X":
       setResultat(parseInt(val1)*parseInt(val2))
      break;
      case "/":
        setResultat(parseInt(val1)/parseInt(val2))
       break;
      default:
        console.log("erreur")
        break;
    }
  }
  return (
    <div >
        {val1}{operation}{val2}
      <br />
    <Button
          onPress={() => Ajouter("1")}
          
      >
        1
      </Button>      
      <Button
          onPress={() => Ajouter("2")}
          
      >
        2
      </Button>   
      <Button
          onPress={() => Ajouter("3")}
          
      >
        3
      </Button>   
      <Button
          onPress={() => Addoperation("+")}
          
      >
        +
      </Button>  
      <br />
      <Button
          onPress={() => Ajouter("4")}
          
      >
        4
      </Button>       
       <Button
          onPress={() => Ajouter("5")}
          
      >
        5
      </Button>        
      <Button
          onPress={() => Ajouter("6")}
          
      >
        6
      </Button>  
      <Button
          onPress={() => Addoperation("X")}
          
      >
        *
      </Button>
      <br />
      <Button
          onPress={() => Ajouter("7")}
          
      >
        7
      </Button>        <Button
          onPress={() => Ajouter("8")}
          
      >
        8
      </Button>        
      <Button
          onPress={() => Ajouter("9")}
          
      >
        9
      </Button>  
      <Button
          onPress={() => Addoperation("/")}
          
      >
        /
      </Button>
      <br/>
      <Button
          onPress={() => clear()}
          
      >
       C
      </Button>  
      <Button
          onPress={() => Ajouter("0")}
          
      >
        0
      </Button>  

 
      <Button
          onPress={() => calcul()}
          
      >
        =
      </Button>  
      <br />
      {resultat}
    </div>


  );
}

export default App;
