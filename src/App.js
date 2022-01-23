import React, { Component } from 'react';
import Posts from './component/posts.component.js';
import Navbar from './component/navbar.component';
import Form from './component/form.component';
import Image1 from './assets/image1.jpg' 


class App extends React.Component {
state = {
  likecount : 0,
  dislikecount: 0,
  renderForm: false,
  posts: [
    {
    id: 1,
    title:'Some Random Title1', 
    date: '01 June 2021',
    imgSrc: Image1,
    content: ' ', 
    comment: 'Here is one comment1'},

    {
    id: 2,
    title:'Some Random Title2', 
    date: '02 June 2021',
    imgSrc: Image1, 
    content: 'Some short paragraph content2', 
    comment: 'Here is one comment2'},

    {
    id: 3,
    title:'Some Random Title3', 
    date: '03 June 2021',
    imgSrc: Image1, 
    content: 'Some short paragraph content3', 
    comment: 'Here is one comment3'},

    {
    id: 4,
    title:'Some Random Title4', 
    date: '04 June 2021',
    imgSrc: Image1, 
    content: 'Some short paragraph content4', 
    comment: 'Here is one comment4'},

    {
    id: 5,
    title:'Some Random Title5', 
    date: '05 June 2021',
    imgSrc: Image1, 
    content: 'Some short paragraph content5', 
    comment: 'Here is one comment5'}
 ]
}

likeCount = () =>  {
  const likecount = this.state.likecount + 1;
  this.setState({...this.state, likecount});
}

dislikeCount = () =>  {
  const dislikecount = this.state.dislikecount + 1;
  this.setState({...this.state, dislikecount});
}

// removePost = () => {
//   const posts = this.state.posts.filter(post => post.id != 2);
//   this.setState({...this.state.likecount, posts});
// }
deleteSelf = i => {
  let _posts=  this.state.posts.filter((item,index) => index!==i )
  this.setState({posts:_posts});
}

setRenderForm(){
  this.setState({...this.state, renderForm:true});
}
  render() { 
    return (
      <>

      <button className='btn btn-primary'
      onClick={()=>this.setRenderForm()}>
        Add post
      </button>
      

      <Form 
      experimentalFunction = {this.experimentalFunction}
      secondExpFunct = {this.secondExpFunct}
      renderForm = {this.state.renderForm}
      />


      <Navbar likecount={this.state.likecount}
      dislikecount={this.state.dislikecount}/>

      {
        this.state.posts.map((post,index) => {return(
        <>
          <div 
          className='d-flex align-items-center'
          style={{ marginBottom : "20px" }
          }>
              <Posts 
              key={post.id}
              postTitle={post.title} 
              postDate={post.date}  
              imgSrc = {post.imgSrc}
              postContent={post.content}
              postComment={post.comment}
              likeCount = {this.likeCount}
              dislikeCount = {this.dislikeCount}
              removePost = {this.removePost}
              />
              <button className='btn btn-primary'
              onClick = {()=>this.deleteSelf(index)}> 
              Remove 
              </button>   
          </div>     
        </>  
          )})
      }



      </>); 
  }
}
 
export default App;