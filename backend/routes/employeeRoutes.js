const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Employee = require("../models/Employee");

const router = express.Router();
const JWT_SECRET = "d3ed03a215f0da66fb839801";
// Get all employees
router.get("/", async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
});

router.put("/:id", async (req, res) => {
  const updatedEmployee = await Employee.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updatedEmployee);
});

// Delete employee
router.delete("/:id", async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.json({ message: "Employee deleted" });
});

// Login API
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const employee = await Employee.findOne({ email });
    if (!employee)
      return res.status(400).json({ error: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, employee.password);

    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

    const token = jwt.sign({ id: employee._id }, JWT_SECRET, {
      expiresIn: "1d",
    });
    res.json({ token, employee });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Register new employee
router.post("/register", async (req, res) => {
  try {
    const { employeeId, fullName, phoneNumber, email, role, password } =
      req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newEmployee = new Employee({
      employeeId,
      fullName,
      phoneNumber,
      email,
      role,
      password: hashedPassword,
    });

    await newEmployee.save();
    res.status(201).json({ message: "Employee registered" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  const employees = await Employee.find().select("-password");
  res.json(employees);
});

module.exports = router;
