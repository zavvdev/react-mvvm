import { createContext, createElement, useContext } from "react";

export var createDependencyContext = <D>() => {
  type DKey = keyof D;
  type Props = Record<string, unknown>;
  type DefaultProps = Record<string, never>;

  var DependenciesContext = createContext<D | null>(null);

  var useDeps = () => {
    var deps = useContext(DependenciesContext);

    if (!deps) {
      throw new Error("Dependencies not provided");
    }

    return deps;
  };

  var inject =
    <K extends DKey, P extends Props = DefaultProps>(...keys: K[]) =>
    <R>(fn: (deps: P & Pick<D, K>) => R) =>
    (args?: P): R => {
      var deps = useDeps();

      var injections = keys.reduce(
        (acc, key) => {
          acc[key] = deps[key];
          return acc;
        },
        {} as Pick<D, K>,
      );

      return fn({
        ...injections,
        ...(args ?? ({} as P)),
      });
    };

  var withInjections =
    <K extends DKey, P extends Props = DefaultProps>(...keys: K[]) =>
    (Component: React.FC<P & Pick<D, K>>) =>
    (props: P) => {
      var deps = useDeps();

      var injections = keys.reduce(
        (acc, key) => {
          acc[key] = deps[key];
          return acc;
        },
        {} as Pick<D, K>,
      );

      return createElement(Component, { ...injections, ...props });
    };

  return {
    DependenciesContext,
    useDeps,
    inject,
    withInjections,
  };
};
