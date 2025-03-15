import React from 'react';

const Banner = () => {
    return (
        <div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: "url(https://assets.bonappetit.com/photos/5a8d9c058ca2430893f4e3c1/16:9/w_2560%2Cc_limit/life_on_the_line_1.jpg)",
                }}>
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
                        <p className="mb-5">
                        Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.
                        </p>
                       <div className="flex justify-evenly">
                       <button className="btn btn-accent">Explore Now</button>
                       <button className="btn btn-base">Our Feedback</button>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;