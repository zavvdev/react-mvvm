import { z as t } from "zod";
import { makeModel } from "../utils";
import { Category } from "./category";

var schema = t.object({
  id: t.uuid(),
  name: t.string(),
  description: t.string().nullable(),
  price: t.string(),
  isCompleted: t.boolean(),
  createdAt: t.string(),
  updatedAt: t.string(),
  category: Category.schema,
});

export var Expense = makeModel(schema);

export type ExpenseModel = t.infer<typeof Expense.schema>;
