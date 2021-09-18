import Link from "next/link";

export default function IndexPage() {
  return (
    <div>
      Hello World.{" "}
      <Link href="/about">
        <a>Aboutsssss</a>
      </Link>
    </div>
  );
}
