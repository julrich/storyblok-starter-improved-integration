const fonts = [
  { href: "/fonts/Fredoka-Regular.woff", type: "font/woff2" },
  { href: "/fonts/Fredoka-Regular.woff", type: "font/woff" },
  { href: "/fonts/Fredoka-SemiBold.woff2", type: "font/woff2" },
  { href: "/fonts/Fredoka-SemiBold.woff", type: "font/woff" },
  { href: "/fonts/Fredoka-Medium.woff2", type: "font/woff2" },
  { href: "/fonts/Fredoka-Medium.woff", type: "font/woff" },
  { href: "/fonts/Fredoka-Light.woff2", type: "font/woff2" },
  { href: "/fonts/Fredoka-Light.woff", type: "font/woff" },
  { href: "/fonts/Fredoka-Bold.woff2", type: "font/woff2" },
  { href: "/fonts/Fredoka-Bold.woff", type: "font/woff" },
  { href: "/fonts/Mulish-Regular.woff2", type: "font/woff2" },
  { href: "/fonts/Mulish-Regular.woff", type: "font/woff" },
  { href: "/fonts/Mulish-600.woff2", type: "font/woff2" },
  { href: "/fonts/Mulish-600.woff", type: "font/woff" },
  { href: "/fonts/Mulish-800.woff2", type: "font/woff2" },
  { href: "/fonts/Mulish-800.woff", type: "font/woff" },
  { href: "/fonts/Mulish-300.woff2", type: "font/woff2" },
  { href: "/fonts/Mulish-300.woff", type: "font/woff" },
];

const Fonts: React.FC = () => (
  <>
    {fonts &&
      fonts.length &&
      fonts.map((font, index) => (
        <link
          key={index}
          rel="preload"
          crossOrigin="anonymous"
          as="font"
          {...font}
        ></link>
      ))}
  </>
);

export default Fonts;
