var container = document.getElementById("app")

// var titulo = document.createElement("h1")
// titulo.innerHTML = "Título inserido por javascript :O"
// container.appendChild(titulo)

function Contador(props) {

    // let numero = 0;
    const [numero, setNumero] = React.useState(0);

    function somar() {
        // numero++;
        setNumero(numero + 1);
        console.log("Somei e ficou =" + (numero+1));
    }

    function subtrair() {
        // numero--;
        setNumero(numero - 1);
        console.log("Subtrai e ficou =" + (numero+1));
    }

    return (
        <React.Fragment>
            <h1>{props.titulo}</h1>
            <h2>{numero}</h2>
            <button onClick={somar}> + </button>
            <button onClick={subtrair}> - </button>
        </React.Fragment>
    );
}

function App() {
    return (
        <React.Fragment>
            <h1>Vote no seu preferido!</h1>
            <Contador titulo="Bolacha" />
            <Contador titulo="Biscoito" />
            <Contador titulo="Toddy" />
            <Contador titulo="Nescau" />
        </React.Fragment>
    )
}

ReactDOM.render(React.createElement(App, null, null), container);

// PascalCase -> Componentes em React seguem esse padrão
// camelCase -> Funções em JavaScript
// componentes só podem retornar um elemento por componente
// saída => aninhar em React.Fragment