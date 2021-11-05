import { registerApplication, start } from "single-spa";

registerApplication({
  name: "DIM-Connect Dashboard",
  app: () => System.import("@dim-connect/dashboard"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@dim-connect/user-onboarding",
  app: () => System.import("@dim-connect/user-onboarding"),
  activeWhen: ["/user-onboarding"],
});

start({
  urlRerouteOnly: true,
});
