import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for adding auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor for handling errors
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      
      try {
        const refreshToken = localStorage.getItem('refreshToken');
        const response = await axios.post(`${API_URL}/auth/refresh`, { refreshToken });
        const { token } = response.data;
        
        localStorage.setItem('token', token);
        originalRequest.headers.Authorization = `Bearer ${token}`;
        
        return api(originalRequest);
      } catch (refreshError) {
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

// Auth
export const authAPI = {
  login: (email: string, password: string) =>
    api.post('/auth/login', { email, password }),
  register: (data: any) => api.post('/auth/register', data),
  logout: () => api.post('/auth/logout', { refreshToken: localStorage.getItem('refreshToken') }),
  me: () => api.get('/auth/me'),
  updateProfile: (data: any) => api.put('/auth/profile', data),
  forgotPassword: (email: string) => api.post('/auth/forgot-password', { email }),
  resetPassword: (token: string, password: string) =>
    api.post('/auth/reset-password', { token, password }),
};

// Appointments
export const appointmentAPI = {
  getAvailableSlots: (date: string, duration?: number) =>
    api.get('/appointments/available-slots', { params: { date, duration } }),
  getAll: (params?: any) => api.get('/appointments', { params }),
  getMyAppointments: () => api.get('/appointments/my-appointments'),
  create: (data: any) => api.post('/appointments', data),
  update: (id: string, data: any) => api.put(`/appointments/${id}`, data),
  cancel: (id: string, reason?: string) =>
    api.post(`/appointments/${id}/cancel`, { reason }),
};

// Clients
export const clientAPI = {
  getAll: (params?: any) => api.get('/clients', { params }),
  getById: (id: string) => api.get(`/clients/${id}`),
  update: (id: string, data: any) => api.put(`/clients/${id}`, data),
};

// Cases
export const caseAPI = {
  getAll: (params?: any) => api.get('/cases', { params }),
  getFeatured: () => api.get('/cases/featured'),
  getById: (id: string) => api.get(`/cases/${id}`),
  create: (data: any) => api.post('/cases', data),
  update: (id: string, data: any) => api.put(`/cases/${id}`, data),
  addNote: (id: string, data: any) => api.post(`/cases/${id}/notes`, data),
  delete: (id: string) => api.delete(`/cases/${id}`),
};

// Payments
export const paymentAPI = {
  createConsultationPayment: (data: any) =>
    api.post('/payments/create-consultation-payment', data),
  createInvoice: (data: any) => api.post('/payments/create-invoice', data),
  getAll: (params?: any) => api.get('/payments', { params }),
  getMyPayments: () => api.get('/payments/my-payments'),
};

// Blog
export const blogAPI = {
  getAll: (params?: any) => api.get('/blog', { params }),
  getBySlug: (slug: string) => api.get(`/blog/${slug}`),
  create: (data: any) => api.post('/blog', data),
  update: (id: string, data: any) => api.put(`/blog/${id}`, data),
  delete: (id: string) => api.delete(`/blog/${id}`),
};

// Practice Areas
export const practiceAreaAPI = {
  getAll: () => api.get('/practice-areas'),
  getBySlug: (slug: string) => api.get(`/practice-areas/${slug}`),
  create: (data: any) => api.post('/practice-areas', data),
  update: (id: string, data: any) => api.put(`/practice-areas/${id}`, data),
  delete: (id: string) => api.delete(`/practice-areas/${id}`),
};

// Testimonials
export const testimonialAPI = {
  getAll: (params?: any) => api.get('/testimonials', { params }),
  getFeatured: () => api.get('/testimonials/featured'),
  create: (data: any) => api.post('/testimonials', data),
  update: (id: string, data: any) => api.put(`/testimonials/${id}`, data),
  delete: (id: string) => api.delete(`/testimonials/${id}`),
};

// Documents
export const documentAPI = {
  getAll: (params?: any) => api.get('/documents', { params }),
  getTemplates: () => api.get('/documents/templates'),
  upload: (data: any) => api.post('/documents', data),
  delete: (id: string) => api.delete(`/documents/${id}`),
};

// Messages
export const messageAPI = {
  getAll: (params?: any) => api.get('/messages', { params }),
  getThread: (id: string) => api.get(`/messages/thread/${id}`),
  send: (data: any) => api.post('/messages', data),
  markAsRead: (id: string) => api.put(`/messages/${id}/read`),
};

// Admin
export const adminAPI = {
  getDashboard: () => api.get('/admin/dashboard'),
  getAnalytics: (params?: any) => api.get('/admin/analytics', { params }),
  getSettings: () => api.get('/admin/settings'),
  updateSettings: (data: any) => api.put('/admin/settings', data),
};

// Notifications
export const notificationAPI = {
  getAll: (params?: any) => api.get('/notifications', { params }),
  markAsRead: (id: string) => api.put(`/notifications/${id}/read`),
  markAllAsRead: () => api.put('/notifications/read-all'),
};

export default api;
