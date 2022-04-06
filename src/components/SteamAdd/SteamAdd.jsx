import React from "react";
import { Carousel } from "antd";
import "./SteamAdd.css";

const SteamAdd = () => {
  const contentStyle = {
    height: "400px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
    width: "100%",
  };

  return (
    <div style={{ width: "100%" }}>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <h1
          className="skins_bg"
          style={{ fontWeight: "bold", fontSize: "50px" }}
        >
          SKINS
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <div style={{ width: "700px", height: "500px" }}>
          <h1 style={{ color: "white", fontWeight: "bold" }}>ASIMOV</h1>
          <Carousel autoplay>
            <div>
              <h3 style={contentStyle}>
                <img
                  style={{ width: "700px", height: "400px" }}
                  src="https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/WP%20Media%20Folder%20-%20esports-com//var/app/current/web/app/uploads/2020/10/asimov-ak47-768x432.jpg"
                  alt=""
                />
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>
                <img
                  style={{ width: "700px", height: "400px" }}
                  src="https://s1.1zoom.me/b5050/191/431843-Kycb_1366x768.jpg"
                  alt=""
                />
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>
                <img
                  style={{ width: "700px", height: "400px" }}
                  src="https://i.ytimg.com/vi/LGPQn-evfGM/maxresdefault.jpg"
                  alt=""
                />
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>
                <img
                  style={{ width: "700px", height: "400px" }}
                  src="https://ae01.alicdn.com/kf/HTB1TxcQIVXXXXa7XFXXq6xXFXXXQ/Posters-P250-Asiimov-asiimov-Coridium-CSGO-Counter-Strike-Global-Offensive-Skin-Weapon-Printing-cloth-silk-on.jpg"
                  alt=""
                />
              </h3>
            </div>
          </Carousel>
        </div>
        <div style={{ width: "700px", height: "500px" }}>
          <h1 style={{ color: "yellow" }}>DESCRIPTION</h1>
          <h3 style={{ color: "white" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
            possimus eum, at necessitatibus fugit maiores dolorem ex optio
            aliquam dolore velit assumenda temporibus vero ipsa. Illum fuga sed
            ab blanditiis repellat reprehenderit porro alias atque dolor fugiat
            expedita at veritatis facere ex doloremque amet facilis, officiis a
            placeat odio! Aliquid nisi illo itaque vitae minima. Voluptatibus
            nesciunt minus voluptatem, sapiente a quisquam obcaecati debitis
            deleniti, aut repudiandae doloribus, iusto inventore fuga quae
            laboriosam expedita et. Sit accusantium nobis nihil quas nemo
            corrupti aliquid sequi impedit rerum? Accusantium expedita
            consequatur exercitationem saepe vitae? Odit temporibus, molestiae
            nulla tempore praesentium magnam beatae?
          </h3>
        </div>

        <div style={{ width: "700px", height: "500px" }}>
          <h1 style={{ color: "brown", fontWeight: "bold" }}>ASIMOV BLACK</h1>
          <Carousel autoplay>
            <div>
              <h3 style={contentStyle}>
                <img
                  style={{ width: "700px", height: "400px" }}
                  src="https://img3.goodfon.ru/wallpaper/nbig/9/16/bizon-asiimov-asiimov.jpg"
                  alt=""
                />
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>
                <img
                  style={{ width: "700px", height: "400px" }}
                  src="https://img3.goodfon.ru/wallpaper/nbig/f/22/tec9-asiimov-isaac-asiimov.jpg"
                  alt=""
                />
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>
                <img
                  style={{ width: "700px", height: "400px" }}
                  src="https://wf.cdn.gmru.net/ms/data/newsx/96cf1a923c26df16cb50591e20b1206b.jpg"
                  alt=""
                />
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>
                <img
                  style={{ width: "700px", height: "400px" }}
                  src="https://wf.cdn.gmru.net/ms/a8aad2815ed0f9e5b340ecdb4af3e9f9.png"
                  alt=""
                />
              </h3>
            </div>
          </Carousel>
        </div>
        <div style={{ width: "700px", height: "500px" }}>
          <h1 style={{ color: "yellow" }}>DESCRIPTION</h1>
          <h3 style={{ color: "white" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
            possimus eum, at necessitatibus fugit maiores dolorem ex optio
            aliquam dolore velit assumenda temporibus vero ipsa. Illum fuga sed
            ab blanditiis repellat reprehenderit porro alias atque dolor fugiat
            expedita at veritatis facere ex doloremque amet facilis, officiis a
            placeat odio! Aliquid nisi illo itaque vitae minima. Voluptatibus
            nesciunt minus voluptatem, sapiente a quisquam obcaecati debitis
            deleniti, aut repudiandae doloribus, iusto inventore fuga quae
            laboriosam expedita et. Sit accusantium nobis nihil quas nemo
            corrupti aliquid sequi impedit rerum? Accusantium expedita
            consequatur exercitationem saepe vitae? Odit temporibus, molestiae
            nulla tempore praesentium magnam beatae?
          </h3>
        </div>
        <div style={{ width: "700px", height: "500px" }}>
          <h1 style={{ color: "white", fontWeight: "bold" }}>Bad Santa</h1>
          <Carousel autoplay>
            <div>
              <h3 style={contentStyle}>
                <img
                  style={{ width: "700px", height: "400px" }}
                  src="https://blog.cs.money/wp-content/uploads/2022/01/awp-_-wildfire.png"
                  alt=""
                />
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>
                <img
                  style={{ width: "700px", height: "400px" }}
                  src="https://blog.cs.money/wp-content/uploads/2022/01/ak-47-_-neon-rider-2.png"
                  alt=""
                />
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>
                <img
                  style={{ width: "700px", height: "400px" }}
                  src="https://blog.cs.money/wp-content/uploads/2022/01/mp9-_-food-chain.png"
                  alt=""
                />
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>
                <img
                  style={{ width: "700px", height: "400px" }}
                  src="https://blog.cs.money/wp-content/uploads/2022/01/glock-18-_-gamma-doppler-1.png"
                  alt=""
                />
              </h3>
            </div>
          </Carousel>
        </div>
        <div style={{ width: "700px", height: "500px" }}>
          <h1 style={{ color: "yellow" }}>DESCRIPTION</h1>
          <h3 style={{ color: "white" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
            possimus eum, at necessitatibus fugit maiores dolorem ex optio
            aliquam dolore velit assumenda temporibus vero ipsa. Illum fuga sed
            ab blanditiis repellat reprehenderit porro alias atque dolor fugiat
            expedita at veritatis facere ex doloremque amet facilis, officiis a
            placeat odio! Aliquid nisi illo itaque vitae minima. Voluptatibus
            nesciunt minus voluptatem, sapiente a quisquam obcaecati debitis
            deleniti, aut repudiandae doloribus, iusto inventore fuga quae
            laboriosam expedita et. Sit accusantium nobis nihil quas nemo
            corrupti aliquid sequi impedit rerum? Accusantium expedita
            consequatur exercitationem saepe vitae? Odit temporibus, molestiae
            nulla tempore praesentium magnam beatae?
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SteamAdd;
