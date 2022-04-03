 import UserImage from '../css/images/user.jpg';

function post(){


return (
  <>

  <hr />

  <div className="post border">




  <div className="d-flex justify-content-between py-4 px-3">

 <div className="flex-1">
<i className="fa-solid fa-user fa-2xl"></i>
 <h4> Ankit Bisht </h4>
  </div>

  <div className="flex-1">
  <i className="fa-solid fa-ellipsis fa-xl"></i>
  </div>

   </div>



<div className="caption px-3">
<p>loren0s with the release of Letraset sheets containing Lorem
 Ipsum passages, and more recently with desktop publishing software
  like Aldus PageMaker including versions of Lorem Ipsum.</p>

</div>



<div className="post-img-box border">
<img src={UserImage} alt="post img" className="post-img"/>
</div>




<div className="d-flex justify-content-around">

<div className="flex-1 py-3">
<i className="fa-solid fa-thumbs-up fa-2xl emote"></i>
<h5 className="d-inline"> Like </h5>
</div>

<div className="flex-1 py-3">
<i className="fa-solid fa-thumbs-down fa-2xl emote"></i>
<h5 className="d-inline"> Dislike </h5>
</div>

<div className="flex-1 py-3">
<i className="fa-solid fa-comment fa-2xl emote"></i>
<h5 className="d-inline"> Comment </h5>
</div>


</div>




<div className="comment-box px-3 py-3 caption">

<i className="fa-solid fa-user fa-2xl px-4"></i>
<input tyep="text" name="comment" placeholder="Write a comment..." className="comment-text"/>

</div>







  </div>
  </>

);

}

export default post;
