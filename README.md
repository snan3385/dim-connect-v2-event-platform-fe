# dim-connect-v2-front-end
This is the root application which will host the DIM Connect V2 Micro-frontends. Project is generated with [Single SPA
framework](https://single-spa.js.org/)

Currently the project will be host the following Micro-frontends
- DIM Connect V2 Admin Portal
- DIM Connect V2 APIC User Onboarding

For adding or removing a micro-fe container application you have to edit the following files
- `src/index.ejs` - Import the micro-frontend
- `dim-connect-root-config.js` - Register the application

---

## Running the project
First you have to make sure the micro-frontends configured in the root-config to be running in `standalone` mode.
Once the micro-front-ends are running, you start the root application by runninng `npm start`.

It will run the root application hosting the micro-frontends on port 9000.

You can redirect to `localhost:9000` on a latest web browser to view the front-end application.



