export var PUBLIC_ROUTES = {
  auth: () => "/auth",
};

export var PRIVATE_ROUTES = {
  profile: () => "/profile",
  settings: () => "/settings",
  expenses: () => "/expenses",
  expense: (id: string) => `/expenses/${id}`,
  categories: () => "/categories",
  category: (id: string) => `/categories/${id}`,
};
