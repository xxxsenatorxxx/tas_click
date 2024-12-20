import { FC, useEffect, useState, useContext } from "react";
import type { ITelegramContext, ITelegramProvider } from "./interface";
import TelegramContext from "./context";
import { Spinner } from "components";

const useTelegram = () => {
  const context = useContext(TelegramContext);

  if (!context) {
    throw new Error("useTelegram must be used inside the TelegramProvider");
  }

  return context;
};

const TelegramProvider: FC<ITelegramProvider> = ({ children }) => {
  const [webApp, setWebApp] = useState<ITelegramContext | null>(null);

  useEffect(() => {
    const app = (window as any).Telegram?.WebApp;

    if (app) {
      app.ready();

      const userData = app.initDataUnsafe.user;
      setWebApp({
        firstName: userData.first_name,
        id: userData.id,
      });
    }
  }, []);

  return (
    <TelegramContext.Provider value={webApp}>
      {webApp ? children : <Spinner text="waiting connect to Telegram" />}
    </TelegramContext.Provider>
  );
};

export { TelegramProvider, useTelegram };
