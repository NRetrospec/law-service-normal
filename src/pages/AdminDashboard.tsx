import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Users, Calendar, FileText, DollarSign, TrendingUp,
  ChevronRight, Bell, Settings, BarChart3, Briefcase 
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useAuthStore } from '@/store/authStore';

const stats = [
  { label: 'Total Clients', value: '245', change: '+12%', icon: Users, color: 'blue' },
  { label: 'Active Cases', value: '38', change: '+5%', icon: Briefcase, color: 'amber' },
  { label: 'Appointments', value: '12', change: '+8%', icon: Calendar, color: 'green' },
  { label: 'Revenue', value: '$48,500', change: '+15%', icon: DollarSign, color: 'purple' },
];

const recentClients = [
  { id: 1, name: 'Sarah Johnson', case: 'Personal Injury', status: 'Active', date: '2024-01-20' },
  { id: 2, name: 'Michael Chen', case: 'Business Law', status: 'Pending', date: '2024-01-19' },
  { id: 3, name: 'Emily Rodriguez', case: 'Family Law', status: 'Active', date: '2024-01-18' },
];

const upcomingAppointments = [
  { id: 1, client: 'David Smith', type: 'Case Review', time: '10:00 AM', date: 'Today' },
  { id: 2, client: 'Lisa Wang', type: 'Initial Consultation', time: '2:00 PM', date: 'Today' },
  { id: 3, client: 'Robert Brown', type: 'Follow-up', time: '11:00 AM', date: 'Tomorrow' },
];

export function AdminDashboard() {
  const { user } = useAuthStore();

  useEffect(() => {
    document.title = 'Admin Dashboard | Justice & Co.';
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
              Dashboard
            </h1>
            <p className="text-slate-600 dark:text-slate-400">
              Welcome back, {user?.firstName || 'Admin'}
            </p>
          </motion.div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </Button>
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {stat.label}
                      </p>
                      <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                        {stat.value}
                      </p>
                    </div>
                    <div className={`w-12 h-12 rounded-xl bg-${stat.color}-100 dark:bg-${stat.color}-900/30 flex items-center justify-center`}>
                      <stat.icon className={`h-6 w-6 text-${stat.color}-600 dark:text-${stat.color}-400`} />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-sm">
                    <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                    <span className="text-green-600 font-medium">{stat.change}</span>
                    <span className="text-slate-500 ml-1">vs last month</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Recent Clients */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-4">
                <CardTitle className="text-lg">Recent Clients</CardTitle>
                <Link to="/admin/clients">
                  <Button variant="ghost" size="sm">
                    View All
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-slate-200 dark:border-slate-800">
                        <th className="text-left py-3 text-sm font-medium text-slate-600 dark:text-slate-400">Name</th>
                        <th className="text-left py-3 text-sm font-medium text-slate-600 dark:text-slate-400">Case Type</th>
                        <th className="text-left py-3 text-sm font-medium text-slate-600 dark:text-slate-400">Status</th>
                        <th className="text-left py-3 text-sm font-medium text-slate-600 dark:text-slate-400">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentClients.map((client) => (
                        <tr key={client.id} className="border-b border-slate-100 dark:border-slate-800 last:border-0">
                          <td className="py-3 text-slate-900 dark:text-white font-medium">{client.name}</td>
                          <td className="py-3 text-slate-600 dark:text-slate-400 text-sm">{client.case}</td>
                          <td className="py-3">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              client.status === 'Active' 
                                ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                                : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300'
                            }`}>
                              {client.status}
                            </span>
                          </td>
                          <td className="py-3 text-slate-500 text-sm">{new Date(client.date).toLocaleDateString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Revenue Chart Placeholder */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-4">
                <CardTitle className="text-lg">Revenue Overview</CardTitle>
                <select className="text-sm border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-1 bg-white dark:bg-slate-800">
                  <option>Last 30 days</option>
                  <option>Last 90 days</option>
                  <option>This year</option>
                </select>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center bg-slate-50 dark:bg-slate-800 rounded-xl">
                  <div className="text-center">
                    <BarChart3 className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                    <p className="text-slate-500">Revenue chart will be displayed here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Upcoming Appointments */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-4">
                <CardTitle className="text-lg">Today's Schedule</CardTitle>
                <Link to="/admin/appointments">
                  <Button variant="ghost" size="sm">
                    View All
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingAppointments.map((apt) => (
                    <div key={apt.id} className="flex items-start gap-4 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                        <Calendar className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-slate-900 dark:text-white text-sm">
                          {apt.client}
                        </p>
                        <p className="text-sm text-slate-500">{apt.type}</p>
                        <p className="text-xs text-blue-600 mt-1">{apt.time} • {apt.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link to="/admin/clients/new">
                  <Button variant="outline" className="w-full justify-start">
                    <Users className="mr-2 h-4 w-4" />
                    Add New Client
                  </Button>
                </Link>
                <Link to="/admin/appointments/new">
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule Appointment
                  </Button>
                </Link>
                <Link to="/admin/blog/new">
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="mr-2 h-4 w-4" />
                    Write Blog Post
                  </Button>
                </Link>
                <Link to="/admin/invoices/new">
                  <Button variant="outline" className="w-full justify-start">
                    <DollarSign className="mr-2 h-4 w-4" />
                    Create Invoice
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Tasks */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Pending Tasks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1 rounded border-slate-300" />
                    <div>
                      <p className="text-sm text-slate-900 dark:text-white">Review Smith case documents</p>
                      <p className="text-xs text-slate-500">Due today</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1 rounded border-slate-300" />
                    <div>
                      <p className="text-sm text-slate-900 dark:text-white">Prepare for tomorrow's deposition</p>
                      <p className="text-xs text-slate-500">Due tomorrow</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1 rounded border-slate-300" />
                    <div>
                      <p className="text-sm text-slate-900 dark:text-white">Send settlement offer</p>
                      <p className="text-xs text-slate-500">Due in 2 days</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
