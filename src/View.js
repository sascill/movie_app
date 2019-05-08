import React, {Component}from 'react';
import './movie.css';

function Reply({data}){
  return(
    <div>
        <div>{data[0].writer}</div>
        <div>{data[0].content}</div>
        <hr />
    </div>
  )
}
class View extends Component{
  state = {
  replys: [
  {
    writer: "너",
    content: "재밌어요!",
    id:this.props.id
  }
]
}

  render(){
    const textarea_style = {
      width: '80%'
    };
    return(
      <div className="Modal_Movie">
      <div className="Modal_Movie__Columns">
        <MoviePoster poster={this.props.poster} alt={this.props.title}/>
      </div>
      <div className="Modal_Movie__Columns">
      <h1>{this.props.title}</h1>
      <div className="Modal_Movie__Synopsis">
       {this.props.synopsis}
      </div>
      <hr />
      <div>
        이곳에 입력된 것은 저장 되지 않습니다.<br/>
        백엔드 기능은 <a href="https://github.com/sascill/movie/tree/master" target="_blank" rel="noopener noreferrer">여기</a>에서 확인해주세요.        
      </div>
      <hr />
      <div>
        <div>나</div>
        <div>이거 재밌습니다 ㅋㅋ</div>
      </div>
      <hr />
      <Reply data={this.state.replys}></Reply>
      <div>
      <form>
        <input type="text" placeholder="작성자"></input>
        <input type="password" placeholder="*****"></input><br />
        <textarea cols="50" rows="4" style={textarea_style}></textarea><br />
        <input type="submit" value="저장" />
      </form>
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