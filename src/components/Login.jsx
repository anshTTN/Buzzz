import loginlogo from '../images/newlogo.png';
function Login(){


return (
  <>
    <section>

<div className="container shadow p-3 mb-5 bg-white rounded">

  <div className="row">
    <div className="col">
      <div className="d-grid gap-4">
        <div className="loginlogo">
          <img src= {loginlogo} alt="logo"/>

        </div>
        <div className="heading_1">
          <h6><center>Enter your details and Start <br />your journey with us </center> </h6>

        </div>
        <div className="">
          <h6><center>Don't stop until you're proud.</center></h6>

        </div>
        <div className="btn_1">
          <a className="btn btn-primary" id="btn_1" href="#" role="button">Sign In with Google</a>

        </div>

      </div>

    </div>


    <div className="col form-content">
      <div className="heading_2">
        <h6> <center>Login To Your Account</center></h6>

      </div>
     
       <form className = "login-form">
         <div className="d-grid gap-4">
           <div className="row row_1">
             <input className="form-control"type="text" name="name" placeholder="TTN Username" autoComplete='off' />
           </div>

           <div className="row row_2">
             <input className="form-control"type="password" id = "inputPassword" placeholder="Password" autoComplete='off' />
           </div>

           <div className="row row_3">
             <div className="col-6">
               <div className="form-check">
                 <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                 <label className="form-check-label" for="exampleCheck1">Remember Me</label>
               </div>
             </div>
             <div className="col-6">
               <div className="forgot float-right">
                <a href="#" id="forgot-link">Forgot Password?</a>
              </div>
             </div>
           </div>

           <div className="row row_4">
             <a className="btn btn-primary" id="btn_2" href="#" role="button">Sign In</a>
           </div>
         </div>


   </form>
   </div>



</div>
</div>
</section>
  </>
);

}

export default Login;
