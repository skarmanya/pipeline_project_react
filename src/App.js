import React from "react";
import "./styles.css";

const App = () => {

  const [contacts, setContacts] = useState([]);

  useEffect(() => {fetch("https://randomuser.me/api/?results=3")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setContacts(data.results);
    });
  }, []);

  return(
    <>
    {<contacts.map(contact => (<ContactCard
      avatar = {contacts.picture.large}
      name = {contacts.name.first + " " + contacts.name.logic}
      email = {contacts.email}
      age = {contacts.dob.age}
    />
    ))}

    </>
  );
}

const ContactCard = props => {


  const [showAge, setShowAge] = useState(false);

  return (
    <div className="contact-card">
      <img src={props.avatar} alt="profile" />
      <div className="user-details">
        <p>Name: {props.name}</p>
        <p>Email: {props.email}</p>
        <button onClick={() => setShowAge(!showAge)}>Toggle Age </button>
        {showAge === true ? <p>Age 25</p> : null};
      </div>
    </div>
  )


}

export default App;