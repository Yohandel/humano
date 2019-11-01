import React from "react";

const HomeContent = () => {
  return (
    <div id="main" style={{ marginTop: 50 }}>
      <header className="major">
        <h1>Home</h1>
      </header>

      <section className="post featured">
        <article>
          <a href="/" className="image fit">
            <img src="images/pic02.jpg" alt="" />
          </a>
          <p>
            Donec eget ex magna. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Pellentesque venenatis dolor imperdiet dolor
            mattis sagittis magna etiam. Donec eget ex magna. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Pellentesque
            venenatis dolor impe Donec eget ex magna. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor
            impe Donec eget ex magna. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Pellentesque venenatis dolor impe
          </p>

          <p>
            Donec eget ex magna. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Pellentesque venenatis dolor imperdiet dolor
            mattis sagittis magna etiam. Donec eget ex magna. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Pellentesque
            venenatis dolor impe Donec eget ex magna. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor
            impe Donec eget ex magna. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Pellentesque venenatis dolor impe
          </p>
          <ul className="actions special">
            <li>
              <a href="products" className="button">
                Products
              </a>
            </li>
          </ul>
        </article>
      </section>

      <footer></footer>
    </div>
  );
};

export default HomeContent;
