import { useEffect } from "react";

const DisableInspect = () => {
  useEffect(() => {
    // Disable Right-Click
    const disableRightClick = (event) => event.preventDefault();
    document.addEventListener("contextmenu", disableRightClick);

    // Disable Developer Tools (F12, Ctrl+Shift+I, Ctrl+U)
    const disableDevTools = (event) => {
      if (
        event.key === "F12" || // F12
        (event.ctrlKey && event.shiftKey && event.key === "I") || // Ctrl+Shift+I
        (event.ctrlKey && event.key === "U") // Ctrl+U (View Source)
      ) {
        event.preventDefault();
      }
    };
    document.addEventListener("keydown", disableDevTools);

    // Cleanup function to remove event listeners when the component unmounts
    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
      document.removeEventListener("keydown", disableDevTools);
    };
  }, []);

  return null; // No UI, just runs the script
};

export default DisableInspect;
