import { createContainer, InjectionMode } from "awilix";

export { asClass, asFunction, asValue } from "awilix";

var container = createContainer({
  injectionMode: InjectionMode.PROXY,
  strict: true,
});

export var inject = container.resolve.bind(container);
export var injectable = container.register.bind(container);
