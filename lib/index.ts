declare namespace JournyIO_ {
  type Callback = () => void;

  type Properties = Record<string, string | boolean | number | Date | null>;

  type Metadata = Record<string, string | boolean | number | Date>;

  type InitArgs = { trackerId: string; domain: string };
  
  type PageArgs = { accountId?: string; verification?: string };

  type IdentifyArgs = {
    email?: string;
    userId?: string;
    verification?: string;
    properties?: Properties;
  };

  type AccountArgs = {
    accountId?: string;
    verification?: string;
    properties?: Properties;
  };

  type EventArgs = {
    name: string;
    accountId?: string;
    verification?: string;
    metadata?: Metadata;
  };

  interface JournyIO {
    (command: "init", args: InitArgs, callback?: Callback): void;
    (command: "pageview", args?: PageArgs, callback?: Callback): void;
    (command: "identify", args: IdentifyArgs, callback?: Callback): void;
    (command: "account", args: AccountArgs, callback?: Callback): void;
    (command: "event", args: EventArgs, callback?: Callback): void;
  }
}

declare let journy: JournyIO_.JournyIO;

interface Window {
  journy: JournyIO_.JournyIO;
}
