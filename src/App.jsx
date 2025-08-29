import { BrowserRouter as BR, Routes, Route } from "react-router-dom"

import ContactList from "./ContactList"
import ViewContacts from "./ViewContacts"


function App() {
  

  return (
    <>
      <BR>
        <Routes>
          <Route path = "/" element = {<ContactList/>} />
          <Route path = "/contacts" element = {<ViewContacts/>} />
        </Routes>
      </BR>
    </>
  )
}

export default App;
