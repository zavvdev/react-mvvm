import { z as t } from "zod";
import { makeModel } from "../utils";

var schema = t
  .object({
    id: t.uuid(),
    name: t.string(),
    budgetLimit: t.string().nullable(),
    allowOverBudget: t.boolean(),
    createdAt: t.string(),
    updatedAt: t.string(),
  })
  .transform((category) => ({
    ...category,
    isLimitless: () => {
      var noLimit =
        category.budgetLimit === null || category.budgetLimit === undefined;
      var overBudget = category.allowOverBudget === true;
      return noLimit || overBudget;
    },
  }));

export var Category = makeModel(schema);
export type CategoryModel = t.infer<typeof Category.schema>;
