import Link from "next/link";
import Image from "next/image";
import pic from "../public/loop.gif";

export default function IndexPage() {
  return (
    <div>
      Hello World. <Image src={pic} />
    </div>
  );
}
