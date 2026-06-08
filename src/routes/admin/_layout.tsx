import { createFileRoute } from "@tanstack/react-router";
import AdminLayout from "../../pages/admin/AdminLayout";

export const Route = createFileRoute("/admin/_layout")({
  component: AdminLayout,
});
