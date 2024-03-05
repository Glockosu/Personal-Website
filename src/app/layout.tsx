// app/layout.tsx
"use client";
import Header from "@/components/header";
import * as React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header/>
        <div style={{ flex: 1 }}>
          <div id="cursor" className="cursor">  </div>
          {children}
        </div>
      </div>
  );
}
