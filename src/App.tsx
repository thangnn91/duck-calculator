import Top from "./components/Top";
import Screen from "./components/Screen";
import Keypad from "./components/Keypad";
import { useStateMachine } from "little-state-machine";
import cn from "classnames";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { keyAliases, keys } from "./data";

export interface ActionProps {
  action?: string;
  keyContent: string | number | undefined;
}
const App = () => {
  const { state } = useStateMachine();
  const { theme } = state;
  const [action, setAction] = useState<ActionProps>({
    action: "",
    keyContent: "",
  });

  const handleKeyDown = useCallback((e: any) => {
    const { key } = e;
    console.log("🚀 ~ file: App.tsx:16 ~ handleKeyDown ~ key:", e);
    let keyMapping = key;
    if (key == keyAliases.BackspaceKD) {
      keyMapping = keyAliases.Delete;
    } else if (e.shiftKey && key == keyAliases.EqualKD) {
      keyMapping = keyAliases.Add;
    } else if (e.shiftKey && key == keyAliases.EightKD) {
      keyMapping = keyAliases.Mul;
    }
    const lookUpAction = keys.find((o) => o.label == keyMapping);
    if (lookUpAction) {
      setAction({
        action: lookUpAction.action,
        keyContent: lookUpAction.label,
      });
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    // Don't forget to clean up
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);
  return (
    <main
      className={cn(
        "h-screen bg-theme1-main",
        theme.type == 1
          ? "bg-theme1-main text-white"
          : theme.type == 2
          ? "bg-theme2-main text-theme2-text"
          : "bg-theme3-main text-theme3-text-yellow"
      )}
    >
      <div className="p-5 py-8 flex flex-col h-full max-w-md mx-auto">
        <Top />
        <div className="mt-10 h-full max-h-[600px] flex flex-col">
          <Screen />
          <Keypad actionProps={action} />
        </div>
        <footer className="text-center mt-auto pt-5">
          Made with <span className="text-theme1-keys-red">❤</span> by{" "}
          <a
            href="https://www.frontendmentor.io/profile/boedegoat"
            target="_blank"
            rel="noopener noreferrer"
          >
            boedegoat
          </a>
        </footer>
      </div>
    </main>
  );
};

export default App;
