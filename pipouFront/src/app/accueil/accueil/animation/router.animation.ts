import {
  trigger,
  state,
  animate,
  style,
  transition,
  query,
  animateChild,
  group
} from "@angular/animations";

export const routerTransition = [
  trigger("routerTransition", [
    transition(":enter", [
      style({ opacity: 0, position: "fixed", width: "100%", height: "100%" }),
      animate("2s ease-in-out", style({ opacity: 1 }))
    ])
  ])
];

export const slideInAnimation = trigger("routeAnimations", [
  transition("* <=> geolocalisation", [
    style({ position: "relative" }),
    query(":enter, :leave", [
      style({
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%"
      })
    ]),
    query(":enter", [style({ left: "-100%" })]),
    query(":leave", animateChild()),
    group([
      query(":leave", [animate("600ms ease-out", style({ left: "100%" }))]),
      query(":enter", [animate("600ms ease-out", style({ left: "0%" }))])
    ]),
    query(":enter", animateChild())
  ]),
  transition("* <=> meteo", [
    style({ position: "relative" }),
    query(":enter, :leave", [
      style({
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%"
      })
    ]),
    query(":enter", [style({ left: "-100%" })]),
    query(":leave", animateChild()),
    group([
      query(":leave", [animate("600ms ease-out", style({ left: "100%" }))]),
      query(":enter", [animate("600ms ease-out", style({ left: "0%" }))])
    ]),
    query(":enter", animateChild())
  ])
]);
