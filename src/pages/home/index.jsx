import { useState } from "react";
import { UserPlus } from "lucide-react";
import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
import UserModal from "@/components/users/UserModal";
import UserTable from "@/components/users/UserTable";

function Home() {
  const [modal, setModal] = useState(null);
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
                  mode: "edit",
                  user: { id: "USR-NEW", name: "", email: "", age: "" },
                })
              }
              type="button"
            >
              <UserPlus size={17} /> Thêm người dùng
            </button>
          </div>
          <UserTable
            onEdit={(user) => setModal({ mode: "edit", user })}
            onView={(user) => setModal({ mode: "detail", user })}
          />
        </main>
      </div>
      {modal && (
        <UserModal
          mode={modal.mode}
          onClose={() => setModal(null)}
          user={modal.user}
        />
      )}
    </div>
  );
}

export default Home;
