import { signalService } from "@/application/services/signal/signal.service";
import type { BookModel } from "@/domain/models/book.model";

export const cartSignal = signalService.createSignal<BookModel[]>([]);

export type CartSignal = typeof cartSignal;
