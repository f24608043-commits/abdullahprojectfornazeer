import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/brigaidear/")({
  beforeLoad: () => {
    throw redirect({ to: "/brigaidear/login" });
  },
});
