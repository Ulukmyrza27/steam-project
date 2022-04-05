import { Button } from "@mui/material";
import { color } from "@mui/system";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import "./About.css";
const About = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="first-part-u">
        <div className="steam-definition-u">
          <img
            src="https://store.cloudflare.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016"
            alt=""
          />
          <p style={{ fontSize: "25px" }}>
            Steam is the ultimate destination for playing, discussing, and
            creating games.
          </p>
          <br />
          <Button data-aos="flip-up" variant="outlined">
            Install Steam
          </Button>
        </div>
        <div className="about-video-u">
          <video
            width="70%"
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
            color="secondary"
            style={{ fontSize: "25px" }}
          >
            Browse the store 👉
          </Button>
        </div>
        <div className="game-images">
          <div>
            <img
              style={{
                marginLeft: "500px",
                fontSize: "25px",
                width: "300px",
                marginTop: "100px",
              }}
              data-aos="fade-down-left"
              src="https://cdn.cloudflare.steamstatic.com/steam/apps/1418630/capsule_231x87.jpg?t=1647100775"
            ></img>
          </div>
          <div>
            <img
              style={{ marginLeft: "100px", fontSize: "25px" }}
              data-aos="fade-down-right"
              src="https://cdn.cloudflare.steamstatic.com/steam/apps/359550/capsule_231x87.jpg?t=1647433052"
            ></img>
          </div>
          <div>
            <img
              style={{ fontSize: "25px", width: "300px", marginLeft: "400px" }}
              data-aos="fade-down-left"
              src="https://cdn.cloudflare.steamstatic.com/steam/apps/271590/capsule_231x87.jpg?t=1618856444"
            ></img>
          </div>
          <div>
            <img
              style={{ fontSize: "25px", width: "400px", marginLeft: "50px" }}
              data-aos="fade-down-right"
              src="https://cdn.cloudflare.steamstatic.com/steam/apps/230410/capsule_231x87.jpg?t=1648492436"
            ></img>
          </div>
          <div>
            <img
              style={{ fontSize: "25px", width: "200px", marginLeft: "400px" }}
              data-aos="fade-down-left"
              src="https://cdn.cloudflare.steamstatic.com/steam/apps/920210/capsule_231x87.jpg?t=1648818898"
            ></img>
          </div>
          <div>
            <img
              style={{ fontSize: "25px", width: "200px" }}
              data-aos="fade-down-right"
              src="https://cdn.cloudflare.steamstatic.com/steam/apps/306130/capsule_231x87.jpg?t=1646864784"
            ></img>
          </div>
        </div>
      </div>
      <div>
        <div className="third-part-text-u" data-aos="fade-down-right">
          <p style={{ fontSize: "45px", fontColor: "#4caf50" }}>
            Join the Community.
          </p>
          <p style={{ fontSize: "25px", fontColor: "#4caf50" }}>
            Meet new people, join groups, form clans, chat in-game and more!
            With over 100 million potential friends (or e nemies), the fun never
            s t ops.
          </p>
        </div>
      </div>
    </>
  );
};
export default About;
