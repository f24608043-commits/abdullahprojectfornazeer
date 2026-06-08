import { createFileRoute } from "@tanstack/react-router";
import AdminReviews from "../../pages/admin/AdminReviews";
export const Route = createFileRoute("/brigaidear/reviews")({
  component: AdminReviews,
});
