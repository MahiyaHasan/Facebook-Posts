import React, { Component } from 'react'; 


class Form extends Component {
    constructor(props) {
    super(props);
    this.state = {
      title: '',
      date: '',
      content: '',
      comment: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    passData =()=>{
        this.props.dataChanger( {title: this.state.title, date: this.state.date,
        content: this.state.content, comment: this.state.comment} );
    } 
    handleChange(event) {
        const _name = event.target.name;
        const _value = event.target.value;
        this.setState({ [_name]: _value});
    }
    handleSubmit(event) {
        this.passData();
        event.preventDefault();
    } 
    render() { 
        if(this.props.renderForm === true)
        return (
            <>
            <hr/>
            <form onSubmit={this.handleSubmit} 
            className='d-flex  justify-content-between'>

                <label>
                   Post Title:
                    <input type="text" onChange={this.handleChange} name="title"/>
                </label>

                <label>
                    Post Date
                    <input type="date" onChange={this.handleChange} name="date"/>
                </label>

                <label>
                    Post Content
                    <input type="text" onChange={this.handleChange} name="content"/>
                </label>

                <label>
                    Post Comment
                    <input type="text" onChange={this.handleChange} name="comment"/>
                </label>
                
                <label>
                    <input  type="submit" value="Submit" className='btn btn-primary'/>
                </label>
            </form>
            <hr/>
            </>
        );
        else
        return(null);
    }
}
 
export default Form;