import {useState} from "react";

export default (defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  const onchange = (e) => {
    const {
      target: {value} 
      } = e;
      setValue(value)
    };
    return { value, onchange };
} 