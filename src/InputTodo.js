import React, { Component } from 'react';
const uuidv1 = require('uuid/v1');

class InputTodo extends Component{
    constructor(props){
        super(props)
        this.state ={
            title : "",
            discription : "",
            date : "",
            id : ""
        }
        this.addClick = this.addClick.bind(this)
        // this.addUpdate = this.addUpdate.bind(this)
        // this.updateInput = this.updateInput.bind(this)
    }

    addClick(){
        let {onAdd} = this.props
        let id = uuidv1()
        onAdd(this.state.title , this.state.discription , this.state.date , id)
        this.setState({
            title : "",
            discription : "",
            date : "",
            id : ""
        })

    }

    // addUpdate(id){
    //     this.setState({
    //         title:this.state.title,
    //         discription:this.state.discription,
    //         date:this.state.date,
    //         id:this.state.id,
    //     })
    //     console.log(this.props.dataUpdate.statusUpdate);
    //     this.props.update(id,this.state)
    // }

    // หาวิธีเอาคำเดิมมาแล้วแก้ได้ switch statusUpdate

    render(){
        let {title , discription , date , id} = this.state
        // let {dataUpdate} = this.props
        // if(dataUpdate){
        //     title = dataUpdate.title
        //     discription = dataUpdate.discription
        //     date = dataUpdate.date
        //     id = dataUpdate.id
        // }
        return(
            <div>
                <input placeholder="Title" name="title" className="form-control" value={title} onChange={(e)=>this.setState({title:e.target.value})} required="required" /><br/>
                <input placeholder="Discription" name="discription" className="form-control" value={discription} onChange={(e)=>this.setState({discription:e.target.value})} required="required" /><br/>
                <input type="date" placeholder="Date" name="date" className="form-control" value={date} onChange={(e)=>this.setState({date:e.target.value})} required="required" /><br/>
                {/*<button className="btn btn-success" onClick={()=> dataUpdate.statusUpdate ? this.addUpdate(id) : this.addClick()} >{dataUpdate.statusUpdate ? 'Update Todo' : 'Add Todo'}</button>*/}
                <button className="btn btn-success" onClick={()=> this.addClick()} >{'Add Todo'}</button>

                <hr className="hr_line" />
            </div>
        )
    }
}

export default InputTodo
