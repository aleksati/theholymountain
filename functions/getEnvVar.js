// used in Shop.js and ModalContact.js
const getEnvVar = async () => {
  try {
    const res = await fetch("/api/keys", {
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return new Error("Error fetching envVar from API: ", error);
  }
};

export default getEnvVar;
