import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./pages/home/home.component").then((m) => m.HomeComponent),
  },
  {
    path: "servicios",
    loadComponent: () =>
      import("./pages/servicios/servicios.component").then(
        (m) => m.ServiciosComponent
      ),
  },
  {
    path: "contacto",
    loadComponent: () =>
      import("./pages/contacto/contacto.component").then(
        (m) => m.ContactoComponent
      ),
  },
  { path: "**", redirectTo: "" },
];
