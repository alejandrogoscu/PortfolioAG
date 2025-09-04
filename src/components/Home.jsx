import '../styles/Home.css';

const Home = () => {
  return (
    <>
      <div className="home__container" id="home">
        <div className="home__title">
          <h1 className="title__h1">Alejandro Goscu</h1>
          <h2 className="title__h2">Full Stack</h2>
          <h2 className="title__h2">Developer</h2>
        </div>

        <div className="home__social">
          <ul className="social__list">
            <li className="social__item">
              <a
                className="social__link"
                href="https://github.com/alejandrogoscu"
                rel="noreferrer"
                target="_blank"
                data-text="GitHub"
              >
                GitHub
              </a>
            </li>

            <li className="social__item">
              <a
                className="social__link"
                href="https://www.linkedin.com/in/alejandrogoscu/"
                rel="noreferrer"
                target="_blank"
                data-text="LinkedIn"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
