import React, { Suspense } from "react";
import AppRoutes from "./routes/AppRoutes";
import Loader from "./components/common/Loader";
import ChatWidget from "./components/common/ChatWidget";
export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <AppRoutes />
      <ChatWidget />
    </Suspense>
  );
}
