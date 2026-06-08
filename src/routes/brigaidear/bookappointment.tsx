import { createFileRoute } from "@tanstack/react-router";
import AdminAppointments from "@/pages/admin/AdminAppointments";

export const Route = createFileRoute("/brigaidear/bookappointment")({
  component: AdminAppointments,
});
