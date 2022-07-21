import { useState } from "react";
import FifthFormList from "./FifthFormList";
const FourthFormList = ({fieldsetDisable,setFieldSetDisable}) => {
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

  const [fourthFieldSet, setFourthFieldSet] = useState("");
  const [fifthFieldSet, setFifthFieldSet] = useState("disable");
  const submitHandler = (e) => {
    e.preventDefault();
    setFieldSetDisable("disable")
      const newArr = [firstWord, secondWord, thirdWord, fourthWord, fifthWord];
      const defaultWordArr = defaultWord.split("").toString();
      if (defaultWordArr === newArr.toString()) {
        alert("WOOOOOOOOOOOOOOOW");
        setFourthFieldSet("disable");
      }else{
        setFourthFieldSet("disable");
        setFifthFieldSet("");
      }
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
    
  };
  return (
    <div className="formWord">
      <form onSubmit={submitHandler}>
        <fieldset disabled={fieldsetDisable}>
          <input
            type="text"
            value={firstWord}
            required
            className={default1Style}
            onChange={(e) => {
              if (e.target.value.length === 1 || e.target.value.length === 0) {
                setFirstWord(e.target.value);
              }
            }}
          />
          <input
            className={default2Style}
            type="text"
            value={secondWord}
            required
            onChange={(e) => {
              if (e.target.value.length === 1 || e.target.value.length === 0) {
                setSecondWord(e.target.value);
              }
            }}
          />
          <input
            type="text"
            value={thirdWord}
            required
            className={default3Style}
            onChange={(e) => {
              if (e.target.value.length === 1 || e.target.value.length === 0) {
                setThirdWord(e.target.value);
              }
            }}
          />
          <input
            type="text"
            value={fourthWord}
            required
            className={default4Style}
            onChange={(e) => {
              if (e.target.value.length === 1 || e.target.value.length === 0) {
                setFourthWord(e.target.value);
              }
            }}
          />
          <input
            type="text"
            value={fifthWord}
            required
            className={default5Style}
            onChange={(e) => {
              if (e.target.value.length === 1 || e.target.value.length === 0) {
                setFifthWord(e.target.value);
              }
            }}
          />
          <button>submit</button>
        </fieldset>
      </form>
      <FifthFormList fieldsetDisable={fifthFieldSet} setFieldSetDisable={setFifthFieldSet}/>
    </div>
  );
};

export default FourthFormList;
