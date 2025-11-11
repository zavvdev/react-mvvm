import {
  DIContainer,
  getInjectable,
  getInjectableDecorator,
  getInjector,
} from "@react-mvvm/di-container";

export var container = new DIContainer();

export var inject = getInjector(container);
export var injectable = getInjectable(container);
export var Injectable = getInjectableDecorator(container);
