import React from "react";
import './main.css';

const Main = () => {
    return (
        <div>
{/* 
        <section className="header">
            <img src="https://images.pexels.com/photos/2544829/pexels-photo-2544829.jpeg?cs=srgb&dl=pexels-rene-asmussen-2544829.jpg&fm=jpg" className="header-img"></img>
                <img className="header-logo" src={logo2}></img>
            
        </section> */}

            <section className="about-us">
                <div className="about">
                    <img src="https://media.timeout.com/images/106047598/image.jpg" className="pic" />
                    <div className="text">
                        <h2>About Us</h2>
                        <h5>Restaurant<span> & Catering</span></h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita natus ad sed harum itaque ullam enim quas, veniam accusantium, quia animi id eos adipisci iusto molestias asperiores explicabo cum vero atque amet corporis! Soluta illum facere consequuntur magni. Ullam dolorem repudiandae cumque voluptate consequatur consectetur, eos provident necessitatibus reiciendis corrupti!</p>
                        <div className="data">
                            <a href="#" className="hire">More...</a>
                        </div>
                    </div>
                </div>
                <div className="border"></div>
            </section>

            <section>
                <div class="row">
                    <h2 class="section-heading">Our Services</h2>
                </div>
                <div class="row">
                    <div class="column">
                        <div class="card">
                            {/* <div class="icon-wrapper">
                                <i class="fas fa-hammer"></i>
                            </div> */}
                            <h3>Catering</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dignissimos, totam, ea repudiandae esse quisquam autem eligendi consequatur, mollitia architecto doloremque. Cum quos ex vero possimus, aut consectetur doloribus iure.
                            </p>
                        </div>
                    </div>
                    <div class="column">
                        <div class="card">
                            {/* <div class="icon-wrapper">
                                <i class="fas fa-brush"></i>
                            </div> */}
                            <h3>Cooking Course</h3>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae fugit, blanditiis excepturi quas nam sapiente beatae fuga saepe provident! Pariatur, perspiciatis repellendus? Molestias voluptate ab porro perspiciatis at cupiditate nobis.
                            </p>
                        </div>
                    </div>
                    <div class="column">
                        <div class="card">
                            {/* <div class="icon-wrapper">
                                <i class="fas fa-wrench"></i>
                            </div> */}
                            <h3>Dining</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor ad, esse doloremque deserunt repellendus optio quod dolores consequatur, autem at quos placeat cum rem mollitia. Eos perferendis laborum consectetur similique!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Main