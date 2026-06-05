import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/education", label: "Education" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
  { to: "/bookappointment", label: "Book Appointment" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white border-b border-gray-200 shadow-sm transition-all duration-500">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">

        {/* =====================================================
            LOGO
        ===================================================== */}

        <Link
          to="/"
          className="flex items-center gap-4 group"
        >
          <img
            src={logo}
            alt="NMDC Logo"
            className="h-14 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
          />

          <span className="flex flex-col leading-none">
            <span className="font-display text-xl tracking-wide text-charcoal">              NMDC
            </span>

            <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Nazeer Maxillofacial & Dental Center
            </span>
          </span>
        </Link>

        {/* =====================================================
            DESKTOP NAVIGATION
        ===================================================== */}

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            l.label === "Book Appointment" ? (
              <Link
                key={l.to}
                to={l.to}
                className="rounded-full bg-gray-200 px-5 py-2.5 text-sm font-bold tracking-wide text-charcoal hover:bg-gray-300 transition-colors"
              >
                {l.label}
              </Link>
            ) : (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{
                  exact: l.to === "/",
                }}
                className="link-underline text-sm tracking-wide text-charcoal/80 hover:text-charcoal transition-colors"
              >
                {l.label}
              </Link>
            )
          ))}
        </nav>


        {/* =====================================================
            MOBILE MENU BUTTON
        ===================================================== */}

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden grid h-11 w-11 place-items-center rounded-full border border-border bg-background/80 backdrop-blur-md"
          aria-label="Menu"
        >
          {open ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            transition={{
              duration: 0.25,
            }}
            className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl"
          >
            <div className="flex flex-col gap-1 px-6 py-6">

              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="border-b border-border/60 py-4 text-base text-charcoal transition-colors hover:text-gold"                >
                  {l.label}
                </Link>
              ))}

              <Link
                to="/bookappointment"
                onClick={() => setOpen(false)}
                className="mt-5 inline-flex items-center justify-center rounded-full bg-gray-200 px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-charcoal hover:bg-gray-300 transition-colors"              >
                Book Appointment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}