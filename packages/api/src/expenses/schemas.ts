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

export type GetAllDto = {
  Request: t.infer<typeof getAllDto.request>;
  Response: t.infer<typeof getAllDto.response>;
};

// Get one DTO

export var getOneDto = {
  request: t.object({
    id: t.string(),
  }),
  response: response(Expense.schema),
};

export type GetOneDto = {
  Request: t.infer<typeof getOneDto.request>;
  Response: t.infer<typeof getOneDto.response>;
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

export type CreateDto = {
  Request: t.infer<typeof createDto.request>;
  Response: t.infer<typeof createDto.response>;
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

// Total price DTO

export var totalPriceDto = {
  request: t.object({
    categoryIds: t.array(t.string()).optional(),
    minDate: t.string().nullable(),
    maxDate: t.string().nullable(),
  }),
  response: response(t.string()),
};

export type TotalPriceDto = {
  Request: t.infer<typeof totalPriceDto.request>;
  Response: t.infer<typeof totalPriceDto.response>;
};
