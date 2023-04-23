import React from "react";
import vg from "../assests/2.webp";
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from "react-icons/ai";

export const Home = () => {
    return (
        <>
            <div className="home" id="home">
                <main>
                    <h1>TechStar</h1>
                    <p>solution to all your problem</p>
                </main>
            </div>
            <div className="home2">
                <img src={vg} alt="Graphics" />
                <div>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel doloribus inventore voluptates magni autem vero perspiciatis, labore dolorem repellendus commodi ad ab. Dolores officia deserunt et nostrum vero corporis blanditiis.
                    </p>

                </div>
            </div>

            <div className="home3" id="about">
                <div>
                    <h1>Hello we are ?</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quasi similique amet itaque sapiente vitae, aut ab eos hic nisi animi excepturi tempora dolore autem facere, voluptatem consequatur labore consectetur eius voluptate quam nemo, id quae tempore? Atque voluptatum consequatur accusamus est earum, obcaecati magni recusandae rerum quis? Incidunt mollitia tempora hic! Consequatur mollitia minima quaerat quas aliquam impedit reprehenderit nihil, quibusdam modi porro sed labore qui deleniti quis sunt amet sapiente, nostrum in explicabo voluptate accusamus est obcaecati illum. Asperiores perferendis unde doloremque molestiae eligendi praesentium vero distinctio libero delectus aperiam fugit sequi autem eveniet consectetur explicabo eius, quos modi alias reprehenderit quia voluptas dolorem odio vitae? Delectus quia modi obcaecati? Fugit saepe suscipit omnis accusamus inventore dolores. Nulla deleniti maiores et quasi tempore odit totam, expedita   ut temporibus non officiis.</p>
                </div>

            </div>
            <div className="home4" id="brands">
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div style={{ animationDelay: "0.3s" }}>
                            <AiFillGoogleCircle />
                            <p>Google</p>

                        </div>
                        <div style={{ animationDelay: "0.5s" }}>
                            <AiFillAmazonCircle />
                            <p>Amazon </p>

                        </div>
                        <div style={{ animationDelay: "0.7s" }}>
                            <AiFillYoutube />
                            <p>Youtube</p>

                        </div>
                        <div style={{ animationDelay: "1s" }}>
                            <AiFillInstagram />
                            <p>Instagram</p>

                        </div>

                    </article>

                </div>

            </div>

        </>

    );
};