import React from 'react';
const Profile = () => {
    return (
        <div style={{margin:"0px auto",maxWidth:"550px"}}>
            <div style={{display:"flex",justifyContent:"space-around",margin:"18px 0px",borderBottom:"1px solid gray"}}>
                <div>
                    <img style={{ height: "160px", width: "160px", borderRadius: "80px" }}
                        src="https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166__480.jpg" />
                </div>
                <div>
                    <h4>Imran Wahid</h4>
                    <div style={{ display: "flex", justifyContent: "space-between", width: "108%" }}>
                        <h6>40 posts</h6>
                        <h6>100 followers</h6>
                        <h6>50 following</h6>
                    </div>
                </div>
            </div>
            <div className="gallery">
                <img className="item"
                    src="https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166__480.jpg" />
                <img className="item"
                    src="https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166__480.jpg" />
                <img className="item"
                    src="https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166__480.jpg" />
                <img className="item"
                    src="https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166__480.jpg" />
            </div>
        </div>
    )
};
export default Profile;