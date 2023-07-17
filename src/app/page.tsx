"use client"

import { useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import { loadFull } from "tsparticles";
import Particles from "react-particles";
import Typed from "typed.js";
import { MdEmail, MdDownload } from "react-icons/md";

export default function Landing() {
  const el = useRef<HTMLSpanElement | null>(null);
  const typed = useRef<any>(null);

  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

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
    <div className="lg:h-screen pb-12 text-stone-300">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fpsLimit: 60,
          fullScreen: {
            enable: true,
            zIndex: -100
          },
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                area: 800,
              },
            },
            color: {
              value: ["#fdcf58", "#757676", "#f27d0c", "#800909", "#f07f13"],
            },
            opacity: {
              value: { min: 0.1, max: 0.5 },
            },
            size: {
              value: { min: 1, max: 3 },
            },
            move: {
              enable: true,
              speed: 6,
              random: false,
            },
          },
          interactivity: {
            detectsOn: "window",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
          },
          background: {
            image: "radial-gradient(#003F63, #000)",
          },
        }} />

      <header className="p-3 flex flex-row justify-between items-center">
        <h1 className="font-audiowide lg:text-2xl">
          <Link href="/">
            hnnazm
          </Link>
        </h1>
        <nav className="space-x-2">
          <a
            href="https://github.com/hnnazm?tab=repositories"
            className="text-sm uppercase underline-offset-8 hover:underline font-chakraPetch"
          >
            &#47;&#47; Project
          </a>
          <Link
            href="/contact"
            className="text-sm uppercase underline-offset-8 hover:underline font-chakraPetch"
          >
            &#47;&#47; Contact
          </Link>
        </nav>
      </header>

      <main className="h-full px-5 py-8">
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
      </main>

      <footer>
      </footer>
    </div>
  );
};
