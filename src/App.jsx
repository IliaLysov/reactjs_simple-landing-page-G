import React, {useState, useRef, useEffect} from "react"
import { Header, Cover, Application, About, Catalog, Offer, Contacts, Partners, Form } from "./Components"


function App() {
  const [modal, setModal] = useState(false)
  const [section, setSection] = useState('')

  const aboutSection = useRef()
  const catalogSection = useRef()
  const contactsSection = useRef()
  const partnersSection = useRef()
  const coverSection = useRef()

  useEffect(() => {
    switch (section) {
      case 'about':
        aboutSection.current.scrollIntoView({ behavior: 'smooth' })
        break
      case 'contacts':
        contactsSection.current.scrollIntoView({ behavior: 'smooth' })
        break
      case 'partners':
        partnersSection.current.scrollIntoView({ behavior: 'smooth' })
        break
      case 'cover':
        coverSection.current.scrollIntoView({ behavior: 'smooth' })
        break
      case 'catalog':
        catalogSection.current.scrollIntoView({ behavior: 'smooth' })
        break
      default:
        console.log('Секция не определена')
    } 

  }, [section])

  return (
    <div className="App">
      <Header setSection={setSection}/>
      <Cover refLink={coverSection}/>
      <Application modal={setModal}/>
      <About refLink={aboutSection}/>
      <Catalog modal={setModal} refLink={catalogSection}/>
      <Offer />
      <Contacts refLink={contactsSection}/>
      <Partners refLink={partnersSection}/>
      {modal &&
      <Form modal={setModal}/>
      }
    </div>
  );
}

export default App;
