import Image from "next/image";

export default function IndexPage() {
  const HomeViewPort = () => (
    <div className="full-height-view">
      <div className="wrapper">
        <Title />
      </div>
      <div className="wrapper">
        <img
          src="https://www.datocms-assets.com/55576/1631985499-loop.gif"
          width="300"
          height="300"
          className="rx7_loop_img"
          alt=""
        />
      </div>
    </div>
  );

  const Title = () => (
    <img
      src="https://www.datocms-assets.com/55576/1631991918-camorx7title.png"
      width="1355"
      height="195"
      className="rx_title"
      alt=""
    />
  );

  return (
    <main className="main">
      <HomeViewPort />
    </main>
  );
}
