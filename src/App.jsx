import React, {useState, useRef} from "react"
import { Header, Cover, Application, About, Catalog, Offer, Contacts, Partners, Modal, Menu, Footer } from "./Components"


function App() {
  const [modal, setModal] = useState(false)
  const [menu, setMenu] = useState(false)

  const aboutSection = useRef()
  const catalogSection = useRef()
  const contactsSection = useRef()
  const partnersSection = useRef()
  const coverSection = useRef()


  return (
    <div className="App">
      <Header refs={{aboutSection, catalogSection, contactsSection, partnersSection, coverSection}} setMenu={setMenu}/>
      <Cover refLink={coverSection}/>
      <Application modal={setModal}/>
      <About refLink={aboutSection}/>
      <Catalog modal={setModal} refLink={catalogSection}/>
      <Offer />
      <Contacts refLink={contactsSection}/>
      <Partners refLink={partnersSection}/>
      <Footer />
      {modal && <Modal modal={setModal}/>}
      {menu && <Menu setMenu={setMenu} refs={{aboutSection, catalogSection, contactsSection, partnersSection, coverSection}}/>}
    </div>
  );
}

export default App;
