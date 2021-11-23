import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@dim-connect/admin-portal",
  app: () => System.import("@dim-connect/admin-portal"),
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
