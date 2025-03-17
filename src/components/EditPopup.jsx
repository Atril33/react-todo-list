import { useState } from "react";

const EditPopup = (props) => {
  const [newValue, setNewValue] = useState(props.itemValue);

  const handleInputChange = (e) => {
    setNewValue(e.target.value);
    props.onUpdate(newValue);
  };

  return (
    <div className="edit-popup">
      <h3>
        Current value <strong>{props.itemValue}</strong>
      </h3>
      <input
        type="text"
        placeholder="Enter new value"
        value={newValue} 
        onChange={handleInputChange}
      />
      <button>Update</button>
    </div>
  );
};

export default EditPopup;
