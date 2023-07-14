import { useRef, forwardRef, useImperativeHandle } from "react";

export const UseImperativeHandleRef = () => {
  const methodsRef = useRef();

  const focus = () => methodsRef.current.focus();
  const blur = () => methodsRef.current.blur();

  return (
    <>
      <FocusableInput ref={methodsRef} />
      <button onClick={focus}>Focus input</button>
      <button onClick={blur}>Blur input</button>
    </>
  );
};

const FocusableInput = forwardRef(function (props, ref) {
  const inputRef = useRef();

  useImperativeHandle(
    ref,
    function () {
      return {
        focus() {
          inputRef.current.focus();
        },
        blur() {
          inputRef.current.blur();
        },
      };
    },
    []
  );

  return <input type="text" ref={inputRef} />;
});
