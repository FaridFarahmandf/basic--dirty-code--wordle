import { useState } from "react";
import FourthFormList from "./FourthFormList";
import useForm from "../custom hook/useForm";
import LayoutForm from "../Form Layout/LayoutForm";
const ThirdFormList = ({ fieldsetDisable, setFieldSetDisable }) => {
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
    submitHookHandler,
  ] = useForm();
  const [, setThirdFieldSet] = useState("");
  const [fourthFieldSet, setFourthFieldSet] = useState("disable");

  const submitHandler = (e) => {
    e.preventDefault();
    setFieldSetDisable("disable");
    const defaultWordArr = defaultWord.split("").toString();
    if (defaultWordArr === newArr.toString()) {
      alert("WOOOOOOOOOOOOOOOW");
      setThirdFieldSet("disable");
    } else {
      setFourthFieldSet("");
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
      <FourthFormList
        fieldsetDisable={fourthFieldSet}
        setFieldSetDisable={setFourthFieldSet}
      />
    </>
  );
};

export default ThirdFormList;
