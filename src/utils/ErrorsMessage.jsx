const extractErrorMessage = (error) => {
  if (error.response && error.response.data) {
    const errorData = error.response.data;
    if (typeof errorData === "string") {
      return errorData;
    } else if (typeof errorData === "object") {
      let errorMessage = "";
      for (const key in errorData) {
        if (Array.isArray(errorData[key])) {
          errorMessage += ` ${errorData[key].join(", ")}\n`;
        } else {
          errorMessage += ` ${errorData[key]}\n`;
        }
      }
      return errorMessage.trim();
    }
  } else if (error.response && error.response.status === 500) {
    return "Server Error";
  }
  return "An unknown error occurred";
};

export default extractErrorMessage;
