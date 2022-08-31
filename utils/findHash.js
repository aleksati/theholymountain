import bcrypt from "bcrypt";

const findHash = async (array, ip) => {
  try {
    for (const item of array) {
      let isMatch = await bcrypt.compare(ip, item.ip_hash);
      if (isMatch) return { isMatch: true, id: item._id };
    }
    return { isMatch: false, id: null };
  } catch (error) {
    return error;
  }
};

export default findHash;
