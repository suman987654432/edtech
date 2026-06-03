import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  college: { type: String, required: true },
  yearOfStudy: { type: String, required: true },
  program: { type: String, required: true },
  reason: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model('Application', applicationSchema);
