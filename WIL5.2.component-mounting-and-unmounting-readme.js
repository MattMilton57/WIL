{1}
// the first mounting method called is constructor(). It is the best place to initialize state in your app like this.
class App extends React.Component{
    constructor() {
        super()
        this.state = {
            state:'state'
        }
    }
}

{2}
// you can use constructor to set a prop as an initial state by taking in props as an argument like so:
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            color: props.thisColor
        }
    }
}

