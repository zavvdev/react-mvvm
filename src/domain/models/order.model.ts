import { z as t } from "zod";
import { makeModel } from "@/domain/utilities";

const schema = t
  .object({
    email: t.email(),
    bookIds: t.array(t.number()),
  })
  // Exclusive model business logic can be attached here
  .transform((order) => ({
    ...order,
    isEmpty: () => {
      return order.bookIds.length === 0;
    },
  }));

export const Order = makeModel(schema);
export type OrderModel = t.infer<typeof Order.schema>;
