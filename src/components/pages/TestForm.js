class Form extends React.Component {
    constructor(props) {
       super(props);
       this.handleSubmit = this.handleSubmit.bind(this);
    }    
  
    handleSubmit(e) {
      e.preventDefault();
  
      let loginInput = this.refs.login;
      this.props.addCard(loginInput.value);
      loginInput.value = '';
    }
  
    render() {
      return(
        <form onSubmit={ this.handleSubmit }>
          <input placeholder="githug login" ref="login" />
          <button>Add Login</button>
        </form>
      );
  class Form extends React.Component {
  constructor(props) {
     super(props);
     this.handleSubmit = this.handleSubmit.bind(this);
  }    

  handleSubmit(e) {
    e.preventDefault();

    let loginInput = this.refs.login;
    this.props.addCard(loginInput.value);
    loginInput.value = '';
  }

  render() {
    return(
      <form onSubmit={ this.handleSubmit }>
        <input placeholder="githug login" ref="login" />
        <button>Add Login</button>
      </form>
    );
  }
}