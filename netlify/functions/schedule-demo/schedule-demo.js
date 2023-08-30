const oracledb = require('oracledb');

exports.handler = async (event) => {
  try {
    // Parse the form data from the request body
    const formData = JSON.parse(event.body);

    // Database connection configuration
    const connection = await oracledb.getConnection({
      user: 'adam',             // Replace with your database username
      password: '1234',         // Replace with your database password
      connectString: 'database1', // Replace with your database connection string
    });

    // SQL query to insert data
    const insertQuery = `
      INSERT INTO demo_requests (first_name, last_name, job_title, company, email, phone, referral)
      VALUES (:firstName, :lastName, :jobTitle, :company, :email, :phone, :referral)
    `;

    // Bind values to query parameters
    const binds = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      jobTitle: formData.jobTitle,
      company: formData.company,
      email: formData.email,
      phone: formData.phone,
      referral: formData.referral,
    };

    // Execute the query
    const result = await connection.execute(insertQuery, binds, { autoCommit: true });

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
