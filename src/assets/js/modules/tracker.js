import {isbot} from "isbot";
import Plausible from "plausible-tracker";
import colorScheme from "./_detectColorScheme";

const {trackEvent, trackPageview, enableAutoOutboundTracking} = Plausible({
  domain: "serverless-gems.dev",
  apiHost: "https://firebird.beastful.org/api/event",
});

document.addEventListener("DOMContentLoaded", () => {
  // don't track bots
  if (isbot(navigator.userAgent)) return;

  // track page view
  trackPageview(
    {},
    {
      props: {
        title: document.title,
        url: location.href,
        path: location.pathname,
        referrer: document.referrer,
        prefersColorScheme: colorScheme(),
        userAgent: navigator.userAgent,
        deviceWidth: window.innerWidth,
        project: "vercel.serverless-gems.dev"
      },
    }
  );

  enableAutoOutboundTracking();

  // track 404 page
  if (document.body.classList.contains("page-404")) {
    trackEvent("404", {
      props: {
        title: document.title,
        url: location.href,
        path: location.pathname,
        referrer: document.referrer,
        prefersColorScheme: colorScheme(),
        userAgent: navigator.userAgent,
        deviceWidth: window.innerWidth,
      },
    });
  }
});
