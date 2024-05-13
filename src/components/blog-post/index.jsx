import React from "react";
import "./blog-post.scss";
import img1 from "../../assets/blog-post/img1.png";
import img2 from "../../assets/blog-post/img2.png";

const BlogPost = () => {
  return (
    <>
      <section className="blog-post">
        <div className="container">
          <h1 className="blog-post__title">Blog Posts</h1>
          <div className="blog-post__cards">
            <div className="blog-post__card">
              <div className="blog-post__content">
                <h3 className="blog-post__title">Tempered Glass</h3>
                <p className="blog-post__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Phasellus egestas tellus rutrum tellus pellentesque eu. Amet
                  dictum sit amet justo donec enim diam vulputate ut. Malesuada
                  fames ac turpis egestas maecenas. Dictum fusce ut placerat
                  orci nulla pellentesque dignissim. Neque laoreet suspendisse
                  interdum consectetur. Turpis massa sed elementum tempus
                  egestas sed sed. Ornare massa eget egestas purus viverra
                  accumsan in. Tristique senectus et netus et malesuada. Ornare
                  suspendisse sed nisi lacus sed. Aliquet nibh praesent
                  tristique magna sit. Ac auctor augue mauris augue neque
                  gravida in fermentum et. Erat imperdiet sed euismod nisi porta
                  lorem mollis aliquam ut. Proin libero nunc consequat interdum
                  varius sit amet mattis. Odio eu feugiat pretium nibh ipsum.
                </p>
              </div>
              <img src={img1} alt="here is the image of glasses" />
            </div>

            <div className="blog-post__card">
              <img src={img2} alt="" />
              <div className="blog-post__content">
                <h3 className="blog-post__title">Back Cover</h3>
                <p className="blog-post__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Phasellus egestas tellus rutrum tellus pellentesque eu. Amet
                  dictum sit amet justo donec enim diam vulputate ut. Malesuada
                  fames ac turpis egestas maecenas. Dictum fusce ut placerat
                  orci nulla pellentesque dignissim. Neque laoreet suspendisse
                  interdum consectetur. Turpis massa sed elementum tempus
                  egestas sed sed. Ornare massa eget egestas purus viverra
                  accumsan in. Tristique senectus et netus et malesuada. Ornare
                  suspendisse sed nisi lacus sed. Aliquet nibh praesent
                  tristique magna sit. Ac auctor augue mauris augue neque
                  gravida in fermentum et. Erat imperdiet sed euismod nisi porta
                  lorem mollis aliquam ut. Proin libero nunc consequat interdum
                  varius sit amet mattis. Odio eu feugiat pretium nibh ipsum.
                </p>
              </div>
            </div>

            <div className="blog-post__card">
              <div className="blog-post__content">
                <h3 className="blog-post__title">
                  Mobile Brand and Price Strategy
                </h3>
                <p className="blog-post__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Phasellus egestas tellus rutrum tellus pellentesque eu. Amet
                  dictum sit amet justo donec enim diam vulputate ut. Malesuada
                  fames ac turpis egestas maecenas. Dictum fusce ut placerat
                  orci nulla pellentesque dignissim. Neque laoreet suspendisse
                  interdum consectetur. Turpis massa sed elementum tempus
                  egestas sed sed. Ornare massa eget egestas purus viverra
                  accumsan in. Tristique senectus et netus et malesuada. Ornare
                  suspendisse sed nisi lacus sed. Aliquet nibh praesent
                  tristique magna sit. Ac auctor augue mauris augue neque
                  gravida in fermentum et. Erat imperdiet sed euismod nisi porta
                  lorem mollis aliquam ut. Proin libero nunc consequat interdum
                  varius sit amet mattis. Odio eu feugiat pretium nibh ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPost;
