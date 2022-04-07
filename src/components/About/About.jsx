import { Button } from "antd";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./About.css";
const About = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="container">
      <div className="first-part-u">
        <div className="steam-definition-u">
          <img
            src="https://store.cloudflare.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016"
            alt=""
            data-aos="flip-up"
          />
          <p data-aos="flip-up">
            Steam is the ultimate destination for playing, discussing, and
            creating games.
          </p>
          <br />
          <Button
            style={{
              width: "250px",
              height: "50px",
              borderRadius: "100px",
              fontSize: "25px",
              textAlign: "center",
            }}
            data-aos="flip-up"
            variant="outlined"
          >
            Install Steam
          </Button>
        </div>
        <div className="about-video-u">
          <video
            data-aos="fade-in"
            autoPlay
            muted
            loop
            src="https://cdn.cloudflare.steamstatic.com/store/about/videos/about_hero_loop_web.mp4"
          ></video>
        </div>
      </div>
      {/* Part two */}
      <div data-aos="flip-up" className="about-part-two-u">
        <div className="part-two-text">
          <p className="part-two-header">Access Games Instantly</p>
          <p className="part-two-secondline">
            With nearly 30,000 games from AAA to indie and everything
            in-between. Enjoy exclusive deals, automatic game updates, and other
            great perks.
          </p>
          <Button
            className="browse-tag-u"
            href="https://store.steampowered.com/"
            color="#000000"
          >
            Browse the store ➡️
          </Button>
        </div>
        <div className="game-images">
          <div>
            <img
              style={{
                fontSize: "25px",
                marginLeft: "350px",
                width: "300px",
                marginTop: "100px",
              }}
              data-aos="fade-down-left"
              src="https://cdn.cloudflare.steamstatic.com/steam/apps/1418630/capsule_231x87.jpg?t=1647100775"
            ></img>
          </div>
          <div>
            <img
              style={{ fontSize: "25px", width: "300px", marginLeft: "150px" }}
              data-aos="fade-down-right"
              src="https://cdn.cloudflare.steamstatic.com/steam/apps/359550/capsule_231x87.jpg?t=1647433052"
            ></img>
          </div>
          <div>
            <img
              style={{ fontSize: "25px", width: "300px", marginLeft: "350px" }}
              data-aos="fade-down-left"
              src="https://cdn.cloudflare.steamstatic.com/steam/apps/271590/capsule_231x87.jpg?t=1618856444"
            ></img>
          </div>
          <div>
            <img
              style={{ fontSize: "25px", width: "300px", marginLeft: "150px" }}
              data-aos="fade-down-right"
              src="https://cdn.cloudflare.steamstatic.com/steam/apps/230410/capsule_231x87.jpg?t=1648492436"
            ></img>
          </div>
          <div>
            <img
              style={{ fontSize: "25px", width: "300px", marginLeft: "350px" }}
              data-aos="fade-down-left"
              src="https://cdn.cloudflare.steamstatic.com/steam/apps/920210/capsule_231x87.jpg?t=1648818898"
            ></img>
          </div>
          <div>
            <img
              style={{ fontSize: "25px", width: "300px", marginLeft: "150px" }}
              data-aos="fade-down-right"
              src="https://cdn.cloudflare.steamstatic.com/steam/apps/306130/capsule_231x87.jpg?t=1646864784"
            ></img>
          </div>
        </div>
      </div>
      <div>
        <div className="third-part-text-u">
          <div className="third-block-one">
            <p style={{ fontColor: "#4caf50" }}>
              Join the Local Community{" "}
              <img
                src="https://logos-download.com/wp-content/uploads/2021/01/Discord_Logo-1.png"
                width="150px"
                link
                to="https://discord.com/invite/6CvXGM5zsn"
              ></img>
            </p>
          </div>

          <div className="third-block-two">
            <p style={{ fontColor: "#4caf50" }}>
              ESC KG (Electronic Sports Community of Kyrgyzstan). <br /> Meet
              new people, join groups, form clans, chat in-game and more! With
              over 100 million potential friends (or e nemies), the fun never
              stops.
            </p>
            <img
              src="https://pbs.twimg.com/profile_images/1384555284799033346/1OZ7WdCY_400x400.jpg"
              style={{ width: "90px" }}
            />
            <a href="https://esckg.org/">www.esckg.org</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
