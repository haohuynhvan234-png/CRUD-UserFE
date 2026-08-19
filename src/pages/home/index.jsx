import { useEffect, useState } from "react";
import { UserPlus } from "lucide-react";
import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
import UserModal from "@/components/users/UserModal";
import UserTable from "@/components/users/UserTable";
import { createUser, deleteUser, getUsers, updateUser } from "@/lib/api";

function Home() {
  const [modal, setModal] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadUsers() {
    setLoading(true);
    setError("");
    try {
      setUsers(await getUsers());
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadUsers();
  }, []);

  async function handleSave(values) {
    const payload = { ...values, age: Number(values.age) || 18 };
    if (modal.mode === "create") await createUser(payload);
    else await updateUser(modal.user.id, payload);
    setModal(null);
    await loadUsers();
  }

  async function handleDelete(user) {
    if (!window.confirm(`Bạn có chắc muốn xóa ${user.name}?`)) return;
    try {
      setError("");
      await deleteUser(user.id);
      await loadUsers();
    } catch (requestError) {
      setError(requestError.message);
    }
  }
  return (
    <div className="min-h-screen bg-[#081425] text-[#d8e3fb]">
      <Sidebar />
      <div className="lg:pl-64">
        <Topbar />
        <main className="mx-auto max-w-[1400px] px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
            <div>
              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Danh sách người dùng
              </h1>
              <p className="mt-2 text-sm text-[#c7c4d7]">
                Quản lý và theo dõi thông tin tài khoản trên hệ thống.
              </p>
            </div>
            <button
              className="flex items-center justify-center gap-2 self-start rounded bg-[#c0c1ff] px-4 py-3 text-sm font-semibold text-[#1000a9] hover:brightness-110"
              onClick={() =>
                setModal({
                  mode: "create",
                  user: { id: "Mới", name: "", email: "", age: 18 },
                })
              }
              type="button"
            >
              <UserPlus size={17} /> Thêm người dùng
            </button>
          </div>
          {error && (
            <div className="mb-4 flex items-center justify-between rounded border border-[#ffb4ab]/30 bg-[#ffb4ab]/10 px-4 py-3 text-sm text-[#ffb4ab]">
              <span>{error}</span>
              <button
                className="font-semibold underline"
                onClick={loadUsers}
                type="button"
              >
                Thử lại
              </button>
            </div>
          )}
          <UserTable
            loading={loading}
            onDelete={handleDelete}
            onEdit={(user) => setModal({ mode: "edit", user })}
            onView={(user) => setModal({ mode: "detail", user })}
            users={users}
          />
        </main>
      </div>
      {modal && (
        <UserModal
          mode={modal.mode}
          onClose={() => setModal(null)}
          onSubmit={handleSave}
          user={modal.user}
        />
      )}
    </div>
  );
}

export default Home;
