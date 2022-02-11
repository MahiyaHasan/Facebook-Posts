import React, { Component } from 'react';
class Posts extends React.Component {
    state = {
        likeflag : 0,
        dislikeflag : 0,
    }
    PostlikeCount(){
        if(this.state.likeflag == 0){
            this.setState({...this.state, likeflag : 1});
            this.props.likeCount();
        }
    }
    PostdislikeCount(){
        if(this.state.dislikeflag == 0){
            this.setState({...this.state, dislikeflag : 1});
            this.props.dislikeCount();
        }
    }
    render() { 
        const {postTitle, postDate, imgSrc, postContent, postComment, removePost} = this.props;

        return (
            <>
            <div className='d-flex align-items-center justify-content-between' style={{width: "700px"}}>

            <div className="card" style={{width: "600px"}}>
            <img className="card-img-top" src={imgSrc} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{postTitle}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{postDate}</h6>
                    <p className="card-text">{postContent}</p>
                    <div className="d-flex align-items-center">
                        <i className=
                        {this.state.likeflag === 0 ? "bi bi-hand-thumbs-up":"bi bi-hand-thumbs-up-fill" } 
                        style={{marginRight:"10px"}}
                        onClick={()=> this.PostlikeCount()}></i>
                        <i className=
                        {this.state.dislikeflag === 0 ? "bi bi-hand-thumbs-down":"bi bi-hand-thumbs-down-fill" }  
                        style={{marginRight:"10px"}}
                        onClick={()=> this.PostdislikeCount()}></i>                    
                    </div>
                    <p className="card-text">{postComment}</p>
                </div>
            </div>

            {/* <a className='btn btn-primary' onClick={() => removePost()}>Remove</a> */}
            </div>
            
            </>
        );
    }
}
 
export default Posts;