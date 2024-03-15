import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Card from "./Card.jsx"
import { useState } from "react";


function App() {
  const [role, setRole] = useState('dev');

  const [students, setStudents] = useState([  
                      {id: 1, name: "Jessa Bhel Guillemer", email: "JessaGuillemer@gmail.com"},
                      {id: 2, name: "Bowen Suico", email: "bowsuico@gmail.com"},
                      {id: 3, name: "Charles Tombs", email: "tombits@gmail.com"},
                      {id: 4, name: "Charles Brexie", email: "charlessaturinas@gmail.com"},
                      {id: 5, name: "Jade Malvin Cordero", email: "jademalvincordero@gmail.com"}
                    ]);

  return(
      <>
      <Header/>
      
      <div>
        {students.map((student) => {
          return(
          <Card key={student.id} name = {student.name} email={student.email}/>
          );
        })}
      </div>
      <Footer/>
      </>
    );
}

export default App