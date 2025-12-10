import { createContext, createElement, useContext } from "react";

type Props = Record<string, unknown>;
type DefaultProps = Record<string, never>;

export function createDependencyInjectionContext<D>() {
  type DKey = keyof D;

  const DependenciesContext = createContext<D | null>(null);

  const useDeps = () => {
    const deps = useContext(DependenciesContext);

    if (!deps) {
      throw new Error("Dependencies not provided");
    }

    return deps;
  };

  const inject =
    <K extends DKey, P = DefaultProps>(...keys: K[]) =>
    <R>(fn: (deps: P & Pick<D, K>) => R) =>
    (args?: P): R => {
      const deps = useDeps();

      const injections = keys.reduce(
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

  const withInjections =
    <K extends DKey, P extends Props = DefaultProps>(...keys: K[]) =>
    (Component: React.FC<P & Pick<D, K>>) =>
    (props: P) => {
      const deps = useDeps();

      const injections = keys.reduce(
        (acc, key) => {
          acc[key] = deps[key];
          return acc;
        },
        {} as Pick<D, K>,
      );

      return createElement(Component, { ...injections, ...props });
    };

  const createWithInstance =
    <K extends string>(propName: K) =>
    <I, P extends Props = DefaultProps>(factory: () => I) =>
    (Component: React.FC<P & Record<K, I>>) =>
    (props: P) => {
      return createElement(Component, {
        ...props,
        [propName]: factory(),
      } as P & Record<K, I>);
    };

  return {
    DependenciesContext,
    useDeps,
    inject,
    withInjections,
    createWithInstance,
  };
}
