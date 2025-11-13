"use client";

import React, { useState, useEffect } from "react";

// This component wraps any other component and ensures it only renders on the client
export const ClientOnly = ({ children }: { children: React.ReactNode }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  // While on the server or before the client has mounted, return nothing
  if (!hasMounted) {
    return null;
  }

  // Once the client has mounted, render the children
  return <>{children}</>;
};
