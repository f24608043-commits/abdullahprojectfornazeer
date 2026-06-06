import { createFileRoute } from '@tanstack/react-router'
import AdminLogin from '../../pages/admin/AdminLogin'

export const Route = createFileRoute('/brigaidear/login')({
    component: AdminLogin,
})
