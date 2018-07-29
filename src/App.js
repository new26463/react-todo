import React, { Component } from 'react';
import InputTodo from './InputTodo';
import ListTodo from './ListTodo';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    constructor(props){
        super(props)
        this.state ={
            todoItems : [],
            num : ''
        }
        this.addTodo = this.addTodo.bind(this)
        this.deleteTodo = this.deleteTodo.bind(this)
        this.toggle = this.toggle.bind(this)
        // this.clickUpdate = this.clickUpdate.bind(this)
        // this.updateTodo = this.updateTodo.bind(this)
    }

    componentDidMount = () => {
        let dataStorage = JSON.parse(localStorage.getItem("key"))
        if(dataStorage){
            this.setState({
                todoItems : this.state.todoItems.concat(dataStorage)
                // todoItems : [...this.state.todoItems , dataStorage]
            })
        }
    }

    addTodo = (title , discription , date , id) => {
        if(title === "" && discription === "" && date === "")
            return false
        let oldData = JSON.parse(localStorage.getItem('key')) || []
        // let dataTodo = {title:title , discription:discription , date:date , id:id , checkedStatus:false , statusUpdate:false}
        let dataTodo = {title:title , discription:discription , date:date , id:id , checkedStatus:false }

        this.setState({
            todoItems : this.state.todoItems.concat(dataTodo)
        })
        oldData.push(dataTodo)
        localStorage.setItem("key",JSON.stringify(oldData))

    }

    deleteTodo = (id) =>{
        console.log(id)
        let newData = this.state.todoItems.filter(item => {
            return  item.id !== id;
        });
        this.setState({
            todoItems: [].concat(newData)
        });
        localStorage.setItem("key",JSON.stringify(newData))
    }

    // clickUpdate = (id,num) =>{
    //     let newData = this.state.todoItems.map(item =>{
    //         if(id === item.id){
    //             console.log(num)
    //             item.statusUpdate = true
    //             this.setState({
    //                 todoItems : [...this.state.todoItems , item],
    //                 num : num
    //             })
    //         }
    //     })
    // }
    //
    // updateTodo = (id,data) =>{
    //     let newData = this.state.todoItems.map(item =>{
    //         if(id === item.id){
    //             item.statusUpdate = false
    //             this.setState({
    //                 num : ''
    //             })
    //         }
    //     })
    // }

    toggle = (id) =>{
        let checked = this.state.todoItems.map(item => {
            if(id === item.id){
                item.checkedStatus = !item.checkedStatus
            }
            return item
        })
        this.setState({
            todoItems : [].concat(checked)
        })
        localStorage.setItem("key",JSON.stringify(checked))
    }

    // เหลืออัพเดท

    render() {
        let {todoItems , num} = this.state
        return (
            <div className="container padding">
                <div className="row">
                    <div className="col-md-4 offset-md-1">
                        {/*<InputTodo onAdd={this.addTodo} dataUpdate={num ? todoItems[num] : ''} update={this.updateTodo}/>*/}
                        <InputTodo onAdd={this.addTodo}/>
                    </div>
                    <div className="col-md-6">
                        {/*<ListTodo items={todoItems} toggle={this.toggle} deleteTodo={this.deleteTodo} clickUpdate={this.clickUpdate} />*/}
                        <ListTodo items={todoItems} toggle={this.toggle} deleteTodo={this.deleteTodo} />

                    </div>
                    <div className="offset-md-1"></div>
                </div>
            </div>
        );
    }
}

export default App;
