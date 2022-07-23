import { useState } from "react";
const useForm = () => {
  const defaultWord = "apple";
  const [default1Style, setDefault1Style] = useState("defaultInput");
  const [default2Style, setDefault2Style] = useState("defaultInput");
  const [default3Style, setDefault3Style] = useState("defaultInput");
  const [default4Style, setDefault4Style] = useState("defaultInput");
  const [default5Style, setDefault5Style] = useState("defaultInput");
  const [firstWord, setFirstWord] = useState("");
  const [secondWord, setSecondWord] = useState("");
  const [thirdWord, setThirdWord] = useState("");
  const [fourthWord, setFourthWord] = useState("");
  const [fifthWord, setFifthWord] = useState("");
  const newArr = [firstWord, secondWord, thirdWord, fourthWord, fifthWord];
  const submitHookHandler =newArr =>{
      for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] === defaultWord[i]) {
          switch (i) {
            case 0:
              setDefault1Style("success");
              break;
            case 1:
              setDefault2Style("success");
              break;
    
            case 2:
              setDefault3Style("success");
              break;
    
            case 3:
              setDefault4Style("success");
              break;
    
            case 4:
              setDefault5Style("success");
              break;
    
            default:
              break;
          }
        } else {
          for (let j = 0; j < newArr.length; j++) {
            if (newArr[i] === defaultWord[j]) {
    
              switch (i) {
                case 0:
                  setDefault1Style("close");
                  break;
                case 1:
                  setDefault2Style("close");
                  break;
    
                case 2:
                  setDefault3Style("close");
                  break;
    
                case 3:
                  setDefault4Style("close");
                  break;
    
                case 4:
                  setDefault5Style("close");
                  break;
    
                default:
                  break;
              }
              break;
            } else if (j === newArr.length - 1) {
              switch (i) {
                case 0:
                  setDefault1Style("wrong");
                  break;
                case 1:
                  setDefault2Style("wrong");
                  break;
    
                case 2:
                  setDefault3Style("wrong");
                  break;
    
                case 3:
                  setDefault4Style("wrong");
                  break;
    
                case 4:
                  setDefault5Style("wrong");
                  break;
    
                default:
                  break;
              }
            }
          }
        }
      }
  }

  return [
    defaultWord,
    firstWord,
    setFirstWord,
    secondWord,
    setSecondWord,
    thirdWord,
    setThirdWord,
    fourthWord,
    setFourthWord,
    fifthWord,
    setFifthWord,
    default1Style,
    default2Style,
    default3Style,
    default4Style,
    default5Style,
    newArr,
    submitHookHandler
  ];
};
export default useForm;
