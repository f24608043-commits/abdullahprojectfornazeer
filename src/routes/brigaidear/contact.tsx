import { createFileRoute } from "@tanstack/react-router";
import AdminContact from "@/pages/admin/AdminContact";

export const Route = createFileRoute("/brigaidear/contact")({
  component: AdminContact,
});
