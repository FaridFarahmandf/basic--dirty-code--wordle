const LayoutForm = ({submitHandler,firstFieldSet,firstWord,default1Style,setFirstWord,
default2Style,secondWord,setSecondWord,thirdWord,default3Style,setThirdWord
,fourthWord,default4Style,setFourthWord,fifthWord,default5Style,setFifthWord}) => {
  return (
    <div className="formWord">
      <form onSubmit={submitHandler}>
        <fieldset disabled={firstFieldSet}>
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
    </div>
  );
};

export default LayoutForm;
