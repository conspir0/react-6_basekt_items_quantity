class App extends React.Component {
  state = {
    avaliableItems: 10,
    qty: 0
  }

  buttonHandler = (type) => {
    if (type === 'add' && this.state.avaliableItems > 0) {
      this.setState((prevState) => ({
        avaliableItems: prevState.avaliableItems - 1,
        qty: prevState.qty + 1
      }))
    } else if (type === 'remove' && this.state.qty > 0) {
      this.setState((prevState) => ({
        avaliableItems: prevState.avaliableItems + 1,
        qty: prevState.qty - 1
      }))
    } else if (type === 'submit' && this.state.qty > 0) {
      this.setState((prevState) => ({
        qty: 0
      }))
    }
  }

  render() {
    const { qty, avaliableItems } = this.state;

    return (
      <React.Fragment>
        <div className="container">
          <div className="button-container">
            <ButtonElement
              title="+"
              buttonEvent={() => this.buttonHandler('add')}
              isDisabled={avaliableItems > 0 ? false : true}
            />
            <BasketQty qty={qty} />
            <ButtonElement
              title="-"
              buttonEvent={() => this.buttonHandler('remove')}
              isDisabled={qty > 0 ? false : true}
            />
            <ButtonElement
              title="buy"
              buttonEvent={() => this.buttonHandler('submit')}
              isDisabled={qty > 0 ? false : true}
            />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const ButtonElement = ({ title, isDisabled, buttonEvent }) => {
  return (
    <button
      onClick={buttonEvent}
      disabled={isDisabled}
      className="button"
    >
      {title}
    </button>
  )
}

const BasketQty = ({ qty }) => {
  return (
    <div
      className={`result-box ${qty === 0 ? 'transparent' : ''}`}
    >
      {qty}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
