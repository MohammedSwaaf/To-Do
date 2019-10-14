import React, { Component } from 'react';
import './ToDo.css';
import swal from 'sweetalert';
class ToDo extends Component {
    constructor(prop) {
        super(prop);
        this.state = {
            data: '',
            Do: [],
            isChecked: false,
            changed: 'changed',
            change:'tasks'
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.addItems = this.addItems.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.checkBoxOnChange = this.checkBoxOnChange.bind(this);
    }

    // function for taking data from the users    
    onInputChange = ((e) => {
        e.preventDefault();
        this.setState({
            data: e.target.value
        })

    // function for add the tasks in the list
    })
    addItems = ((e) => {
        e.preventDefault();
        let items = this.state.data ;
        if (items.length === 0) {
            alert('Fuck off')
        }
        else {
            this.setState({
                data: '',
                Do: this.state.Do.concat(items)
            })
            document.getElementById('in').value = '';
        }  
    })

    // function for remove the tasks in the list
    removeItem = (index,e) =>{
        const toDoList = this.state.Do;
        toDoList.splice(index,1)
        this.setState({
            toDoList
        })
    }

    // function for determine u done of ur task or not yet !!!
    checkBoxOnChange = () =>{
        this.setState({
            isChecked : !this.state.isChecked,
            
        })
        if(!this.state.isChecked){
            swal('Congrtlation You are done of your task ');
        }else{
            swal('Oops!!')
        }
    }

    componentDidMount() {
        
      }

      componentDidUpdate() {
       
      }
   
    render() {
        
        return (
            <div className="ToDo">
                <h1 className="head">TO DO APP</h1>
                <form className='form-group'  >
                    <div className="addation">
                        <input tybe='text' id='in' className='action' onChange={this.onInputChange}
                         value={this.state.name} name='data' maxLength='50' placeholder='What you going to do ?' />
                         <button onClick={this.addItems} className=' btn'>ADD</button>
                    </div>
                </form>
                <div className="container">
                <ol className='content'>
                    {this.state.Do.map((toDo,i) => (
                        <li className={this.state.change} key={i}>{toDo}
                        <span onClick={e=>this.removeItem(i,e)}>×</span>
                        <input type="checkbox" onChange={this.checkBoxOnChange}  className="form-check-input" id="exampleCheck1"/></li>
                    ))}
                </ol>
                </div>
                
            </div>
        );
    }
}

export default ToDo;