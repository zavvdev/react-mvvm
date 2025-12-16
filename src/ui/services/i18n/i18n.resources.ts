import enCart from "@/ui/services/i18n/en/cart.json";
import enCommon from "@/ui/services/i18n/en/common.json";
import enOrder from "@/ui/services/i18n/en/order.json";
import { LANGUAGES, NAMESPACES } from "@/ui/services/i18n/i18n.config";

export const resources = {
  [LANGUAGES.en]: {
    [NAMESPACES.common]: enCommon,
    [NAMESPACES.order]: enOrder,
    [NAMESPACES.cart]: enCart,
  },
};
