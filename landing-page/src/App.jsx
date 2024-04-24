import Header from "./components/header/index";
import Body from "./components/body/index";
import Footer from "./components/footer/index";
import Container from "./style";


function App() {
  return (

      <Container>
      <Header/>
      <Body title="Seja Bem Vindo a Universidade Estadual do Norte do Paraná! Este é um site para divulgar nossa recepção aos calouros. Sempre ficamos
       muito animados em receber novos alunos em nossa instituição e por isso
       queremos mais formas de divulgar nossa faculdade e os cursos que
       oferecemos nela " />
      <Footer title="aqui tem um footer" />
      </Container>
  );
}



export default App;
