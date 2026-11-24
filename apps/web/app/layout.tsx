import { Work_Sans } from "next/font/google";
import { Metadata } from "next";
import React from "react";
import { NoScriptWarning } from "@/app/components/NoScriptWarning";
import { SentryClientConfigScript } from "@/lib/sentry/SentryClientConfigScript";
import { I18nProvider } from "@/lingodotdev/client";
import { getLocale } from "@/lingodotdev/language";
import { ServerActionNotices } from "@/modules/ui/components/server-action-notices";
import "../modules/ui/globals.css";

const workSans = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: { icon: "/brand-mark.svg" },
  title: {
    template: "%s | Reedline",
    default: "Reedline",
  },
  description: "Open-Source Survey Suite",
};

const RootLayout = async ({ children }: { readonly children: React.ReactNode }) => {
  const locale = await getLocale();

  return (
    <html lang={locale} translate="no">
      <body className={`${workSans.className} flex h-dvh flex-col transition-all ease-in-out`}>
        {/* First in the document so instrumentation-client.ts can start Sentry as early as possible. */}
        <SentryClientConfigScript />
        <NoScriptWarning locale={locale} />
        <I18nProvider language={locale}>
          {children}
          {/* After the page, so keyboard users reach the notices by tabbing on from its content. */}
          <ServerActionNotices />
        </I18nProvider>
      </body>
    </html>
  );
};

export default RootLayout;
