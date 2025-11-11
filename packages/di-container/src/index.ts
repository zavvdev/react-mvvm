export type Provider<T = any> = () => T;

export interface InjectableOptions {
  singleton?: boolean;
}

export class DIContainer {
  private registry = new Map<string, Provider>();

  constructor() {
    console.log("DIContainer initialized");
  }

  register<T>(key: string, provider: Provider<T>) {
    if (this.registry.has(key)) {
      throw new Error(`Dependency with key "${key}" is already registered`);
    }
    this.registry.set(key, provider);
  }

  get<T>(key: string): T {
    const provider = this.registry.get(key);
    if (!provider) throw new Error(`No provider registered for key "${key}"`);
    return provider();
  }

  override<T>(key: string, provider: Provider<T>) {
    this.registry.set(key, provider);
  }

  clear() {
    this.registry.clear();
  }
}

export const getInjector = (container: DIContainer) => <T>(key: string): T => {
  console.log(`Injecting dependency with key: ${key}`);
  return container.get<T>(key);
};

export const getInjectable = (container: DIContainer) => <T>(
  key: string,
  factory: () => T,
  options?: InjectableOptions
) => {
  console.log(`Registering injectable with key: ${key}`);
  if (options?.singleton) {
    let instance: T | undefined;

    container.register(key, () => {
      if (instance === undefined) {
        instance = factory();
      }
      return instance;
    });
  } else {
    container.register(key, factory);
  }
};

export const getInjectableDecorator = (container: DIContainer) => {
  const injectable = getInjectable(container);

  console.log("Injectable decorator initialized");

  return <T = any>(
    key: string,
    options?: InjectableOptions
  ) => {
    return (value: T | (() => T)) => {
      injectable(key, () => value, options);
    };
  };
};
