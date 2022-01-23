import React, { Component } from 'react'; 
import Posts from './posts.component'

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

    handleChange(event) {
        const _name = event.target.name;
        const _value = event.target.value;
        this.setState({ [_name]: _value});
    }
    handleSubmit(event) {
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
                    <input type="textbox" onChange={this.handleChange} name="content"/>
                </label>

                <label>
                    Post Comment
                    <input type="textbox" onChange={this.handleChange} name="comment"/>
                </label>
                
                <label>
                    <input  type="submit" value="Submit" className='btn btn-primary'/>
                </label>
            </form>
            <hr/>


            <div className='d-flex flex-column'>
                {/* <h3>Post Title: {this.state.title}</h3>
                <p>Post Date: {this.state.date}</p>
                <p>Post Content: {this.state.content}</p>
                <p>Post Comment: {this.state.comment}</p> */}
                
                <Posts 
                postTitle = {this.state.title}
                postDate = {this.state.date}
                postContent = {this.state.content}
                postComment = {this.state.comment}/>
                
            </div>
           
            </>
        );
        else
        return(null);
    }
}
 
export default Form;