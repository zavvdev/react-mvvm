import { Expense } from "@react-mvvm/domain";
import { z as t } from "zod";
import { response } from "../schemas";
// Get all DTO
export var getAllDto = {
  request: t
    .object({
      categoryId: t.string().optional(),
      isCompleted: t.boolean().optional(),
      name: t.string().optional(),
      minPrice: t.string().optional(),
      maxPrice: t.string().optional(),
      minDate: t.string().optional(),
      maxDate: t.string().optional(),
    })
    .optional(),
  response: response(t.array(Expense.schema)),
};
// Get one DTO
export var getOneDto = {
  request: t.object({
    id: t.string(),
  }),
  response: response(Expense.schema),
};
// Create DTO
export var createDto = {
  request: t.object({
    categoryId: t.string(),
    name: t.string(),
    price: t.string(),
    isCompleted: t.boolean(),
    description: t.string().optional(),
  }),
  response: response(Expense.schema),
};
// Update DTO
export var updateDto = {
  request: t.object({
    id: t.string(),
    name: t.string(),
    description: t.string(),
    price: t.string(),
    isCompleted: t.boolean(),
  }),
  response: response(Expense.schema),
};
// Delete DTO
export var deleteDto = {
  request: t.object({
    id: t.string(),
  }),
};
// Total price DTO
export var totalPriceDto = {
  request: t.object({
    categoryIds: t.array(t.string()).optional(),
    minDate: t.string().nullable(),
    maxDate: t.string().nullable(),
  }),
  response: response(t.string()),
};
