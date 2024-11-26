import { ReactNode } from "react";

interface ITelegramContext {
  firstName: string;
  id: number;
}

interface ITelegramProvider {
  children: ReactNode;
}

export type { ITelegramContext, ITelegramProvider };
