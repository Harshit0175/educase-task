import React, { createContext, useState } from "react";

const Appcontext = createContext();

const ContextProvider = ({ children }) => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");
  const [isAgency, setIsAgency] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const value = {
    phone, setPhone,
    password, setPassword,
    company, setCompany,
    isAgency, setIsAgency,
    name, setName,
    email, setEmail
  };

  return (
    <Appcontext.Provider value={value}>
      {children}
    </Appcontext.Provider>
  );
};

export { Appcontext, ContextProvider };
