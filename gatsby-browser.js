import React from "react"
import {ContextProvider} from "./src/context/state"
export const wrapRootElement = ({ element }) => (
  <ContextProvider>{element}</ContextProvider>
)
