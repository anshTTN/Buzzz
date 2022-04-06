function TestHome(){


async function find(){
 const result = await fetch('/users', {
    method: 'POST'
  });
const data = await result.json();
console.log(data);
}


find();


return (
  <div className="d-flex">
<h1> this is home </h1>
  </div>
);

}

export default TestHome;
