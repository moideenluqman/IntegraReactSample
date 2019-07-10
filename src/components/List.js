import React from 'react';
import {Add} from './Add'
// import logo from './logo.svg';
// import './List.css';
class List extends React.Component {
  constructor(){
    super();
    this.state={data:[{
      name:"Luqman",
      age: 26,
      mobileNumber:9895008245
    },
    {
      name:"Iqbal",
      age: 23,
      mobileNumber:989500823
    },
    {
      name:"Said",
      age: 26,
      mobileNumber:898595989
    }]}
  }


  render() {
    return (
      <div className="List">
  List 
  <table>
    <thead>
    <tr>
      <th>
        Name
      </th>
      <th>
        Age
      </th>
      <th>
        Mobile
      </th>
    </tr>
    </thead>
    <tbody>
    {this.state.data.map((data,index)=>(<tr key={index}>
        <td>{data.name}</td>
        <td>{data.age}</td>
        <td>{data.mobileNumber}</td>
        </tr>))}
    
    </tbody>
  </table>

  <h1>Add</h1>
  <Add onAddClick={this.addItem} ></Add>
      </div>
    );
  }

  addItem=(obj)=>{
      this.setState({
        data:[
            ...this.state.data,
            obj
        ]
      })

  }
}


export { List};
