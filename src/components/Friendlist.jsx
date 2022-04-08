import React from 'react'
import Header from './Header';
import UserImage from '../images/user.jpg';



const Friendlist = () => {
  return (
    <div>
        <Header />
        <div className="row py-4 px-4 searched-users">
            
            <div className="card col-md-4 col-sm-6 col-xs-12">
                <img className="card-img-top" src={UserImage} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Ankit Bisht1</h5>
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className=' buttonsforusers'>
                        <div className="row">
                            <div className="col-md-6 col-sm-12 col-xs-12 messagediv"><center><a href="#" className="btn btn-primary">Message</a></center></div>
                            <div className="col-md-6 col-sm-12 col-xs-12 removediv"><center><a href="#" className="btn btn-primary">Remove</a></center></div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="card col-md-4 col-sm-6 col-xs-12 ">
                <img className="card-img-top" src={UserImage} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Ankit Bisht2</h5>
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className=' buttonsforusers'>
                        <div className="row">
                            <div className="col-md-6 col-sm-12 col-xs-12 messagediv"><center><a href="#" className="btn btn-primary">Message</a></center></div>
                            <div className="col-md-6 col-sm-12 col-xs-12 removediv"><center><a href="#" className="btn btn-primary">Remove</a></center></div>
                        </div>
                    </div>
                </div>
            </div>
            
            
            <div className="card col-md-4 col-sm-6 col-xs-12 ">
                <img className="card-img-top" src={UserImage} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Ankit Bisht3</h5>
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className=' buttonsforusers'>
                        <div className="row">
                            <div className="col-md-6 col-sm-12 col-xs-12 messagediv"><center><a href="#" className="btn btn-primary">Message</a></center></div>
                            <div className="col-md-6 col-sm-12 col-xs-12 removediv"><center><a href="#" className="btn btn-primary">Remove</a></center></div>
                        </div>
                    </div>
                </div>
            </div>
            
            
            
            <div className="card col-md-4 col-sm-6 col-xs-12 ">
                <img className="card-img-top" src={UserImage} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Ankit Bisht4</h5>
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className=' buttonsforusers'>
                        <div className="row">
                            <div className="col-md-6 col-sm-12 col-xs-12 messagediv"><center><a href="#" className="btn btn-primary">Message</a></center></div>
                            <div className="col-md-6 col-sm-12 col-xs-12 removediv"><center><a href="#" className="btn btn-primary">Remove</a></center></div>
                        </div>
                    </div>
                </div>
            </div>
            
            
            
            <div className="card col-md-4 col-sm-6 col-xs-12 ">
                <img className="card-img-top" src={UserImage} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Ankit Bisht5</h5>
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className=' buttonsforusers'>
                        <div className="row">
                            <div className="col-md-6 col-sm-12 col-xs-12 messagediv"><center><a href="#" className="btn btn-primary">Message</a></center></div>
                            <div className="col-md-6 col-sm-12 col-xs-12 removediv"><center><a href="#" className="btn btn-primary">Remove</a></center></div>
                        </div>
                    </div>
                </div>
            </div>
            
            
            <div className="card col-md-4 col-sm-6 col-xs-12 ">
                <img className="card-img-top" src={UserImage} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Ankit Bisht6</h5>
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className=' buttonsforusers'>
                        <div className="row">
                            <div className="col-md-6 col-sm-12 col-xs-12 messagediv"><center><a href="#" className="btn btn-primary">Message</a></center></div>
                            <div className="col-md-6 col-sm-12 col-xs-12 removediv"><center><a href="#" className="btn btn-primary">Remove</a></center></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Friendlist;
