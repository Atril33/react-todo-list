import { useState } from "react";

const ItemInputField = (props) => {
  
 

    const { value, change } = props;

    return (
        <input type="text" placeholder="Add a new item" value={value} onChange={change} />
    )
}

export default ItemInputField;