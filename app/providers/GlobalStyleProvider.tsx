'use client';
import React from "react";
import styled from "styled-components";

const GlobalStyleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <GlobalStyles key={"uniqua"}>{children}</GlobalStyles>;
};

const GlobalStyles = styled.div`
  padding: 2.5rem;
  display: flex;
  gap: 2.5rem;
  height: 100%;
`;
export default GlobalStyleProvider;
