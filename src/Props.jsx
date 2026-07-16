function Welcome({ name, role }) {
  return (
    <>
      <h3>Hello, {name}!</h3>
      <h4>Your role is {role}</h4>
    </>
  );
}

function Card({ children }) {
  return <div className="card">{children}</div>;
}

// Passing differernt types of props to a component 
// <Profile
//   name="Danish"          // string
//   age={22}                // number - use { }
//   isAdmin={true}          // boolean
//   skills={["React","JS"]} // array
// />

function Props() {
  return (
    <>
      <Welcome name="Apoorva" role="Developer" />
      <Welcome name="Arnav" role="Designer" />

      <Card>
        <h3>Helloo my card</h3>
      </Card>
    </>
  );
}

export default Props;
