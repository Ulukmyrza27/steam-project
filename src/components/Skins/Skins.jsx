import * as React from "react";
import "./Skins.css";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import SteamAdd from "../SteamAdd/SteamAdd";
function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: ` ${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,

    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}
export default function CustomImageList() {
  return (
    <div className="imagelist-u">
      <SteamAdd />
      <div
        style={{
          width: "100%",
          height: "100px",
          display: "flex",
          flexDirection: "column",
          padding: "0 10px",
        }}
      >
        <h1 style={{ color: "white" }}>GAMES POSITION</h1>
        <div className="gorizont-1f"></div>
      </div>
      <div className="inner-image-list-u">
        <ImageList
          sx={{
            width: "80%",

            height: 600,
            margin: "15px auto",

            // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.

            transform: "translateZ(0)",
          }}
          rowHeight={200}
          gap={1}
        >
          {itemData.map((item) => {
            const cols = item.featured ? 2 : 1;

            const rows = item.featured ? 2 : 1;

            return (
              <ImageListItem key={item.img} cols={cols} rows={rows}>
                <img
                  {...srcset(item.img, 250, 200, rows, cols)}
                  alt={item.title}
                  loading="lazy"
                />

                <ImageListItemBar
                  sx={{
                    background:
                      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
                  }}
                  title={item.title}
                  position="top"
                  actionIcon={
                    <IconButton
                      sx={{ color: "white" }}
                      aria-label={`star ${item.title}`}
                    ></IconButton>
                  }
                  actionPosition="left"
                />
              </ImageListItem>
            );
          })}
        </ImageList>
      </div>
      <div
        style={{
          width: "80%",
          height: "500px",
          margin: "10px 150px",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "yellow" }}>DESCRIPTION</h1>
        <h3 style={{ color: "white", textAlign: "center" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
          possimus eum, at necessitatibus fugit maiores dolorem ex optio aliquam
          dolore velit assumenda temporibus vero ipsa. Illum fuga sed ab
          blanditiis repellat reprehenderit porro alias atque dolor fugiat
          expedita at veritatis facere ex doloremque amet facilis, officiis a
          placeat odio! Aliquid nisi illo itaque vitae minima. Voluptatibus
          nesciunt minus voluptatem, sapiente a quisquam obcaecati debitis
          deleniti, aut repudiandae doloribus, iusto inventore fuga quae
          laboriosam expedita et. Sit accusantium nobis nihil quas nemo corrupti
          aliquid sequi impedit rerum? Accusantium expedita consequatur
          exercitationem saepe vitae? Odit temporibus, molestiae nulla tempore
          praesentium magnam beatae? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Libero officia consectetur incidunt explicabo enim
          minus pariatur at quae, porro dolor molestiae corporis beatae nostrum?
          Ex, nostrum! Dolorum ut, architecto beatae tempora vero amet
          doloremque nobis repellat ducimus cum ea ad porro. Quaerat nesciunt ut
          temporibus? Commodi aspernatur iure dignissimos blanditiis tempore nam
          maiores et id natus laudantium fuga, dolor, rem repellendus aliquid
          consequatur! Culpa est rerum sit ut quae sed, qui similique at, nemo
          quidem, unde dicta veritatis numquam esse id non quis eligendi enim
          perferendis. Sit iusto harum, cumque voluptates aut reprehenderit
          velit at unde atque! Nisi, facilis delectus.
        </h3>
      </div>
    </div>
  );
}
const itemData = [
  {
    img: "https://i.pinimg.com/originals/dd/20/89/dd2089f73343b9d1523fbeb440c542a5.png",

    title: "Breakfast",

    author: "@bkristastucchio",

    featured: true,
  },

  {
    img: "https://c4.wallpaperflare.com/wallpaper/521/994/322/counter-strike-global-offensive-howl-cs-go-m4a4-m4a4-howl-cs-go-hd-wallpaper-preview.jpg",

    title: "Burger",

    author: "@rollelflex_graphy726",
  },

  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5N-lX26_Vyl_tl-dFGiwJYv_iuFGmRcpOmg&usqp=CAU",

    title: "Camera",

    author: "@helloimnik",
  },

  {
    img: "https://cq.ru/storage/uploads/images/78787/112133.jpg",

    title: "Coffee",

    author: "@nolanissac",
  },

  {
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/730/ss_92c05c1cb1319beb15ed92c63b6b1d6f261d2f64.600x338.jpg?t=1641233427",

    title: "Hats",

    author: "@hjrc33",
  },

  {
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/730/ss_3cef516c1a3c338f2554f3f11790aba3b7c0add7.600x338.jpg?t=1641233427",

    title: "Honey",

    author: "@arwinneil",

    featured: true,
  },

  {
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/730/ss_60b4f959497899515f46012df805b0006ef21af6.600x338.jpg?t=1641233427",

    title: "Basketball",

    author: "@tjdragotta",
  },
  {
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/730/ss_110be563b66dde31b3b00dcf7d2f644c50374f07.1920x1080.jpg?t=1641233427",
    title: "Fern",
    author: "@katie_wasserman",
  },
  {
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/730/ss_34090867f1a02b6c17652ba9043e3f622ed985a9.1920x1080.jpg?t=1641233427",
    title: "Mushrooms",
    author: "@silverdalex",
  },
  {
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/730/ss_2b9e362287b509bb3864fa7bad654fe1fda0f7ed.1920x1080.jpg?t=1641233427",
    title: "Tomato basil",
    author: "@shelleypauls",
  },
  {
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/730/ss_855c016cde14b7cec5c3d2523589b9054c030010.1920x1080.jpg?t=1641233427",
    title: "Sea star",
    author: "@peterlaster",
  },
  {
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/730/ss_8c9cce9a9dde7b9c020837dcbd4615efe6f77d66.1920x1080.jpg?t=1641233427",
    title: "Bike",
    author: "@southside_customs",
  },
];
