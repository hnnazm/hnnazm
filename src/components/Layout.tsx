import { useCallback } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { loadFull } from "tsparticles";
import Particles from "react-particles";

export default function Layout() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="lg:h-screen pb-12 text-stone-300">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          // preset: "fire",
          fpsLimit: 40,
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
          <NavLink to="/">
            hnnazm
          </NavLink>
        </h1>
        <nav className="space-x-2">
          <a
            href="https://github.com/hnnazm?tab=repositories"
            className="text-sm uppercase underline-offset-8 hover:underline font-chakraPetch"
          >
            &#47;&#47; Project
          </a>
          <a
            href="https://www.linkedin.com/in/hnnazm"
            className="text-sm uppercase underline-offset-8 hover:underline font-chakraPetch"
          >
            &#47;&#47; Profile
          </a>
        </nav>
      </header>

      <main className="h-full px-5 py-8">
        <Outlet />
      </main>

      <footer>
      </footer>
    </div>
  );
};
