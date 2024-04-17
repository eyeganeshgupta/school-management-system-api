const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    const connected = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Successfully established connection with the database: ${connected.connection.host}`
    );
  } catch (error) {
    console.log(
      "An error occurred while trying to connect to the database.",
      error.message
    );
  }
};

dbConnect();
