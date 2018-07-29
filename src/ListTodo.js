import React, { Component } from 'react';
import ItemTodo from './ItemTodo'

class ListTodo extends Component{
    render(){
        // let {items , deleteTodo , clickUpdate , toggle , num} = this.props
        let {items , deleteTodo , toggle } = this.props

        return(
            <div>
                <ul className="list-group">
                    {
                        items.map((todo,index) => {
                            {/*return <li className="list-group-item" key={index}><ItemTodo text={todo} toggle={toggle} num={index} deleteTodo={deleteTodo} clickUpdate={clickUpdate} /></li>*/}
                            return <li className="list-group-item" key={index}><ItemTodo text={todo} toggle={toggle} deleteTodo={deleteTodo} /></li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default ListTodo
