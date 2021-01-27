import { Container } from 'react-bootstrap'
import Header from "./components/Header"
import Form from "./components/LoginForm"

const App = () => {
  return (
   <>
        <Header/>
        <main>
            <Container>
                <Form />
            </Container>
        </main>
   </>
  );
}

export default App;
