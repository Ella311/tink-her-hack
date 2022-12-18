import "./user.css"

export default function User() {
  return (
    <div class="row py-5 px-4"> 
        <div class="col-md-5 mx-auto"> 
            <div class="bg-white shadow rounded overflow-hidden"> 
                <div class="px-4 pt-0 pb-4 cover"> 
                    <div class="media align-items-end profile-head"> 
                        <div class=" profile mr-3">
                            <img class="pro rounded mb-2 img-thumbnail" src="https://static.jobscan.co/blog/uploads/linkedin-profile-picture.jpg" alt="" width="130" />
                            <a href="#" class="font-gg btn btn-outline-dark btn-sm btn-block">Edit profile</a>
                        </div> 
                        <div class="  media-body mb-5 text-white"> 
                            <h4 class="samu mt-0 mb-0"><b>Mark Williams</b></h4> 
                            <p class="small mb-4"> 
                                <i class="fas fa-map-marker-alt mr-2"></i>New York
                            </p> 
                        </div> 
                    </div> 
                </div> 
                <div class="bg-light p-4 d-flex justify-content-end text-center"> 
                    <ul class="list-inline mb-0"> 
                        <li class="list-inline-item"> 
                            <h5 class="font-weight-bold mb-0 d-block">215</h5>
                            <small class="text-muted"> 
                                <i class="font-al fas fa-image mr-1"></i>Articles
                            </small> 
                        </li> 
                        <li class="list-inline-item"> 
                            <h5 class="font-weight-bold mb-0 d-block">745</h5>
                            <small class="text-muted"> 
                                <i class="font-al fas fa-user mr-1"></i>Followers
                            </small>
                         </li> 
                         <li class="list-inline-item"> 
                            <h5 class="font-weight-bold mb-0 d-block">340</h5>
                            <small class="text-muted"> 
                                <i class="font-al fas fa-user mr-1"></i>Following
                            </small>
                         </li> 
                        </ul>
                     </div>
                      <div class="px-4 py-3"> 
                        <h5 class=" ff mb-0">Interests</h5>
                         <div class="p-4 rounded shadow-sm bg-light"> 
                            <p class="font-gg font-italic mb-0">Education</p> 
                            <p class="font-gg font-italic mb-0">Technology</p> 
                            <p class="font-gg font-italic mb-0">Photography</p> 
                        </div> 
                    </div>
                     <div class="py-4 px-4"> 
                        <div class="d-flex align-items-center justify-content-between mb-3">
                             <h5 class="ff mb-0">Recent articles</h5>
                             <a href="#" class="btn btn-link text-muted">Show all</a> 
                            </div>
                             <div class> 
                                <div className="rows">
                                     <div class="pic col-lg-6 mb-2 pr-lg-1">
                                        <img className="imgfluid" src="https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" />
                                        <h4>Song of Blue mountains</h4>
                                    </div> 
                                    <div class="pic col-lg-6 mb-2 pl-lg-1">
                                        <img className="imgfluid" src="https://images.unsplash.com/photo-1493571716545-b559a19edd14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" />
                                        <h4>Taking Care of our Mountains</h4>
                                    </div>
                                </div>
                                 <div className="rows">
                                    <div class="pic col-lg-6 pr-lg-1 mb-2">
                                        <img className="imgfluid" src="https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="" />
                                        <h4>For the Love of Forests</h4>
                                    </div> 
                                    <div class="pic col-lg-6 pl-lg-1">
                                        <img className="imgfluid" src="https://images.unsplash.com/photo-1475724017904-b712052c192a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" />
                                        <h4>Festivals are comming</h4>
                                     </div>
                                 </div>
                             </div>
                             </div> 
                            </div> 
                        </div>
</div>
  )
}
