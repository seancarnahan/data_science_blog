import React, {Component} from 'react';

class CreateBlog extends Component{
  constructor(props){
    super(props);

    this.state = {term : ''};
  }

// this is where your backend will push the data
  render(){
    return(
      <div>
        CreateBlog

      </div>
    );
  }
}

export default CreateBlog
