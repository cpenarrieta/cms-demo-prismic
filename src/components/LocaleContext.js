import React, { useContext, useState, useMemo } from "react";

const LocaleContext = React.createContext();

const useLocale = () => useContext(LocaleContext);

function LocaleProvider({ children }) {
  const [locale, setLocale] = useState("en-us");
  const value = useMemo(() => ({ locale, setLocale }), [locale, setLocale]);

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export { useLocale, LocaleProvider };
