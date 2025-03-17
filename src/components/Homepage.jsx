import ItemInputField from './ItemInputField';
import AddItemButton from './AddItemButton';
import DeleteButton from './DeleteButton';
import EditItemButton from './EditItemButton';
import { useState, useEffect } from 'react';
import EditPopup from './EditPopup';

const HomePage = () => {

  const [inputValue, setInputValue] = useState('');
  const [allTasks, setAllTasks] = useState(JSON.parse(localStorage.getItem('task')) || []);
  const [currentPopup, setCurrentPopup] = useState(false);
  const [currentValue, setCurrentValue] = useState('');
  const [newValue, setNewValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const taskUpdate = () => {
    const updatedTasks = [...allTasks, inputValue];
    setAllTasks(updatedTasks); 
    localStorage.setItem('task', JSON.stringify(updatedTasks)); 
  }

  const handleAddItem = () => {
    if (!inputValue) return;
    taskUpdate(); 
    setInputValue(''); 
  }

  const handleDelete = (index) => {
    if (allTasks.length === 0) return;
    const updatedTasks = [...allTasks]; 
    updatedTasks.splice(index, 1); 
    setAllTasks(updatedTasks); 
    localStorage.setItem('task', JSON.stringify(updatedTasks)); 
  }

  const handleEdit = (index) => {
   let currentValue = allTasks[index];
    setCurrentValue(currentValue);
    setCurrentPopup(true)
  }

  const handleUpdate = (newValue) => {
    const UpdatedTasks = [...allTasks];
    UpdatedTasks.splice(newValue, 1, newValue);
    setAllTasks(UpdatedTasks);
    localStorage.setItem('task', JSON.stringify(UpdatedTasks));
  }

  return (
    <>
      <h1>Home Page</h1>
      <ItemInputField input={inputValue} change={handleInputChange} />
      <AddItemButton click={handleAddItem} />    

      <ul className="all-task-item-list">
        {
          allTasks.map((item, index) => (
            <li key={index}>
              {item}  
              <DeleteButton click={() => handleDelete(index)} />
              <EditItemButton click={() => handleEdit(index)} />
            </li>
          ))
        }
      </ul>
      {currentPopup && <EditPopup itemValue={currentValue} onUpdate={handleUpdate} />}
    </>
  );
}

export default HomePage;
