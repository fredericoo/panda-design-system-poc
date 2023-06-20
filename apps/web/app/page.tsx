"use client";
import { Button, Header } from "@inploi/ploi";
import { css } from "style-engine/css";
import "../index.css";

export default function Page() {
  return (
    <div className={css({ padding: "4px", bg: "ButtonHighlight" })}>
      <Header text="Web" />
      <Button variant="primary" p={{ base: "4px", _hover: "8px" }}>
        hey
      </Button>
    </div>
  );
}
