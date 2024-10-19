const express = require('express');
const app = express();

app.use(express.json());

app.post('/contact', (req, res) => {
  const { name, email, phone, service, message } = req.body;
  // Process form data (e.g., send email using nodemailer)
  console.log(`Received message from ${name} (${email}) regarding ${service}: ${message}`);
  res.json({ success: true });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
