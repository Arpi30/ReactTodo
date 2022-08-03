import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './card.css'


function Card(props) {

    let id = props.id;
    let item = props.item;
    let desc = props.desc;
    let datum = props.datum;
    let todoItemEditing = props. todoItemEditing;
    let todoDescEditing = props.todoDescEditing;


 

    return (
          <div className="w-75 p-1">
            {todoItemEditing == id ? (
                <div>
                    <input 
                    value={props.editingItemText}  
                    onChange={props.itemTextChange}>
                    </input>
                    <FontAwesomeIcon className="ms-2 " onClick={props.submitText} icon={ faCheck }/>
                </div>
            ) : (
                <div className='d-flex align-items-center'>
                    <FontAwesomeIcon className="mx-2 fa-xs" onClick={props.itemEditingClick} icon={ faPencil }/>
                    <div className=" m-0 fw-bold text">{item}</div>
                </div>
            )}

            {todoDescEditing == id ? (
                <div>
                    <input 
                    value={props.editingDescText} 
                    onChange={props.descTextChange}>
                    </input>
                    <FontAwesomeIcon className="ms-2" onClick={props.submitDesc} icon={ faCheck }/>
                </div>
              ) : (
                <div className='d-flex align-items-center'>
                  <FontAwesomeIcon className="mx-2 fa-xs" onClick={props.descEditingClick} icon={ faPencil }/>
                  <div className="m-0 text">{desc}</div>
                </div>
              )}
              <div>{datum}</div>
          </div>
      )
    
}


export default Card