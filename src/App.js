
import './App.css';
import './components/card.css'
import React, { useState, useEffect } from "react"
import Form from './components/form';
import Card from './components/card';
import Button from './components/button';
import {completedStyle, DivTodo, AddButtonstylePosition, AddButtonStyle} from './styledComponents/StyledComponent';
import { Home } from "./components/Home";
import Navbar from './components/navbar';
import { Archive } from "./components/archive";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  
  // New item state
  const [newItem, setNewItem] = useState({
    item: '',
    desc: '',
    datum: '',
    completed:false
  });
  //New item push into in array
  const [items, setItems] = useState([]);

  //Editing state, first give back the id second give back the text
  const [todoItemEditing, setTodoItemEditing] = useState(null);    ///TODO ID
  const [editingItemText, seteditingItemText] = useState('');       //TODO ItemText
  const [todoDescEditing, setDescItemEditing] = useState(null);    ///TODO ID
  const [editingDescText, setEditingDescText] = useState('');      //TODO Desc Text
  const [width, setWidth] = useState(window.innerWidth)           // innerWidth state
  const [showForm, setShowForm] = useState(false)

  //CREATE
  function addItem(e) {
    e.preventDefault();
    //push the newItem data in items array 
    setItems((prevList) => {
      return [...prevList, newItem]
    });
    setNewItem({
      item: '',
      desc: '',
      datum: '',
    })
  }

  // Resize Window and show or not the Form
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  function changeHandle(e) {
    //get input fields value and set in new item object
    const {name, value} = e.target;
    setNewItem((prev) => {
      //create a new object with the previous data
      return {...prev, [name]: value, id: Math.floor(Math.random() *1000)}
    })
    
  }

  //UPDATE
  //get the item with id
  function editItemText(id) {
    //in new variable get the items array copy and looping through.
    //if clicked id is same set the new text value
    const updatedText = [...items].map(item => {
      if(item.id === id){
        item.item = editingItemText
      }
      return item
    })
    //add the new text value for the items array
    setItems(updatedText)
    setTodoItemEditing(null)
    seteditingItemText('')
  }

  function editDescText(id) {
    const updatedDesc = [...items].map(item => {
      if(item.id === id){
        item.desc = editingDescText
      }
      return item
    })
    setItems(updatedDesc)
    setDescItemEditing(null)
    setEditingDescText('')
  }

  //DELETE
  //
  function deleteItemHandler(index) {
    //should not be included based on index 
    setItems(items.filter((item, i) => i != index))
  }

  //Completed
  function completedHandler(id) {
    const foundCompletedItem = [...items].map(item => {
      if(item.id == id){
        item.completed = !item.completed
      }
      return item
    })
    setItems(foundCompletedItem)
  }
return (
    <div className='d-flex flex-column align-items-center mt-5'>
      

      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Navbar />}>
              <Route path="home" element={<Home />} />
              <Route path="archive" element={<Archive />} />
            </Route>
        </Routes>
      </BrowserRouter>
      
      {width <= 425 ? (
        <AddButtonstylePosition onClick={() => setShowForm(!showForm)}>
          <AddButtonStyle></AddButtonStyle>
        </AddButtonstylePosition>
      ): (
        <Form 
        submit={(e) =>addItem(e)}
        change={changeHandle}
        item={newItem.item}
        desc={newItem.desc}
        datum={newItem.datum}
        />
        )}

      {showForm ? (
        <Form 
        submit={(e) =>addItem(e)}
        change={changeHandle}
        item={newItem.item}
        desc={newItem.desc}
        datum={newItem.datum}
        />
      ) : ('')}

      { /*READ*/ }
      {items.map((item, index) => (
        <div style={item.completed ? completedStyle : null} key={item.id} className='card d-flex flex-row justify-content-between align-items-center mt-2'>
              <Card 
                id={item.id}
                item={item.item}
                desc={item.desc}
                datum={item.datum}
                todoItemEditing={todoItemEditing}
                todoDescEditing={todoDescEditing}
                editingItemText={editingItemText}
                itemTextChange={(e) => seteditingItemText(e.target.value)}
                itemEditingClick={() => setTodoItemEditing(item.id)}
                editingDescText={editingDescText}
                descTextChange={(e) => setEditingDescText(e.target.value)}
                descEditingClick={() => setDescItemEditing(item.id)}
                submitDesc={() => editDescText(item.id)}
                submitText={() => editItemText(item.id)}
              />
          <Button 
            submitDel={() => deleteItemHandler(index)}
            completed={() => completedHandler(item.id)}
            completedButtonStyle={item.completed}
          />
        </div>

      ))}
    </div>
  );
}

export default App;



