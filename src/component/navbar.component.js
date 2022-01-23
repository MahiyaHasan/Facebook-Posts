import React, { Component } from 'react';
class Navbar extends Component {
    render() { 
        const {likecount, dislikecount} = this.props;
        return (
            <>
                <nav className="navbar navbar-light bg-light">
                    <span>Total Likes: {likecount}</span>
                    <span>Total Dislikes: {dislikecount}</span>
               
                </nav>
            </>
        );
    }
}
 
export default Navbar;