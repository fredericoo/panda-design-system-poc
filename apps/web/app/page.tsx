"use client";
import { Button, Header } from "@inploi/ploi";
import "../index.css";

export default function Page() {
  return (
    <div>
      <Header text="Web" />
      <Button
        size="lg"
        p="$40"
        variant="primary"
        color={{ base: "n1", _hover: "n3" }}
      >
        hey
      </Button>
    </div>
  );
}
