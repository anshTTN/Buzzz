import logo from "../images/logo.png"


function Signup(){


  return (

  <div className="text-center signup px-4 py-4">




 <img src={logo} className="w-25"/>

 <form className="container">




   <div className="row">
     <div className="col">
       <input type="text" className="form-control" placeholder="First name" name="fname" required/>
     </div>
     <div className="col">
       <input type="text" className="form-control" placeholder="Last name" name="lname" required/>
     </div>
   </div>

<hr />

   <div className="row">
     <div className="col">
       <input type="text" className="form-control" placeholder="Email" name="email" required/>
     </div>
     <div className="col">
       <input type="text" className="form-control" placeholder="Designation" name="designation" required/>
     </div>
   </div>

<hr />

   <div className="row">
     <div className="col">
       <input type="text" className="form-control" placeholder="Gender" name="gender" required/>
     </div>
     <div className="col">
       <input type="text" className="form-control" placeholder="Date of birth" name="DOB" required/>
     </div>
   </div>

<hr />

   <div className="row">
     <div className="col">
       <input type="text" className="form-control" placeholder="City" name="city" required/>
     </div>
     <div className="col">
       <input type="text" className="form-control" placeholder="State" name="state" required/>
     </div>
   </div>

<hr />

   <div className="row">
     <div className="col">
       <input type="text" className="form-control" placeholder="Area PIN" name="pin_code" required/>
     </div>
     <div className="col">
       <input type="text" className="form-control" placeholder="Your website (if any)" name="my_website"/>
     </div>
   </div>

<hr />

   <div className="row">
     <div className="col-6">
       <input type="text" className="form-control" placeholder="Create password" name="password" required/>
     </div>
     <div className="col-1">
       <button className="btn btn-lg btn-primary"> Signup </button>
     </div>
   </div>









 </form>





  </div>
)

}

export default Signup;
