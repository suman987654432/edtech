import Application from '../models/Application.js';

// @desc    Submit application
// @route   POST /api/applications
// @access  Private (Requires JWT Token)
export const submitApplication = async (req, res) => {
  const { name, email, phone, college, yearOfStudy, program, reason } = req.body;

  if (!name || !email || !phone || !college || !yearOfStudy || !program || !reason) {
    return res.status(400).json({ message: 'Please add all required fields' });
  }

  try {
    const application = await Application.create({
      user: req.user.id, // req.user comes from the protect auth middleware
      name,
      email,
      phone,
      college,
      yearOfStudy,
      program,
      reason,
    });

    res.status(201).json(application);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error while submitting application' });
  }
};
