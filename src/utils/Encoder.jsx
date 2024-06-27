
export const encodeBase64 = (str) => {
    try {
      return btoa(str);
    } catch (error) {
      console.error('Failed to encode to Base64:', error);
      return null;
    }
  };
  
  export const decodeBase64 = (base64Str) => {
    try {
      return atob(base64Str);
    } catch (error) {
      console.error('Failed to decode Base64:', error);
      return null;
    }
  };
  