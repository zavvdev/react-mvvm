import { Category } from "@react-mvvm/domain";
import { z as t } from "zod";
import { response } from "../schemas";
// Get all DTO
export var getAllDto = {
  request: t
    .object({
      name: t.string().optional(),
      minBudgetLimit: t.string().optional(),
      maxBudgetLimit: t.string().optional(),
      allowOverBudget: t.boolean().optional(),
      minDate: t.string().optional(),
      maxDate: t.string().optional(),
    })
    .optional(),
  response: response(t.array(Category.schema)),
};
// Get one DTO
export var getOneDto = {
  request: t.object({
    id: t.string(),
  }),
  response: response(Category.schema),
};
// Create DTO
export var createDto = {
  request: t.object({
    name: t.string(),
    budgetLimit: t.string(),
    allowOverBudget: t.boolean(),
  }),
  response: response(Category.schema),
};
// Update DTO
export var updateDto = {
  request: t.object({
    id: t.string(),
    name: t.string(),
    budgetLimit: t.string(),
    allowOverBudget: t.boolean(),
  }),
  response: response(Category.schema),
};
// Delete DTO
export var deleteDto = {
  request: t.object({
    id: t.string(),
  }),
};
// Available budget DTO
export var availableBudgetDto = {
  request: t.object({
    id: t.string(),
  }),
  response: response(
    t.object({
      isLimitless: t.boolean(),
      availableBudget: t.string(),
    }),
  ),
};
