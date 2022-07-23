import {  useState } from "react";
import ThirdFormList from "./ThirdFormList";
import useForm from "../custom hook/useForm";
import LayoutForm from "../Form Layout/LayoutForm";
const SecondFormList = ({fieldsetDisable, setFieldSetDisable}) => {
  const [
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
  ] = useForm();
  const [,setSecondFieldset] = useState("");
  const [thirdFieldSet,setThirdFieldSet] = useState("disable");

  const submitHandler = (e) => {
    e.preventDefault();
    setFieldSetDisable("disable")
      const defaultWordArr = defaultWord.split("").toString();
      if (defaultWordArr === newArr.toString()) {
        alert("WOOOOOOOOOOOOOOOW");
        setSecondFieldset("disable");
        setThirdFieldSet("disable") 
      }else{
        setThirdFieldSet("");
      }
      submitHookHandler(newArr);
    
  };
  return (
      <>
        <LayoutForm
        submitHandler={submitHandler}
        firstFieldSet={fieldsetDisable}
        firstWord={firstWord}
        default1Style={default1Style}
        setFirstWord={setFirstWord}
        secondWord={secondWord}
        default2Style={default2Style}
        setSecondWord={setSecondWord}
        thirdWord={thirdWord}
        default3Style={default3Style}
        setThirdWord={setThirdWord}
        fourthWord={fourthWord}
        default4Style={default4Style}
        setFourthWord={setFourthWord}
        fifthWord={fifthWord}
        default5Style={default5Style}
        setFifthWord={setFifthWord}
      />
        <ThirdFormList fieldsetDisable={thirdFieldSet} setFieldSetDisable={setThirdFieldSet}/>
      </>
    
  );
};

export default SecondFormList;
