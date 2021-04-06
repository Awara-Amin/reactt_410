import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function App() {
  console.log(contacts);

  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name={contacts[0].name}
        img={contacts[0].imageURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
        // name="Beyonce"
        // img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        // tel="+123 456 789"
        // email="b@beyonce.com"
      />

      <Card
        name={contacts[1].name}
        img={contacts[1].imageURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
        // name="Beyonce"
        // img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        // tel="+123 456 789"
        // email="b@beyonce.com"
      />

      <Card
        name={contacts[2].name}
        img={contacts[2].imageURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
        // name="Beyonce"
        // img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        // tel="+123 456 789"
        // email="b@beyonce.com"
      />

      {/* <div className="card">
        <div className="top">
          <h2 className="name">Beyonce</h2>
          <img
            className="circle-img "
            src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
            alt="avatar_img"
          />
        </div>
        <div className="bottom">
          <p className="info">+123 456 789</p>
          <p className="info">b@beyonce.com</p>
        </div>
      </div> */}
    </div>
  );
}

export default App;
