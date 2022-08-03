import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function Button(props) {


    return (
        <div className="d-flex flex-row p-2 w-25 justify-content-between">
            <FontAwesomeIcon onClick={props.completed}  icon={ faCheck } className= {props.completedButtonStyle ? "" : 'text-success'}/>
            <FontAwesomeIcon onClick={props.submitDel} icon={ faTrash } className="text-danger "/>
        </div>
    )
}

export default Button