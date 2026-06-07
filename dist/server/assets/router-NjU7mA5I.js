import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Link, createRootRouteWithContext, useRouter, useLocation, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, redirect, createRouter } from "@tanstack/react-router";
import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { X, Menu, Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
const appCss = "/assets/styles-BfyPpy4P.css";
const logo = "/assets/logo-B9s_NXSz.png";
const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/education", label: "Education" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
  { to: "/bookappointment", label: "Book Appointment" }
];
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxs("header", { className: "fixed inset-x-0 top-0 z-50 bg-white border-b border-gray-200 shadow-sm transition-all duration-500", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10", children: [
      /* @__PURE__ */ jsxs(
        Link,
        {
          to: "/",
          className: "flex items-center gap-4 group",
          children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: logo,
                alt: "NMDC Logo",
                className: "h-14 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
              }
            ),
            /* @__PURE__ */ jsxs("span", { className: "flex flex-col leading-none", children: [
              /* @__PURE__ */ jsx("span", { className: "font-display text-xl tracking-wide text-charcoal", children: "              NMDC" }),
              /* @__PURE__ */ jsx("span", { className: "text-[10px] uppercase tracking-[0.25em] text-muted-foreground", children: "Nazeer Maxillofacial & Dental Center" })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsx("nav", { className: "hidden lg:flex items-center gap-10", children: links.map((l) => l.label === "Book Appointment" ? /* @__PURE__ */ jsx(
        Link,
        {
          to: l.to,
          className: "rounded-full bg-gray-200 px-5 py-2.5 text-sm font-bold tracking-wide text-charcoal hover:bg-gray-300 transition-colors",
          children: l.label
        },
        l.to
      ) : /* @__PURE__ */ jsx(
        Link,
        {
          to: l.to,
          activeOptions: {
            exact: l.to === "/"
          },
          className: "link-underline text-sm tracking-wide text-charcoal/80 hover:text-charcoal transition-colors",
          children: l.label
        },
        l.to
      )) }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setOpen((v) => !v),
          className: "lg:hidden grid h-11 w-11 place-items-center rounded-full border border-border bg-background/80 backdrop-blur-md",
          "aria-label": "Menu",
          children: open ? /* @__PURE__ */ jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(Menu, { className: "h-5 w-5" })
        }
      )
    ] }),
    /* @__PURE__ */ jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: {
          opacity: 0,
          y: -10
        },
        animate: {
          opacity: 1,
          y: 0
        },
        exit: {
          opacity: 0,
          y: -10
        },
        transition: {
          duration: 0.25
        },
        className: "lg:hidden border-t border-border bg-background/95 backdrop-blur-xl",
        children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1 px-6 py-6", children: [
          links.map((l) => /* @__PURE__ */ jsx(
            Link,
            {
              to: l.to,
              onClick: () => setOpen(false),
              className: "border-b border-border/60 py-4 text-base text-charcoal transition-colors hover:text-gold",
              children: l.label
            },
            l.to
          )),
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/bookappointment",
              onClick: () => setOpen(false),
              className: "mt-5 inline-flex items-center justify-center rounded-full bg-gray-200 px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-charcoal hover:bg-gray-300 transition-colors",
              children: "Book Appointment"
            }
          )
        ] })
      }
    ) })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "relative mt-32 bg-charcoal text-white", children: [
    "      ",
    /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 top-0 hairline" }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10 py-20 grid gap-14 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("span", { className: "grid h-10 w-10 place-items-center rounded-full border border-gold/40 font-display text-gold", children: "              N" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-display text-xl", children: "NMDC" }),
            /* @__PURE__ */ jsx("p", { className: "text-[10px] uppercase tracking-[0.3em] text-white/60", children: "                Nazeer Maxillofacial & Dental Center" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-md text-sm leading-relaxed text-white/70", children: "            Led by Brig Dr Muhammad Nazeer Khan — BDS, MCPS, FCPS — with advanced fellowships in maxillofacial surgery and medical education (MHPE, IPPCR), and serving as Member & Regional Faculty of AOCMF / AOPEER (Switzerland). NMDC represents a standard of precision-driven care in oral and maxillofacial surgery, combining international training, modern surgical techniques, and a deeply patient-centered approach to treatment and recovery." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.25em] text-gold-soft", children: "Explore" }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-6 space-y-3 text-sm text-white/80", children: [
          "            ",
          [
            { to: "/", label: "Home" },
            { to: "/services", label: "Services" },
            { to: "/education", label: "Education" },
            { to: "/reviews", label: "Reviews" },
            { to: "/contact", label: "Contact" }
          ].map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link, { to: l.to, className: "hover:text-gold transition-colors", children: [
            "                  ",
            l.label
          ] }) }, l.to))
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.25em] text-gold-soft", children: "Contact" }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-6 space-y-5 text-sm text-white/80", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(Phone, { className: "mt-0.5 h-4 w-4 text-red-600 shrink-0" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-[10px] uppercase tracking-[0.2em] text-white/40", children: "Phone" }),
              /* @__PURE__ */ jsx("a", { href: "tel:0512715959", className: "mt-1 inline-block hover:text-gold", children: "                  051 2715959" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(MessageCircle, { className: "mt-0.5 h-4 w-4 text-red-600 shrink-0" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-[10px] uppercase tracking-[0.2em] text-white/40", children: "                  WhatsApp" }),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "https://wa.me/923336070227",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "mt-1 inline-block hover:text-green-400",
                  children: "0333 6070227"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(Mail, { className: "mt-0.5 h-4 w-4 text-red-600 shrink-0" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-[10px] uppercase tracking-[0.2em] text-white/40", children: "                  Email" }),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "mailto:nazeermdclinic@gmail.com",
                  className: "mt-1 inline-block hover:text-gold break-all",
                  children: "nazeermdclinic@gmail.com"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "mt-0.5 h-4 w-4 text-red-600 shrink-0" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-[10px] uppercase tracking-[0.2em] text-white/40", children: "                  Address" }),
              /* @__PURE__ */ jsxs("p", { className: "mt-1 leading-relaxed", children: [
                "Office #222, 2nd Floor Rafay Mall,",
                /* @__PURE__ */ jsx("br", {}),
                "Peshawar Road, Westridge 1,",
                /* @__PURE__ */ jsx("br", {}),
                "Rawalpindi, Pakistan"
              ] })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-t border-white/10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50", children: [
      /* @__PURE__ */ jsxs("p", { className: "flex flex-wrap items-center gap-2 text-center md:text-left", children: [
        /* @__PURE__ */ jsxs("span", { children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " Rexcore Team."
        ] }),
        /* @__PURE__ */ jsx("span", { children: "Get in touch:" }),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "mailto:solutionrexcore@gmail.com",
            className: "text-white hover:text-white transition-colors underline underline-offset-4",
            children: "solutionrexcore@gmail.com"
          }
        ),
        /* @__PURE__ */ jsx("span", { children: "|" }),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "tel:+923392460805",
            className: "text-white hover:text-white transition-colors underline underline-offset-4",
            children: "+92 339 2460805"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("p", { className: "tracking-[0.25em] uppercase", children: "Crafted with quiet precision" })
    ] }) })
  ] });
}
function WhatsAppButton() {
  return /* @__PURE__ */ jsxs(
    "a",
    {
      href: "https://wa.me/923336070227",
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "WhatsApp chat +92 333 607 0227",
      className: "fixed bottom-5 right-5 z-50",
      children: [
        /* @__PURE__ */ jsx("span", { className: "absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping" }),
        /* @__PURE__ */ jsx("span", { className: "relative flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:scale-110", children: /* @__PURE__ */ jsx(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 32 32",
            width: "18",
            height: "18",
            fill: "currentColor",
            "aria-hidden": "true",
            children: /* @__PURE__ */ jsx("path", { d: "M19.11 17.39c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.41.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47l-.52-.01c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29 0 1.35.99 2.66 1.13 2.84.14.18 1.95 2.97 4.72 4.17.66.28 1.18.45 1.58.58.66.21 1.26.18 1.74.11.53-.08 1.6-.65 1.83-1.28.23-.62.23-1.16.16-1.28-.07-.12-.25-.18-.52-.32zM16.01 3C8.83 3 3 8.82 3 16c0 2.54.74 5 2.13 7.11L3 29l6.08-2.04A12.9 12.9 0 0 0 16.01 29C23.18 29 29 23.18 29 16S23.18 3 16.01 3z" })
          }
        ) })
      ]
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(Link, { to: "/", className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground", children: "Go home" }) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold text-foreground", children: "Something went wrong" }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex gap-2 justify-center", children: [
      /* @__PURE__ */ jsx("button", { onClick: () => {
        router2.invalidate();
        reset();
      }, className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground", children: "Try again" }),
      /* @__PURE__ */ jsx("a", { href: "/", className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground", children: "Go home" })
    ] })
  ] }) });
}
const Route$m = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "NMDC - Nazeer Maxillofacial & Dental Center" },
      { name: "description", content: "Advanced dental and maxillofacial care in Pakistan, led by Dr Brig Nazeer." },
      { property: "og:type", content: "website" }
    ],
    links: [{ rel: "stylesheet", href: appCss }]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$m.useRouteContext();
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/brigaidear");
  if (isAdminRoute) {
    return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(Outlet, {}) });
  }
  return /* @__PURE__ */ jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("main", { className: "min-h-screen", children: /* @__PURE__ */ jsx(Outlet, {}) }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(WhatsAppButton, {})
  ] });
}
const $$splitComponentImporter$j = () => import("./services-DpD_kp8y.js");
const Route$l = createFileRoute("/services")({
  head: () => ({
    meta: [{
      title: "Services — Dental & Maxillofacial | NMDC"
    }, {
      name: "description",
      content: "Complete dental and maxillofacial services including implants, smile design, jaw surgery, facial trauma care, orthodontics and cosmetic dentistry at NMDC."
    }, {
      property: "og:title",
      content: "Services — NMDC"
    }, {
      property: "og:description",
      content: "Comprehensive dental and maxillofacial treatments at NMDC."
    }, {
      property: "og:url",
      content: "/services"
    }],
    links: [{
      rel: "canonical",
      href: "/services"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$j, "component")
});
const $$splitComponentImporter$i = () => import("./reviews-C9Rdeh2E.js");
const Route$k = createFileRoute("/reviews")({
  head: () => ({
    meta: [{
      title: "Patient Reviews — NMDC | Dr Brig Nazeer"
    }, {
      name: "description",
      content: "Read genuine reviews from patients across Pakistan about their experience at NMDC."
    }, {
      property: "og:title",
      content: "Patient Reviews — NMDC"
    }, {
      property: "og:url",
      content: "/reviews"
    }],
    links: [{
      rel: "canonical",
      href: "/reviews"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$i, "component")
});
const $$splitComponentImporter$h = () => import("./education-ZtLqCuaF.js");
const Route$j = createFileRoute("/education")({
  component: lazyRouteComponent($$splitComponentImporter$h, "component")
});
const $$splitComponentImporter$g = () => import("./contact-CZrEI67f.js");
const Route$i = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact & Book Appointment | NMDC"
    }, {
      name: "description",
      content: "Contact NMDC and book a private appointment with Brig Dr Nazeer. Phone 0333 6070227 or WhatsApp."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$g, "component")
});
const $$splitComponentImporter$f = () => import("./bookappointment-GZuEAZT4.js");
const Route$h = createFileRoute("/bookappointment")({
  head: () => ({
    meta: [{
      title: "Book Appointment — NMDC | Dr Brig Nazeer"
    }, {
      name: "description",
      content: "Book a private appointment with Dr Brig Nazeer at NMDC. Fill out the form and we'll confirm via WhatsApp."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$f, "component")
});
const $$splitComponentImporter$e = () => import("./index-BC_50GmX.js");
const Route$g = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "NMDC — Advanced Dental & Maxillofacial Care | Dr Brig Nazeer"
    }, {
      name: "description",
      content: "NMDC, led by Dr Brig Nazeer, delivers premium dental implants, smile design and maxillofacial surgery with a discreet, luxury standard of care."
    }, {
      property: "og:title",
      content: "NMDC — Advanced Dental & Maxillofacial Care"
    }, {
      property: "og:description",
      content: "Premium dental and maxillofacial care led by Dr Brig Nazeer."
    }, {
      property: "og:url",
      content: "/"
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$e, "component")
});
const Route$f = createFileRoute("/brigaidear/")({
  beforeLoad: () => {
    throw redirect({ to: "/brigaidear/login" });
  }
});
const Route$e = createFileRoute("/admin/")({
  beforeLoad: () => {
    throw redirect({ to: "/admin/login" });
  }
});
const $$splitComponentImporter$d = () => import("./videos-C8NYhx_Y.js");
const Route$d = createFileRoute("/brigaidear/videos")({
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const $$splitComponentImporter$c = () => import("./reviews-CexCEGfg.js");
const Route$c = createFileRoute("/brigaidear/reviews")({
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./login-TWrp8rHp.js");
const Route$b = createFileRoute("/brigaidear/login")({
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./dashboard-BAaHMCbj.js");
const Route$a = createFileRoute("/brigaidear/dashboard")({
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./contact-DWJKxu2w.js");
const Route$9 = createFileRoute("/brigaidear/contact")({
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./bookappointment-CfZdnlYk.js");
const Route$8 = createFileRoute("/brigaidear/bookappointment")({
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./blogs-Dt9oZS8I.js");
const Route$7 = createFileRoute("/brigaidear/blogs")({
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./_layout-MyLFnMKH.js");
const Route$6 = createFileRoute("/brigaidear/_layout")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./blogs._slug-NsGXfYFW.js");
const Route$5 = createFileRoute("/blogs/$slug")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./videos-kJleZXdW.js");
const Route$4 = createFileRoute("/admin/videos")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./reviews-D1p7XUpp.js");
const Route$3 = createFileRoute("/admin/reviews")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./login-keKp3qrF.js");
const Route$2 = createFileRoute("/admin/login")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./dashboard-Cd5WLfnX.js");
const Route$1 = createFileRoute("/admin/dashboard")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./_layout-DFiTav6t.js");
const Route = createFileRoute("/admin/_layout")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ServicesRoute = Route$l.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$m
});
const ReviewsRoute = Route$k.update({
  id: "/reviews",
  path: "/reviews",
  getParentRoute: () => Route$m
});
const EducationRoute = Route$j.update({
  id: "/education",
  path: "/education",
  getParentRoute: () => Route$m
});
const ContactRoute = Route$i.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$m
});
const BookappointmentRoute = Route$h.update({
  id: "/bookappointment",
  path: "/bookappointment",
  getParentRoute: () => Route$m
});
const IndexRoute = Route$g.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$m
});
const BrigaidearIndexRoute = Route$f.update({
  id: "/brigaidear/",
  path: "/brigaidear/",
  getParentRoute: () => Route$m
});
const AdminIndexRoute = Route$e.update({
  id: "/admin/",
  path: "/admin/",
  getParentRoute: () => Route$m
});
const BrigaidearVideosRoute = Route$d.update({
  id: "/brigaidear/videos",
  path: "/brigaidear/videos",
  getParentRoute: () => Route$m
});
const BrigaidearReviewsRoute = Route$c.update({
  id: "/brigaidear/reviews",
  path: "/brigaidear/reviews",
  getParentRoute: () => Route$m
});
const BrigaidearLoginRoute = Route$b.update({
  id: "/brigaidear/login",
  path: "/brigaidear/login",
  getParentRoute: () => Route$m
});
const BrigaidearDashboardRoute = Route$a.update({
  id: "/brigaidear/dashboard",
  path: "/brigaidear/dashboard",
  getParentRoute: () => Route$m
});
const BrigaidearContactRoute = Route$9.update({
  id: "/brigaidear/contact",
  path: "/brigaidear/contact",
  getParentRoute: () => Route$m
});
const BrigaidearBookappointmentRoute = Route$8.update({
  id: "/brigaidear/bookappointment",
  path: "/brigaidear/bookappointment",
  getParentRoute: () => Route$m
});
const BrigaidearBlogsRoute = Route$7.update({
  id: "/brigaidear/blogs",
  path: "/brigaidear/blogs",
  getParentRoute: () => Route$m
});
const BrigaidearLayoutRoute = Route$6.update({
  id: "/brigaidear/_layout",
  path: "/brigaidear",
  getParentRoute: () => Route$m
});
Route$5.update({
  id: "/$slug",
  path: "/$slug",
  getParentRoute: () => BlogsRoute
});
const AdminVideosRoute = Route$4.update({
  id: "/admin/videos",
  path: "/admin/videos",
  getParentRoute: () => Route$m
});
const AdminReviewsRoute = Route$3.update({
  id: "/admin/reviews",
  path: "/admin/reviews",
  getParentRoute: () => Route$m
});
const AdminLoginRoute = Route$2.update({
  id: "/admin/login",
  path: "/admin/login",
  getParentRoute: () => Route$m
});
const AdminDashboardRoute = Route$1.update({
  id: "/admin/dashboard",
  path: "/admin/dashboard",
  getParentRoute: () => Route$m
});
const AdminLayoutRoute = Route.update({
  id: "/admin/_layout",
  path: "/admin",
  getParentRoute: () => Route$m
});
const rootRouteChildren = {
  IndexRoute,
  BookappointmentRoute,
  ContactRoute,
  EducationRoute,
  ReviewsRoute,
  ServicesRoute,
  AdminLayoutRoute,
  AdminDashboardRoute,
  AdminLoginRoute,
  AdminReviewsRoute,
  AdminVideosRoute,
  BrigaidearLayoutRoute,
  BrigaidearBlogsRoute,
  BrigaidearBookappointmentRoute,
  BrigaidearContactRoute,
  BrigaidearDashboardRoute,
  BrigaidearLoginRoute,
  BrigaidearReviewsRoute,
  BrigaidearVideosRoute,
  AdminIndexRoute,
  BrigaidearIndexRoute
};
const routeTree = Route$m._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route$5 as R,
  router as r
};
