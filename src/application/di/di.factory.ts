import { createContext, createElement, useContext } from "react";

type Props = Record<string, unknown>;
type DefaultProps = Record<string, never>;
type DependencyMap = Record<string, any>;

export function createDependencyInjectionContext<D extends DependencyMap>() {
  type DKey = keyof D;

  const DependenciesContext = createContext<D | null>(null);

  const useDeps = <K extends DKey>(keys: K[]) => {
    const deps = useContext(DependenciesContext);

    if (!deps) {
      throw new Error("Dependencies not provided");
    }

    return keys.reduce(
      (acc, key) => {
        if (key in deps) acc[key] = deps[key];
        return acc;
      },
      {} as Pick<D, K>,
    );
  };

  const inject =
    <K extends DKey, P = void>(...keys: K[]) =>
      <R>(fn: (deps: P & Pick<D, K>) => R) =>
        (args: P): R =>
          fn({
            ...useDeps(keys),
            ...args,
          });

  const withInjections =
    <K extends DKey, P extends Props = DefaultProps>(...keys: K[]) =>
      (Component: React.FC<P & Pick<D, K>>) =>
        (props: P) =>
          createElement(Component, { ...useDeps(keys), ...props });

  const createWithInstance =
    <K extends string>(propName: K) =>
      <I, P extends Props = DefaultProps>(factory: () => I) =>
        (Component: React.FC<P & Record<K, I>>) =>
          (props: P) =>
            createElement(Component, {
              ...props,
              [propName]: factory(),
            } as P & Record<K, I>);

  return {
    DependenciesContext,
    useDeps,
    inject,
    withInjections,
    createWithInstance,
  };
}
