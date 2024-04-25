const fonts = [
  { href: "/fonts/Fredoka-Regular.woff", type: "font/woff2" },
  { href: "/fonts/Fredoka-Regular.woff", type: "font/woff" },
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
