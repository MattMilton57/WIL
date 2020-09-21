{1}
//this one is pretty simple. Fragments allow you to put multiple jsx eements in a <div> without wraping each
// individual element in a div of its own. 
class ChildComponent extends Component {
    render() {
      //The wrapping 'div' here has been replaced with a React fragment
      return (
        <>
          <p>Hey, I am a child</p>
          <p>My name is child component</p>
        </>
      )
    }
  }
   
  class ParentComponent extends Component {
    render() {
      return (
        <div>
          <ChildComponent />
          <ChildComponent />
        </div>
      )
    }
  }
  // this exports:
  <div>
    <p>Hey, I am a child</p>
    <p>My name is child component</p>
    <p>Hey, I am a child</p>
    <p>My name is child component</p>
</div>

