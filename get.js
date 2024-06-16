console.log("object");
fetch("http://localhost:3000/login")
  .then((res) => res.json())
  .then((data) => console.log(data));
