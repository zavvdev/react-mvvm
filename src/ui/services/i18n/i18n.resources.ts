import { NAMESPACES, LANGUAGES } from "@/ui/services/i18n/i18n.config";
import enCommon from "@/ui/services/i18n/en/common.json";
import enBooks from "@/ui/services/i18n/en/books.json";
import enOrder from "@/ui/services/i18n/en/order.json";
import enCart from "@/ui/services/i18n/en/cart.json";

export const resources = {
  [LANGUAGES.en]: {
    [NAMESPACES.common]: enCommon,
    [NAMESPACES.books]: enBooks,
    [NAMESPACES.order]: enOrder,
    [NAMESPACES.cart]: enCart,
  },
};
