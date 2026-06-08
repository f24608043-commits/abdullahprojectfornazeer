// src/pages/admin/AdminAppointments.tsx
import { useEffect, useState } from "react";
import {
  getAdminAppointmentBookings,
  updateAppointmentStatus,
  deleteAppointmentBooking,
} from "../../api/adminApi";
import AdminLayout from "./AdminLayout";

export default function AdminAppointments() {
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    try {
      const data = await getAdminAppointmentBookings();
      setBookings(data);
    } catch (err) {
      console.error("Failed to load appointment bookings", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const handleStatusChange = async (id: string, status: string) => {
    try {
      await updateAppointmentStatus(id, status);
      load();
    } catch (err: any) {
      console.error("Failed to update status", err);
      alert(err.message || "Failed to update status");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this booking?")) return;

    try {
      await deleteAppointmentBooking(id);
      load();
    } catch (err: any) {
      console.error("Failed to delete booking", err);
      alert(err.message || "Failed to delete booking");
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      case "completed":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-yellow-100 text-yellow-800";
    }
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="p-8">
          <div className="text-center">Loading...</div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Appointment Bookings</h1>
          <div className="text-sm text-gray-500">Total: {bookings.length}</div>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Patient
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date & Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Service
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Urgency
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {bookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{booking.full_name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{booking.phone}</div>
                    <div className="text-xs text-gray-400">{booking.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{booking.preferred_date}</div>
                    <div className="text-xs text-gray-500">{booking.preferred_time}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{booking.service}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        booking.urgency === "Emergency (Today)"
                          ? "bg-red-100 text-red-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {booking.urgency}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <select
                      value={booking.status}
                      onChange={(e) => handleStatusChange(booking.id, e.target.value)}
                      className={`px-2 py-1 text-xs rounded-full border-0 ${getStatusColor(booking.status)}`}
                    >
                      <option value="pending">Pending</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="completed">Completed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => handleDelete(booking.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {bookings.length === 0 && (
            <div className="text-center py-12 text-gray-500">No appointment bookings yet.</div>
          )}
        </div>

        {bookings.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Recent Bookings Details</h2>
            <div className="space-y-4">
              {bookings.slice(0, 5).map((booking) => (
                <div key={booking.id} className="bg-white rounded-lg shadow p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold">{booking.full_name}</h3>
                      <p className="text-sm text-gray-500">
                        {booking.phone} · {booking.email}
                      </p>
                    </div>
                    <span className="text-xs text-gray-400">
                      {new Date(booking.created_at).toLocaleString()}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <span className="text-xs text-gray-500">Date:</span>
                      <p className="text-sm">
                        {booking.preferred_date} at {booking.preferred_time}
                      </p>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500">Service:</span>
                      <p className="text-sm">{booking.service}</p>
                    </div>
                  </div>
                  {booking.symptoms && (
                    <div className="mb-4">
                      <span className="text-xs text-gray-500">Symptoms:</span>
                      <p className="text-sm bg-gray-50 p-3 rounded-lg mt-1">{booking.symptoms}</p>
                    </div>
                  )}
                  {(booking.previous_treatment ||
                    booking.medical_conditions ||
                    booking.additional_notes) && (
                    <div className="text-sm text-gray-600">
                      {booking.previous_treatment && (
                        <p className="mb-2">
                          <strong>Previous Treatment:</strong> {booking.previous_treatment}
                        </p>
                      )}
                      {booking.medical_conditions && (
                        <p className="mb-2">
                          <strong>Medical Conditions:</strong> {booking.medical_conditions}
                        </p>
                      )}
                      {booking.additional_notes && (
                        <p>
                          <strong>Additional Notes:</strong> {booking.additional_notes}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
