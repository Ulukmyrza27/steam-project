import React from "react";
import "./ImageStart.css";

const ImageStart = () => {
  return (
    <div className="home-bg-a">
      <div className="image-start">
        <div>
          <h1 className="v-v-v">«СОВРЕМЕННЫЙ МНОГОПОЛЬЗОВАТЕЛЬСКИЙ ШЕДЕВР»</h1>
        </div>
        <div>
          <button className="down-game">
            <h3 style={{ color: "white" }}>Играть Бесплатно</h3>
            <h5 style={{ color: "white" }}>Download Steam</h5>
          </button>
        </div>

        <div className="video-start">
          <video
            style={{ margin: "0 30px" }}
            width="500px"
            loop
            muted
            autoPlay
            src="https://cdn.akamai.steamstatic.com/steam/apps/256660296/microtrailer.webm?t=1454099186"
          ></video>
          <video
            style={{ margin: "0 30px" }}
            width="500px"
            loop
            muted
            autoPlay
            src="https://cdn.akamai.steamstatic.com/steam/apps/81958/microtrailer.webm?t=1554409259"
          ></video>
        </div>
        <div>
          <h1 className="game-abs-a" style={{ color: "white" }}>
            GAMES
          </h1>
        </div>
        <div className="image-csa">
          <div className="card-game-a">
            {" "}
            <img
              className="img-card-u"
              style={{ width: "250px", height: "300px" }}
              src="https://img.g2a.com/323x433/1x1x0/the-planet-crafter-pc-steam-gift-global/9abbb9bd96c14e7d91f8e247"
              alt=""
            />
            <h4 style={{ color: "white" }}>Planet Crafter</h4>
            <button className="game-btn-a">Download</button>
          </div>
          <div className="card-game-a">
            {" "}
            <img
              className="img-card-u"
              style={{ width: "250px", height: "300px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjs88PUFWWvnbVMzSZDiq__JRsLST6m166cA&usqp=CAU"
              alt=""
            />
            <h4 style={{ color: "white" }}>Worl of Tanks</h4>
            <button className="game-btn-a">Download</button>
          </div>
          <div className="card-game-a">
            {" "}
            <img
              className="img-card-u"
              style={{ width: "250px", height: "300px" }}
              src="https://m.media-amazon.com/images/M/MV5BZDQxMjVmMjYtZTU4OC00MzRhLTljNTgtMTAwMDg3YzhlY2M4L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg"
              alt=""
            />
            <h4 style={{ color: "white" }}>Dota 2</h4>
            <button className="game-btn-a">Download</button>
          </div>
          <div className="card-game-a">
            {" "}
            <img
              className="img-card-u"
              style={{ width: "250px", height: "300px" }}
              src="https://static-cdn.jtvnw.net/ttv-boxart/32399-285x380.jpg"
              alt=""
            />
            <h4 style={{ color: "white" }}>CS:GO</h4>
            <button className="game-btn-a">Download</button>
          </div>

          <div className="card-game-a">
            {" "}
            <img
              className="img-card-u"
              style={{ width: "250px", height: "300px" }}
              src="https://img.championat.com/c/900x900/news/big/p/x/istoriya-bojcov-mortal-kombat_16172665331653415604.jpg"
              alt=""
            />
            <h4 style={{ color: "white" }}>Mortal Combat</h4>
            <button className="game-btn-a">Download</button>
          </div>
          <div className="card-game-a">
            {" "}
            <img
              className="img-card-u"
              style={{ width: "250px", height: "300px" }}
              src="https://gamesisart.ru/images/screens/Mafia_3_Cover.jpg"
              alt=""
            />
            <h4 style={{ color: "white" }}>Mafia 3</h4>
            <button className="game-btn-a">Download</button>
          </div>
          <div className="card-game-a">
            {" "}
            <img
              className="img-card-u"
              style={{ width: "250px", height: "300px" }}
              src="https://upload.wikimedia.org/wikipedia/ru/7/72/NFS-Most-Wanted-2012-Front.jpg"
              alt=""
            />
            <h4 style={{ color: "white" }}>NFS MOST WANTED</h4>
            <button className="game-btn-a">Download</button>
          </div>
          <div className="card-game-a">
            {" "}
            <img
              className="img-card-u"
              style={{ width: "250px", height: "300px" }}
              src="https://upload.wikimedia.org/wikipedia/ru/thumb/c/c9/%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%B8%D0%B3%D1%80%D1%8B_PlayerUnknown%27s_Battlegrounds.jpg/640px-%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%B8%D0%B3%D1%80%D1%8B_PlayerUnknown%27s_Battlegrounds.jpg"
              alt=""
            />
            <h4 style={{ color: "white" }}>PUBG</h4>
            <button className="game-btn-a">Download</button>
          </div>
        </div>
        <div>
          <h1 style={{ color: "white" }}>DOTA 2</h1>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <video
            width="100%"
            loop
            muted
            autoPlay
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/homepage/dota_montage_webm.webm"
          ></video>
        </div>
        <div style={{ marginTop: "15px" }}>
          <h1 style={{ color: "white" }}>PUBG: BATTLEGROUNDS</h1>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <video
            width="100%"
            loop
            muted
            autoPlay
            src="https://cdn.akamai.steamstatic.com/steam/apps/256864911/movie480_vp9.webm?t=1639450117"
          ></video>
        </div>
        <div style={{ marginTop: "15px" }}>
          <h1 style={{ color: "white" }}>DETROIT</h1>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <video
            width="100%"
            loop
            muted
            autoPlay
            src="https://cdn.cloudflare.steamstatic.com/steam/apps/256784014/microtrailer.webm?t=1590429401"
          ></video>
        </div>
        <div
          className="image-start-end"
          style={{
            width: "100%",
            height: "200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {" "}
          <h1 style={{ color: "white" }}>Game Start</h1>{" "}
          <h3 style={{ width: "80%", color: "white" }}>
            Steam — онлайн-сервис цифрового распространения компьютерных игр и
            программ, разработанный и поддерживаемый компанией Valve. Steam
            выполняет роль средства технической защиты авторских прав, платформы
            для многопользовательских игр и потокового вещания, а также
            социальной сети для игроков.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ImageStart;
