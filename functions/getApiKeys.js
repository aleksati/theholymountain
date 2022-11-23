// get stripe key for shop
const getApiKeys = async () => {
  try {
    const res = await fetch("/api/keys", {
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    return {
      publishableKey: data.publishableKey,
    };
  } catch (error) {
    throw new Error("Error fetching stripe API key from backend.");
  }
};

export default getApiKeys;
