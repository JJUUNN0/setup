import Header from "./components/header/index";
import Body from "./components/body/index";
import Footer from "./components/footer/index";
import Container from "./style";


function App() {
  return (

      <Container>
      <Header/>
      <Body title="Seja Bem Vindo a Universidade Estadual do Norte do Paraná" />
      <Footer title="footer" />
      </Container>
  );
}



export default App;
