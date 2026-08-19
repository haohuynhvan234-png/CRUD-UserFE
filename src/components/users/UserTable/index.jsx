import { Download, Eye, Filter, Pencil, Search, Trash2 } from "lucide-react";

const users = [
  {
    id: "USR-1042",
    name: "Nguyễn Văn A",
    email: "nguyenvana@example.com",
    age: 28,
    date: "2023-10-15",
    initial: "A",
    tone: "bg-[#c0c1ff]/20 text-[#c0c1ff]",
    status: "Hoạt động",
  },
  {
    id: "USR-1043",
    name: "Nguyễn Văn B",
    email: "nguyenvanb@example.com",
    age: 34,
    date: "2023-11-02",
    initial: "B",
    tone: "bg-[#ffb783]/20 text-[#ffb783]",
    status: "Hoạt động",
  },
  {
    id: "USR-1044",
    name: "Trần Thị C",
    email: "tranthic@example.com",
    age: 22,
    date: "2023-11-20",
    initial: "C",
    tone: "bg-[#2a3548] text-[#908fa0]",
    status: "Bị khóa",
    locked: true,
  },
];

function UserTable({ onView, onEdit }) {
  return (
    <section className="rounded-lg border border-white/[0.04] bg-[#1f2a3c] p-4 shadow-xl sm:p-5">
      <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
        <label className="flex w-full items-center gap-3 rounded border border-white/[0.04] bg-[#152031] px-3 py-2 text-[#908fa0] focus-within:border-[#8083ff] md:max-w-sm">
          <Search size={16} />
          <input
            className="w-full bg-transparent text-sm text-[#d8e3fb] outline-none placeholder:text-[#908fa0]"
            placeholder="Tìm kiếm theo tên, email..."
          />
        </label>
        <div className="flex gap-2">
          <button
            className="flex items-center gap-2 rounded bg-[#152031] px-3 py-2 text-sm text-[#d8e3fb] hover:bg-[#2a3548]"
            type="button"
          >
            <Filter size={15} /> Lọc
          </button>
          <button
            className="flex items-center gap-2 rounded bg-[#152031] px-3 py-2 text-sm text-[#d8e3fb] hover:bg-[#2a3548]"
            type="button"
          >
            <Download size={15} /> Xuất CSV
          </button>
        </div>
      </div>
      <div className="mt-5 overflow-x-auto">
        <table className="w-full min-w-[760px] border-collapse text-left text-sm">
          <thead className="border-b border-white/[0.07] text-[10px] uppercase tracking-wider text-[#c7c4d7]">
            <tr>
              <th className="px-2 py-3">
                <input aria-label="Chọn tất cả" type="checkbox" />
              </th>
              <th className="px-2 py-3">ID</th>
              <th className="px-2 py-3">Người dùng</th>
              <th className="px-2 py-3">Email</th>
              <th className="px-2 py-3">Tuổi</th>
              <th className="px-2 py-3">Ngày tạo</th>
              <th className="px-2 py-3">Trạng thái</th>
              <th className="px-2 py-3 text-right">Thao tác</th>
            </tr>
          </thead>
          <tbody className="text-[#d8e3fb]">
            {users.map((user) => (
              <tr
                className={`group border-b border-white/[0.06] last:border-0 hover:bg-[#2a3548]/40 ${user.locked ? "opacity-55" : ""}`}
                key={user.id}
              >
                <td className="px-2 py-5">
                  <input aria-label={`Chọn ${user.name}`} type="checkbox" />
                </td>
                <td className="px-2 py-5 font-mono text-xs text-[#908fa0]">
                  {user.id}
                </td>
                <td className="px-2 py-5">
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex size-8 items-center justify-center rounded-full text-xs font-semibold ${user.tone}`}
                    >
                      {user.initial}
                    </span>
                    <span
                      className={`font-semibold ${user.locked ? "line-through" : ""}`}
                    >
                      {user.name}
                    </span>
                  </div>
                </td>
                <td
                  className={`px-2 py-5 text-[#c7c4d7] ${user.locked ? "line-through" : ""}`}
                >
                  {user.email}
                </td>
                <td className="px-2 py-5">{user.age}</td>
                <td className="px-2 py-5 font-mono text-xs text-[#c7c4d7]">
                  {user.date}
                </td>
                <td className="px-2 py-5">
                  <span
                    className={`inline-flex items-center gap-2 rounded-full px-2 py-1 text-[10px] ${user.locked ? "bg-[#2a3548] text-[#908fa0]" : "bg-[#c0c1ff]/10 text-[#c0c1ff]"}`}
                  >
                    <span
                      className={`size-1.5 rounded-full ${user.locked ? "bg-[#908fa0]" : "bg-[#c0c1ff]"}`}
                    />
                    {user.status}
                  </span>
                </td>
                <td className="px-2 py-5">
                  <div className="flex justify-end gap-1 opacity-0 transition-opacity group-hover:opacity-100">
                    <button
                      className="rounded p-2 text-[#c7c4d7] hover:bg-[#152031] hover:text-[#c0c1ff]"
                      onClick={() => onView(user)}
                      title="Xem chi tiết"
                      type="button"
                    >
                      <Eye size={16} />
                    </button>
                    <button
                      className="rounded p-2 text-[#c7c4d7] hover:bg-[#152031] hover:text-[#ffb783]"
                      onClick={() => onEdit(user)}
                      title="Chỉnh sửa"
                      type="button"
                    >
                      <Pencil size={16} />
                    </button>
                    <button
                      className="rounded p-2 text-[#c7c4d7] hover:bg-[#152031] hover:text-[#ffb4ab]"
                      title="Xóa"
                      type="button"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex flex-col gap-3 border-t border-white/[0.06] pt-4 text-xs text-[#c7c4d7] sm:flex-row sm:items-center sm:justify-between">
        <span>Hiển thị 1-3 trong số 45 người dùng</span>
        <div className="flex items-center gap-1">
          <button
            className="size-8 rounded text-[#908fa0] hover:bg-[#152031]"
            type="button"
          >
            ‹
          </button>
          <button
            className="size-8 rounded bg-[#c0c1ff]/10 font-semibold text-[#c0c1ff]"
            type="button"
          >
            1
          </button>
          <button className="size-8 rounded hover:bg-[#152031]" type="button">
            2
          </button>
          <button className="size-8 rounded hover:bg-[#152031]" type="button">
            3
          </button>
          <span className="px-1">...</span>
          <button className="size-8 rounded hover:bg-[#152031]" type="button">
            15
          </button>
          <button
            className="size-8 rounded text-[#908fa0] hover:bg-[#152031]"
            type="button"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

export default UserTable;
