{1}
// a "ref" allows us to reach into the render() of a component and update a single dom element upon a change
// of state and update it instead of re rendering the entire page.. good for implementing animations. It looks like this: 
class Timer extends Component {
    constructor() {
      super();
      this.timer = React.createRef();
      this.state = {
        time: 0,
        color: "#" + Math.floor(Math.random() * 16777215).toString(16)
      };
    }

    componentDidUpdate(){
      this.timer.current.style.color =
    "#" + Math.floor(Math.random() * 16777215).toString(16)
    }

    render() {
        const { time, color, logText } = this.state;
        return (
          <section className="Timer" style={{ background: color }} ref={this.timer}>
            <h1>{time}</h1>
            <button onClick={this.stopClock}>Stop</button>
            <aside className="logText">{logText}</aside>
            <small onClick={this.handleClose}>X</small>
          </section>
        );
      }
    }

    export default Timer;
    // line 7: construct a class variable (whats a class variable?) 
    // line 22: add the ref variable to a speciffic JSX element (here the numbers on a timer)
    // this gives us a ref, or REFERENCE point we can use to reach into the jsx object and see or alter its 
    // current data:
    console.log(this.timer.current.style.background);
    //outputs the background color, something like rgb(62, 132, 219) 
    // line 14: this componentDidUpdate will reach into that speciffic jsx element and execute its code on it every time
    // the component updates. This feels....unnecessary? I feel like i wish i could look into this more but instead
    // i will just trust the react doccumentation overords that this update method is unnecessary and i shouldnt 
    // have given it as much time as I allreaady have oof geez.

    {2}
    // should component update seemes more useful for speed optimization
    class Timer extends Component {
        shouldComponentUpdate(nextProps, nextState) {
            if (this.state.time === nextState.time) {
            return false
            }
            return true
        }
    }
    // this method prevents the component from updating if it recieves new props or if its parent component updates
    // unless it meets your conditions for needing a re-render. case in point, this component is a timer and 
    // it only needs to re-render if it recieves a new time to display.     
