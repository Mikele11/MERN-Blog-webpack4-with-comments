import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Showcomment extends Component {

  constructor(props) {
    super(props);
    this.state = {
	  comment:window.commentarray
    };
  }
 //window.commentarray 
  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Commetns &nbsp;
            </h3>
          </div>
          <div class="panel-body">
            <div>
                {this.state.comment.map(coment =>
                  <div class="article">
                    <div>{coment.description}</div>
				    <div class ="article_author">
						<div>Author: </div>
						<div>{coment.author}</div>
					</div>
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Showcomment;
