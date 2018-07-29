import React, { Component } from 'react';
import './item.css'

class ItemTodo extends Component{
    constructor(props){
        super(props)
        this.state = {
            todo : []
        }
    }

    render(){
        // let {text , deleteTodo , clickUpdate , toggle , num} = this.props
        let {text , deleteTodo , toggle} = this.props

        let {todo} = this.state
        let itemClass = ""
        let checked = false
        if(text.checkedStatus === true){
            itemClass = "done "
            checked = true
        }else{
            itemClass = ""
        }
        return(
            <div>
                <input type="checkbox" onClick={() => toggle(text.id)}  defaultChecked={checked} />
                <span className={itemClass + "h5"}> {text.title} </span>
                <button type="button" className="close" onClick={()=> deleteTodo(text.id)} data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                {/*<button type="button" className="btn btn-link date_right" onClick={()=> clickUpdate(text.id , num)} >Edit</button>*/}
                <button type="button" className="btn btn-link date_right" >Edit</button>

                <hr />
                <span className={itemClass}> {text.discription} </span><br/>
                <span className={itemClass + "date_right"}> {text.date} </span>
            </div>
        )
    }
}

export default ItemTodo
