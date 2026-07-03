import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Clock, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';

const steps = [
  { id: 1, title: 'Select Date & Time' },
  { id: 2, title: 'Your Information' },
  { id: 3, title: 'Case Details' },
  { id: 4, title: 'Confirmation' },
];

const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', 
  '2:00 PM', '3:00 PM', '4:00 PM'
];

const consultationTypes = [
  { value: '', label: 'Select consultation type' },
  { value: 'initial', label: 'Initial Consultation (Free)' },
  { value: 'case-review', label: 'Case Review' },
  { value: 'strategy', label: 'Strategy Session' },
];

const practiceAreas = [
  { value: '', label: 'Select practice area' },
  { value: 'personal-injury', label: 'Personal Injury' },
  { value: 'family-law', label: 'Family Law' },
  { value: 'criminal-defense', label: 'Criminal Defense' },
  { value: 'business-law', label: 'Business Law' },
  { value: 'estate-planning', label: 'Estate Planning' },
  { value: 'real-estate', label: 'Real Estate' },
  { value: 'other', label: 'Other' },
];

export function BookConsultation() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    consultationType: '',
    practiceArea: '',
    notes: '',
  });

  useEffect(() => {
    document.title = 'Book Consultation | Justice & Co.';
  }, []);

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async () => {
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitted(true);
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return selectedDate && selectedTime;
      case 2:
        return formData.firstName && formData.lastName && formData.email && formData.phone;
      case 3:
        return formData.consultationType && formData.practiceArea;
      default:
        return true;
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-20">
        <div className="mx-auto max-w-2xl px-4 py-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 p-12 text-center"
          >
            <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-10 w-10 text-green-600 dark:text-green-400" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Consultation Scheduled!
            </h1>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              Thank you for booking a consultation. We've sent a confirmation email to {formData.email}.
              We look forward to speaking with you on {selectedDate?.toLocaleDateString()} at {selectedTime}.
            </p>
            <Button onClick={() => window.location.href = '/'}>
              Return to Homepage
            </Button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-20">
      <div className="mx-auto max-w-4xl px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Book Your Free Consultation
          </h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Schedule a time to discuss your case with our experienced attorneys. 
            Initial consultations are always free.
          </p>
        </motion.div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm ${
                    currentStep >= step.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-200 dark:bg-slate-800 text-slate-500'
                  }`}
                >
                  {currentStep > step.id ? (
                    <CheckCircle2 className="h-5 w-5" />
                  ) : (
                    step.id
                  )}
                </div>
                <span
                  className={`ml-2 text-sm font-medium hidden sm:block ${
                    currentStep >= step.id
                      ? 'text-slate-900 dark:text-white'
                      : 'text-slate-500'
                  }`}
                >
                  {step.title}
                </span>
                {index < steps.length - 1 && (
                  <div
                    className={`w-12 sm:w-24 h-0.5 mx-2 sm:mx-4 ${
                      currentStep > step.id
                        ? 'bg-blue-600'
                        : 'bg-slate-200 dark:bg-slate-800'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Card */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 p-8"
        >
          {/* Step 1: Date & Time */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
                Select Date & Time
              </h2>

              {/* Calendar placeholder - in real app use react-calendar */}
              <div className="grid grid-cols-7 gap-2 mb-6">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="text-center text-sm font-medium text-slate-500 py-2">
                    {day}
                  </div>
                ))}
                {Array.from({ length: 31 }, (_, i) => i + 1).map((date) => {
                  const isSelected = selectedDate?.getDate() === date;
                  const isDisabled = date < new Date().getDate();
                  return (
                    <button
                      key={date}
                      disabled={isDisabled}
                      onClick={() => setSelectedDate(new Date(2024, 0, date))}
                      className={`aspect-square rounded-lg text-sm font-medium transition-colors ${
                        isSelected
                          ? 'bg-blue-600 text-white'
                          : isDisabled
                          ? 'text-slate-300 cursor-not-allowed'
                          : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      {date}
                    </button>
                  );
                })}
              </div>

              {/* Time Slots */}
              <div>
                <h3 className="text-sm font-medium text-slate-900 dark:text-white mb-4">
                  Available Times
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                        selectedTime === time
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Personal Info */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
                Your Information
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Input
                  label="First Name"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
                <Input
                  label="Last Name"
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                />
              </div>

              <Input
                label="Email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />

              <Input
                label="Phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
          )}

          {/* Step 3: Case Details */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
                Case Details
              </h2>

              <Select
                label="Consultation Type"
                required
                options={consultationTypes}
                value={formData.consultationType}
                onChange={(e) => setFormData({ ...formData, consultationType: e.target.value })}
              />

              <Select
                label="Practice Area"
                required
                options={practiceAreas}
                value={formData.practiceArea}
                onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
              />

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Additional Notes (Optional)
                </label>
                <textarea
                  rows={4}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Briefly describe your legal matter..."
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          )}

          {/* Step 4: Confirmation */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
                Confirm Your Appointment
              </h2>

              <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <CalendarIcon className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-900 dark:text-white">
                    {selectedDate?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-900 dark:text-white">{selectedTime}</span>
                </div>
                <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    <strong>Name:</strong> {formData.firstName} {formData.lastName}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    <strong>Email:</strong> {formData.email}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    <strong>Phone:</strong> {formData.phone}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    <strong>Practice Area:</strong> {practiceAreas.find(a => a.value === formData.practiceArea)?.label}
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-500 dark:text-slate-400">
                By confirming, you agree to our appointment policy. You will receive 
                a confirmation email with details and calendar invite.
              </p>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={currentStep === 1}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            {currentStep < 4 ? (
              <Button
                onClick={handleNext}
                disabled={!isStepValid()}
              >
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button onClick={handleSubmit}>
                Confirm Booking
                <CheckCircle2 className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
