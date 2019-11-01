import React from "react";
import humano from '../../images/humano.jpg'

const ProductsContent = () => {
  return (
    <div id="main">
      <article className="post featured">
        <header className="major">
        <a href="/" className="image main">
          <img src={humano} alt="" />
        </a>
          <h2>Products</h2>
          <p>
            Aenean ornare velit lacus varius enim ullamcorper proin aliquam
            facilisis ante sed etiam magna interdum congue. Lorem ipsum dolor
            amet nullam sed etiam veroeros.
          </p>
        </header>
      </article>

      <section className="posts">
        <article>
          <header>
            <h2>
              <a href="/">
                Sed magna
                <br />
                ipsum faucibus
              </a>
            </h2>
          </header>
          <a href="/" className="image fit">
            <img src={humano}alt="" />
          </a>
          <p>
            Donec eget ex magna. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Pellentesque venenatis dolor imperdiet dolor
            mattis sagittis magna etiam.
          </p>
          <ul className="actions special">
            <li>
              <a href="/" className="button">
                Show
              </a>
            </li>
          </ul>
        </article>
        <article>
          <header>
            <h2>
              <a href="/">
                Primis eget
                <br />
                imperdiet lorem
              </a>
            </h2>
          </header>
          <a href="/" className="image fit">
            <img src={humano} alt="" />
          </a>
          <p>
            Donec eget ex magna. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Pellentesque venenatis dolor imperdiet dolor
            mattis sagittis magna etiam.
          </p>
          <ul className="actions special">
            <li>
              <a href="/" className="button">
                Show
              </a>
            </li>
          </ul>
        </article>
        <article>
          <header>
            <h2>
              <a href="/">
                Ante mattis
                <br />
                interdum dolor
              </a>
            </h2>
          </header>
          <a href="/" className="image fit">
            <img src={humano} alt="" />
          </a>
          <p>
            Donec eget ex magna. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Pellentesque venenatis dolor imperdiet dolor
            mattis sagittis magna etiam.
          </p>
          <ul className="actions special">
            <li>
              <a href="/" className="button">
                Show
              </a>
            </li>
          </ul>
        </article>
        <article>
          <header>
            <h2>
              <a href="/">
                Tempus sed
                <br />
                nulla imperdiet
              </a>
            </h2>
          </header>
          <a href="/" className="image fit">
            <img src={humano} alt="" />
          </a>
          <p>
            Donec eget ex magna. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Pellentesque venenatis dolor imperdiet dolor
            mattis sagittis magna etiam.
          </p>
          <ul className="actions special">
            <li>
              <a href="/" className="button">
                Show
              </a>
            </li>
          </ul>
        </article>
        <article>
          <header>
            <h2>
              <a href="/">
                Odio magna
                <br />
                sed consectetur
              </a>
            </h2>
          </header>
          <a href="/" className="image fit">
            <img src={humano} alt="" />
          </a>
          <p>
            Donec eget ex magna. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Pellentesque venenatis dolor imperdiet dolor
            mattis sagittis magna etiam.
          </p>
          <ul className="actions special">
            <li>
              <a href="/" className="button">
                Show
              </a>
            </li>
          </ul>
        </article>
        <article>
          <header>
            <h2>
              <a href="/">
                Odio magna
                <br />
                sed consectetur
              </a>
            </h2>
          </header>
          <a href="/" className="image fit">
            <img src={humano} alt="" />
          </a>
          <p>
            Donec eget ex magna. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Pellentesque venenatis dolor imperdiet dolor
            mattis sagittis magna etiam.
          </p>
          <ul className="actions special">
            <li>
              <a href="/" className="button">
                Show
              </a>
            </li>
          </ul>
        </article>
      </section>

      <footer></footer>
    </div>
  );
};

export default ProductsContent;
