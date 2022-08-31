import bcrypt from "bcrypt";

const hashIP = async ip => {
  try {
    const salt = await bcrypt.genSalt(Number(process.env.salt));
    const hash = await bcrypt.hash(ip, salt);
    return hash;
  } catch (error) {
    return error;
  }
};

export default hashIP;
