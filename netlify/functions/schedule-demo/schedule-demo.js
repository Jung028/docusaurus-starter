const oracledb = require('oracledb');

exports.handler = async (event) => {
  try {
    // Parse the form data from the request body
    const formData = JSON.parse(event.body);

    // Database connection configuration
    const connection = await oracledb.getConnection({
      user: 'aedamjung@gmail.com',     // Replace with your Oracle username
      password: 'Remember121314$', // Replace with your Oracle password
      connectString: 'your-connect-string' // Replace with your Oracle connect string
    });

    // SQL query to insert data
    const insertQuery = `
      INSERT INTO demo_requests (first_name, last_name, job_title, company, email, phone, referral)
      VALUES (:firstName, :lastName, :jobTitle, :company, :email, :phone, :referral)
    `;

    // Execute the query
    const result = await connection.execute(insertQuery, {
      firstName: formData.firstName,
      lastName: formData.lastName,
      jobTitle: formData.jobTitle,
      company: formData.company,
      email: formData.email,
      phone: formData.phone,
      referral: formData.referral
    }, { autoCommit: true });

    // Release the connection
    await connection.close();

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Demo request submitted successfully' }),
    };
  } catch (error) {
    console.error('Error processing request:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error submitting demo request' }),
    };
  }
};
