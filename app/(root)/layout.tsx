import React, { ReactNode } from "react";
import StreamVideoProvider from "./../../provider/StreamClientProvider";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "BOOM",
  description: "Video Calling app for family friends and more",
  icons: {
    icon: "/icons/logo.svg",
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
