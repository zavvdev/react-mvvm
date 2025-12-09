import { appI18n } from "app/i18n";
import { booksI18n } from "books/gateway/output";
import { cartI18n } from "cart/gateway/output";
import { orderI18n } from "order/gateway/output";

export const resources = {
  [appI18n.appLanguages.en]: {
    [appI18n.namespace]: appI18n.translations.en,
    [booksI18n.namespace]: booksI18n.translations.en,
    [cartI18n.namespace]: cartI18n.translations.en,
    [orderI18n.namespace]: orderI18n.translations.en,
  },
};
