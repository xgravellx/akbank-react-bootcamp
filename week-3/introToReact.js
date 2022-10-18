// Fonksiyon ve Sınıf Bileşenleri

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
/*
    Yukarıdaki fonksiyon, girdi olarak "props" (properties) adındaki tek bir nesneyi aldığı ve geriye
    React elementi (JSX) döndürdüğü için geçerli bir React bileşenidir.
*/

// Fonk yerine, ES6 classı kullanarak da React bileşeni oluşturabiliriz.
class Welcome1 extends React.Component {
    render () {
        return <h1>Hello, {this.props.name}</h1>
    }
}

function WelcomeHazel(props) {
    return <h1>Hello, {props.name}</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <WelcomeHazel name='Hazel'/>;
root.render(element);