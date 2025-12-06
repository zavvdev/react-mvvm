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

export type GetAllDto = {
  Request: t.infer<typeof getAllDto.request>;
  Response: t.infer<typeof getAllDto.response>;
};

// Get one DTO

export var getOneDto = {
  request: t.object({
    id: t.string(),
  }),
  response: response(Category.schema),
};

export type GetOneDto = {
  Request: t.infer<typeof getOneDto.request>;
  Response: t.infer<typeof getOneDto.response>;
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

export type CreateDto = {
  Request: t.infer<typeof createDto.request>;
  Response: t.infer<typeof createDto.response>;
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

export type UpdateDto = {
  Request: t.infer<typeof updateDto.request>;
  Response: t.infer<typeof updateDto.response>;
};

// Delete DTO

export var deleteDto = {
  request: t.object({
    id: t.string(),
  }),
};

export type DeleteDto = {
  Request: t.infer<typeof deleteDto.request>;
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

export type AvailableBudgetDto = {
  Request: t.infer<typeof availableBudgetDto.request>;
  Response: t.infer<typeof availableBudgetDto.response>;
};
