import { useEffect, useSyncExternalStore } from "react";
import { persistedStorageService } from "@/core/infrastructure/services/persisted-storage/persisted-storage.service";

const identity = <X = any>(x: X): X => x;

interface Options<T> {
  transform?: (value: unknown | undefined) => T;
  enableInit?: boolean;
}

export function usePersistedState<V, T>(
  key: string,
  initialValue: V,
  options: Options<T> = {},
) {
  const options_ = {
    transform: identity,
    enableInit: false,
    ...options,
  };

  const setState = (next: ((prev: V) => V) | V) => {
    const newValue = JSON.stringify(
      typeof next === "function"
        ? (next as (prev: V) => V)(initialValue)
        : next,
    );
    persistedStorageService.put(key, newValue);
    dispatchEvent(new StorageEvent("storage", { key, newValue }));
  };

  var value = useSyncExternalStore(
    (listener) => {
      window.addEventListener("storage", listener);
      return () => void window.removeEventListener("storage", listener);
    },
    () => options_.transform(persistedStorageService.get(key)),
  );

  useEffect(() => {
    if (options.enableInit) {
      setState(initialValue);
    }
  }, []);

  return [value, setState];
}
