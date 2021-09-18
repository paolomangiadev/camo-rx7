import Image from "next/image";

export default function IndexPage() {
  const HomeViewPort = () => (
    <div className="full-height-view">
      <Image
        src="https://www.datocms-assets.com/55576/1631985499-loop.gif"
        width="100"
        height="100"
      />
    </div>
  );

  return (
    <main className="main">
      <HomeViewPort />
    </main>
  );
}
