
// import './main.css';
import './index.less';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Text: null,
    };
  }

  onButtonClick() {
  }

  render() {
    return (
            <div className="app">
                test my content111
                <button onClick={this.onButtonClick.bind(this)}>点击内容区域</button>
                {this.state.Text ? this.state.Text : null}
            </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
