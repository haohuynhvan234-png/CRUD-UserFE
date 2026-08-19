export const API_ORIGIN = (
  import.meta.env.VITE_API_URL ||
  "https://crud-user-production-d6cc.up.railway.app"
).replace(/\/$/, "");
export const API_BASE_URL = import.meta.env.DEV ? "" : API_ORIGIN;

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: options.body
      ? { "Content-Type": "application/json", ...options.headers }
      : options.headers,
    ...options,
  });
  const body = await response.json().catch(() => null);
  if (!response.ok) {
    if (
      body?.error?.includes("E11000") ||
      body?.error?.includes("duplicate key")
    ) {
      throw new Error("Email này hiện đã tồn tại");
    }
    throw new Error(body?.error || body?.message || "Không thể kết nối API.");
  }
  return body;
}

export const getUsers = () => request("/api/users");
export const createUser = (user) =>
  request("/api/users", {
    method: "POST",
    body: JSON.stringify(user),
  }).then((body) => body?.data || body);
export const updateUser = (id, user) =>
  request(`/api/users/${id}`, {
    method: "PUT",
    body: JSON.stringify(user),
  });
export const deleteUser = (id) =>
  request(`/api/users/${id}`, { method: "DELETE" });
