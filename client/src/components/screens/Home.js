import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className="home">
            <div className="card home-card">
                <h5 style={{margin:"10px"}}>Imran Wahid</h5>
                <p style={{margin:"10px"}}>National Institute of Technology Rourkela</p>
                <div className="card-image">
                    <img src="https://cdn.pixabay.com/photo/2013/10/09/02/27/lake-192990__340.jpg" />
                </div>
                <div className="card-content">
                    <i class="material-icons" style={{ color: "red" }}>favorite</i>
                    <h6>Title</h6>
                    <p>This is an amazing post</p>
                    <input type="text" placeholder="Add a comment here" className="com"/>
                </div>
            </div>
            <div className="card home-card">
                <h5>Imran Wahid</h5>
                <div className="card-image">
                    <img src="https://cdn.pixabay.com/photo/2013/10/09/02/27/lake-192990__340.jpg" />
                </div>
                <div className="card-content">
                    <i class="material-icons" style={{ color: "red" }}>favorite</i>
                    <h6>Title</h6>
                    <p>This is an amazing post</p>
                    <input type="text" placeholder="Add a comment here" />
                </div>
            </div>
            <div className="card home-card">
                <h5>Imran Wahid</h5>
                <div className="card-image">
                    <img src="https://cdn.pixabay.com/photo/2013/10/09/02/27/lake-192990__340.jpg" />
                </div>
                <div className="card-content">
                    <i class="material-icons" style={{ color: "red" }}>favorite</i>
                    <h6>Title</h6>
                    <p>This is an amazing post</p>
                    <input type="text" placeholder="Add a comment here" />
                </div>
            </div>
        </div>
    )
};
export default Home;