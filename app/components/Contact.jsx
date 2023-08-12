import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="bg-gray-100 py-6 px-2 lg:px-3">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          Let&apos;s Connect
        </h2>
        <p className="text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="flex justify-center py-6 gap-8">
          <Link href="https://github.com/">
            <span className="sr-only">Visit my GitHub profile</span>
            <BsGithub size={50} color="black" title="My GitHub profile" />
          </Link>
          <Link href="https://www.linkedin.com/in/">
            <span className="sr-only">Visit my LinkedIn profile</span>
            <BsLinkedin size={50} color="black" title="My LinkedIn profile" />
          </Link>
          <Link href="mailto:xxx@yyy.com">
            <span className="sr-only">Send me an email </span>
            <AiOutlineMail size={54} color="black" title="My Email" />
          </Link>
        </div>
      </div>
    </section>
  );
}