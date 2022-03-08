import { useEffect, useRef } from "react";
import { MdEmail, MdDownload } from "react-icons/md";
import Typed from "typed.js";

export default function Landing() {
  const el = useRef<HTMLSpanElement | null>(null);
  const typed = useRef<any>(null);

  useEffect(() => {
    const options = {
      strings: [
        "Embedded Development",
        "Tutoring",
        "Web Development",
        "Electronics",
        "Cloud Computing",
        "System Programming",
        "Internet of Things",
      ],
      loop: true,
      shuffle: true,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000
    };

    typed.current = new Typed(el.current!, options);

    return () => {
      typed.current.destroy();
    }
  }, []);

  return (
    <section className="h-full grid grid-cols-1 place-content-center gap-8 lg:grid-cols-3">
      <main className="order-2 lg:order-1 lg:p-10 lg:col-span-2">
        <h3 className="text-lg font-chakraPetch italic lg:text-6xl">Hello World,</h3>
        <h2 className="text-3xl font-chakraPetch italic lg:text-8xl">I am Hannan.</h2>
        <p className="my-3 text-base font-chakraPetch lg:text-xl">
          Currently working as an embedded software developer in automotive
          industry. I have strong interest in technology and trying to learn
          “widely” and “deeply” as possible. I love to code (probably too much?
          😅) but still managed to balance it out by doing other things like
          sports, “barista-ing” and hanging out with my family and friends.
        </p>
        <a
          href="mailto:work@hnnazm.com"
          className="w-fit inline-flex flex-row items-center space-x-2 md:text-lg bg-slate-400 opacity-80 p-3 rounded-lg"
        >
          <span>Contact Me</span>
          <MdEmail className="w-5 h-5" />
        </a>
      </main>

      <aside className="order-1 lg:order-2 flex flex-col justify-center items-center space-y-3">
        <img
          src="/memoji.gif"
          className="h-[300px] w-[300px] rounded-full" />

        <h4 className="font-chakraPetch lg:text-2xl">
          &lt;
          <span> </span>
          <span ref={el} />
          <span> </span>
          &#47;&gt;
        </h4>

        <a
          href="/CV.pdf"
          download
          className="flex flex-row items-center space-x-2"
        >
          <MdDownload className="w-5 h-5 text-stone-300" />
          <span className="underline-offset-8 hover:underline">Download CV</span>
        </a>
      </aside>
    </section>
  );
};
