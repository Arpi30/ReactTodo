
import React from "react";
import {Div, Formdesigne, Input, Button} from '../styledComponents/StyledComponent'




function Form(props) {
    return(
        <Div> 
          <Formdesigne onSubmit={props.submit}>
            <Input name='item' value={props.item} type='text' placeholder='Add New Item' onChange={props.change}></Input>
            <Input name='desc' value={props.desc} type='text' placeholder='Add Desc' onChange={props.change}></Input>
            <div className="d-flex">
              <Input name= 'datum' value={props.datum} type='date' onChange={props.change}></Input>
              <Button type='submit'>+</Button>
            </div>
          </Formdesigne>
        </Div>
    )
}


export default Form