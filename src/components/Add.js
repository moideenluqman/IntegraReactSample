import React from 'react';
// import logo from './logo.svg';
// import './Add.css';


class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '',
    mobileNumber: '',
  age:'',
valid:{
  form:false,
  name:false,
  mobileNumber:false
}};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event,label) {
    if(label=='name')
    this.setState({name: event.target.value},()=>{
      //validation
      this.setState({
        valid:{
          ...this.state.valid,
          name:this.state.name.match(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/i)?true:false,
        
        }
      },()=>{
        this.validateForm()
      })
    });
    else if(label=='mobileNumber')
    this.setState({mobileNumber: event.target.value},()=>{
      this.setState({
        valid:{
          ...this.state.valid,

          mobileNumber:this.state.mobileNumber.match(/^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/)?true:false
        }
      },()=>{
        this.validateForm()
      })
    });
    else if(label=='age')
    this.setState({age: event.target.value},()=>{
      this.setState({
        valid:{
          ...this.state.valid,
          age:(this.state.age>0 && this.state.age<=125)
        }
      },()=>{
        this.validateForm()
      })
    });
  }

  handleSubmit(event) {

    if(this.state.valid.form)
  {  this.props.onAddClick(this.state);
    event.preventDefault();}
  }

  validateForm(){
    

    this.setState({
      valid:{
        ...this.state.valid,        
        form: this.state.valid.name && this.state.valid.mobileNumber && this.state.valid.age
      }
    },()=>{
      console.log("this.state.valid.name->",this.state.valid.name);
    console.log("this.state.valid.mobileNumber->",this.state.valid.mobileNumber);
    console.log("this.state.valid.age->",this.state.valid.age);
    console.log("this.state.valid.form->",this.state.valid.form);
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.name} onChange={(event)=>this.handleChange(event,'name')} />
        </label>
        <label>
          Age:
          <input type="number" value={this.state.age}  onChange={(event)=>this.handleChange(event,'age')} />
        </label>
        <label>
          Mobile Number:
          <input type="text" value={this.state.mobileNumber} onChange={(event)=>this.handleChange(event,'mobileNumber')}/>
        </label>
        <input type="submit" value="Submit" disabled={!this.state.valid.form}/>
      </form>
    );
  }
}
export {Add}
