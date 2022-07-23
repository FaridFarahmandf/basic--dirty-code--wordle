import { useState } from "react";
import SixthFormList from "./SixthFormList";
import useForm from "../custom hook/useForm";
import LayoutForm from "../Form Layout/LayoutForm";
const FifthFormList = ({ fieldsetDisable, setFieldSetDisable }) => {
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

  const [, setFifthFieldSet] = useState("");
  const [sixthFieldSet, setSixthFieldSet] = useState("disable");
  const submitHandler = (e) => {
    e.preventDefault();
    setFieldSetDisable("disable");
    const defaultWordArr = defaultWord.split("").toString();
    if (defaultWordArr === newArr.toString()) {
      alert("WOOOOOOOOOOOOOOOW");
      setFifthFieldSet("disable");
    } else {
      setFifthFieldSet("disable");
      setSixthFieldSet("");
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
      <SixthFormList
        fieldsetDisable={sixthFieldSet}
        setFieldSetDisable={setSixthFieldSet}
      />
    </>
  );
};

export default FifthFormList;
