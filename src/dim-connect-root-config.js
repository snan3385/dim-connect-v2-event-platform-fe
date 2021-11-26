import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@dim-connect/admin-portal",
  app: () => System.import("@dim-connect/admin-portal"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@dim-connect/apic-user-onboarding",
  app: () => System.import("@dim-connect/apic-user-onboarding"),
  activeWhen: ["/apic-user-onboarding"],
});

start({
  urlRerouteOnly: true,
});
