import { useState } from "react";
import { z as type } from "zod";
import { DI } from "@/application/di/di";
import type { CartUseCase } from "@/application/use-cases/cart.use-case";
import type { OrderUseCase } from "@/application/use-cases/order.use-case";
import { useTranslation } from "@/ui/services/i18n/i18n.service";

interface Injections {
  orderUseCase: OrderUseCase;
  cartUseCase: CartUseCase;
}

interface Props {
  somethingElse: number;
}

const useOrderViewModel = ({
  orderUseCase,
  cartUseCase,
  somethingElse,
}: Injections & Props) => {
  const { createOrder, isLoading, isError, isSuccess } =
    orderUseCase.useOrder();

  const { total, cart } = cartUseCase.useCart();
  const { 0: email, 1: setEmail } = useState("");
  const bookTitlesToOrder = cart.map((book) => book.title);
  const { t } = useTranslation("order");

  const onCreateOrder = () => {
    if (!type.email().safeParse(email).success) {
      alert(t("invalid_email"));
      console.log(somethingElse);
      return;
    }

    createOrder(email);
  };

  return {
    bookTitlesToOrder,
    email,
    setEmail,
    createOrder: onCreateOrder,
    isLoading,
    isError,
    isSuccess,
    isCartEmpty: total === 0,
  };
};

// You need to specify dependencies union type if you want to add custom arguments
// into the hook that is an injection target
export const orderViewModel = () =>
  DI.inject<"orderUseCase" | "cartUseCase", Props>(
    "orderUseCase",
    "cartUseCase",
  )(useOrderViewModel);

export type OrderViewModel = ReturnType<typeof orderViewModel>;
