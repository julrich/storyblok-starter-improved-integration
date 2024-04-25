import type { NextPage } from "next";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

import DsaProviders from "@kickstartds/ds-agency/providers";
import { Header } from "@kickstartds/ds-agency/header";
import { Footer } from "@kickstartds/ds-agency/footer";
import { initStoryblok } from "@/helpers/storyblok";
import { unflatten } from "@/helpers/unflatten";
import Meta from "@/components/Meta";
import "lazysizes/plugins/attrchange/ls.attrchange";

import StoryblokProviders from "../components/Providers";

import palette from "@kickstartds/ds-agency/global.client.js";
import IconSprite from "../token/IconSprite";
import "@kickstartds/ds-agency/global.css";
import "../token/tokens.css";
import "../index.scss";
import { BlurHashProvider } from "@/components/BlurHashContext";

initStoryblok(process.env.NEXT_STORYBLOK_API_TOKEN);
if (typeof window !== "undefined") {
  console.log(palette);
}

export default function App({
  Component,
  pageProps,
}: AppProps & {
  Component: NextPage;
}) {
  const fonts = [
    localFont({
      src: [
        {
          path: "/fonts/Fredoka-Regular.woff2",
          weight: "400",
          style: "normal",
        },
      ],
      preload: true,
      display: "optional",
      declarations: [
        {
          prop: "font-family",
          value: "Fredoka",
        },
      ],
    }),
    localFont({
      src: [
        { path: "/fonts/Fredoka-Regular.woff", weight: "400", style: "normal" },
        {
          path: "/fonts/Fredoka-SemiBold.woff2",
          weight: "600",
          style: "normal",
        },
        {
          path: "/fonts/Fredoka-SemiBold.woff",
          weight: "600",
          style: "normal",
        },
        { path: "/fonts/Fredoka-Medium.woff2", weight: "500", style: "normal" },
        { path: "/fonts/Fredoka-Medium.woff", weight: "500", style: "normal" },
        { path: "/fonts/Fredoka-Light.woff2", weight: "300", style: "normal" },
        { path: "/fonts/Fredoka-Light.woff", weight: "300", style: "normal" },
        { path: "/fonts/Fredoka-Bold.woff2", weight: "bold", style: "normal" },
        { path: "/fonts/Fredoka-Bold.woff", weight: "bold", style: "normal" },
      ],
      preload: false,
      display: "optional",
      declarations: [
        {
          prop: "font-family",
          value: "Fredoka",
        },
      ],
    }),
    localFont({
      src: [
        { path: "/fonts/Mulish-Regular.woff2", weight: "400", style: "normal" },
      ],
      preload: true,
      display: "optional",
      declarations: [
        {
          prop: "font-family",
          value: "Mulish",
        },
      ],
    }),
    localFont({
      src: [
        { path: "/fonts/Mulish-Regular.woff", weight: "400", style: "normal" },
        { path: "/fonts/Mulish-600.woff2", weight: "600", style: "normal" },
        { path: "/fonts/Mulish-600.woff", weight: "600", style: "normal" },
        { path: "/fonts/Mulish-800.woff2", weight: "800", style: "normal" },
        { path: "/fonts/Mulish-800.woff", weight: "800", style: "normal" },
        { path: "/fonts/Mulish-300.woff2", weight: "300", style: "normal" },
        { path: "/fonts/Mulish-300.woff", weight: "300", style: "normal" },
      ],
      preload: false,
      display: "optional",
      declarations: [
        {
          prop: "font-family",
          value: "Mulish",
        },
      ],
    }),
  ];

  const { settings, story, blurHashes } = pageProps;
  const headerProps = settings?.header[0];
  const footerProps = settings?.footer[0];

  return (
    <BlurHashProvider blurHashes={blurHashes}>
      <DsaProviders>
        <StoryblokProviders>
          <Meta
            globalSeo={settings?.seo[0]}
            pageSeo={story?.content.seo?.[0]}
            fallbackName={story?.name}
          />
          <IconSprite />
          {headerProps && (
            <Header
              logo={{}}
              {...unflatten(headerProps)}
              inverted={story.header.inverted || false}
              floating={story.header.floating || false}
            />
          )}
          <Component {...pageProps} />
          {footerProps && (
            <Footer
              logo={{}}
              {...unflatten(footerProps)}
              inverted={story.footer.inverted || false}
            />
          )}
        </StoryblokProviders>
      </DsaProviders>
    </BlurHashProvider>
  );
}
