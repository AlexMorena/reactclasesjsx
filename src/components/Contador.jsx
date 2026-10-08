const {Component} = require("react");

class Contador extends Component {
    state = {
        numero: 0
    }

incrementarNumero = () => {
    this.setState({
        numero: this.state.numero + 1
        });
}

decrementarNumero = () => {
    this.setState({
        numero: this.state.numero - 1
    });
}

render(){
    return(
        <div>
            <h1>Contador: {this.state.numero}</h1>
            <button onClick={this.incrementarNumero}>Incrementar</button>
            <br></br>
            <button onClick= {() => this.incrementarNumero()}>Incrementar lambda</button>
            <button onClick={this.decrementarNumero}>Decrementar</button>
            <br></br>
            <button onClick= {() => this.decrementarNumero()}>Decrementar lambda</button>
        </div>
    )
}
}
export default Contador;