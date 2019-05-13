import React, {Component}from 'react';
import './movie.css';

function Reply({data}){
  var list = [];
  for (let i = 0; i < data.length; i++) {
    list.push(
      <div>
        <div>{data[i].writer}</div>
        <div>{data[i].content}</div>
        <hr />
      </div>
    )
  }
  
  return(
    <div>
      {list}
    </div>
  )
}

class ReplyForm extends Component{
  state = {
    writer : '',
    content : ''
  }

  changeForm(e){
  this.setState({[e.target.name]:e.target.value});
}
  render(){
    const textarea_style = {
      width: '80%'
    };
    return(
  <form onSubmit={function(e){
    e.preventDefault();
    this.props.onSubmit(this.state)
    
  }.bind(this)}>
    <input type="text" placeholder="작성자" name="writer" onChange={this.changeForm.bind(this)}></input>
    <input type="password" placeholder="*****" ></input><br />
    <textarea cols="50" rows="4" style={textarea_style} name="content" onChange={this.changeForm.bind(this)}></textarea><br />
    <input type="submit" value="저장" />
  </form>
  )
  }
}

class View extends Component{
  lastId=1;
  state = {
  replys: [
  { writer: "너", content: "재밌어요!",id:1}
]
  }
  render(){
    return(
      <div className="Modal_Movie">
      <div>
        <MoviePoster poster={this.props.poster} alt={this.props.title}/>
      </div>
      <div className="Modal_Movie__Columns">
      <h3>{this.props.title}</h3>
      <hr />
      <div>
        이곳에 입력된 것은 저장 되지 않습니다.<br/>
        자세한 사항은 <a href="https://github.com/sascill/movie_app/tree/master" target="_blank" rel="noopener noreferrer">여기</a>에서 확인해주세요.        
      </div>
      <hr />
      
      <Reply data={this.state.replys} key={this.state.replys.id}></Reply>
      <ReplyForm onSubmit={function(formData){
        this.lastId = this.lastId +1;
        formData.id = this.lastId
        var newContents = this.state.replys.concat(formData);
        this.setState({
          replys: newContents
        });
        console.log(newContents)
      }.bind(this)}></ReplyForm>
      <div>
      
      </div>
    </div>
  </div>
    )
}
  }

  function MoviePoster({poster, alt}){
    return(
      <img src={poster} alt={alt} title={alt} className="Modal_Movie__Poster"></img>
    )
  }

export default View;