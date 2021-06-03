export default function () {
    return (<section id="about" className="about">
        <img src="./img/background-2.jpg" />
        <div className="aboutContent">
            <h1>More About Me :)</h1>
            <p>
                I am Mohammad Nawfal a full stack web developer and a mobile cross
                platform developer
      <br />
      The surprise is that I have a social media accounts :D
      <br />
      If you want to contact me then just click on any icon below
    </p>
            <div className="social-media-icons">
                <a href="#" style={{ color: "#3b5998" }}>
                    <i className="fab fa-facebook"></i>
                </a>
                <a href="#" style={{ color: "#833ab4" }}>
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="#" style={{ color: "black" }}>
                    <i className="fab fa-github"></i>
                </a>
                <a href="#" style={{ color: "#0e76a8" }}>
                    <i className="fab fa-linkedin"></i>
                </a>
            </div>
        </div>
    </section>
    );
}