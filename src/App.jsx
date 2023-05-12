import React, {useState} from "react"
import { Header, Cover, Application, About, Catalog, Offer, Contacts, Partners, Form } from "./Components"


function App() {
  const [modal, setModal] = useState(false)
  console.log(modal)

  return (
    <div className="App">
      <Header />
      <Cover />
      <Application modal={setModal}/>
      <About />
      <Catalog modal={setModal}/>
      <Offer />
      <Contacts />
      <Partners />
      {modal &&
      <Form modal={setModal}/>
      }
    </div>
  );
}

export default App;
