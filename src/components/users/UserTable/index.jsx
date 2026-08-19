import { Download, Eye, Pencil, Search, Trash2 } from "lucide-react";
import { useMemo, useState } from "react";

function UserTable({ users, loading, onView, onEdit, onDelete }) {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 4;
  const filteredUsers = useMemo(
    () =>
      users
        .filter((user) =>
          `${user.name} ${user.email}`
            .toLowerCase()
            .includes(query.toLowerCase()),
        )
        .sort(
          (firstUser, secondUser) =>
            new Date(secondUser.createdAt) - new Date(firstUser.createdAt),
        ),
    [users, query],
  );
  const pageCount = Math.max(1, Math.ceil(filteredUsers.length / pageSize));
  const pageUsers = filteredUsers.slice((page - 1) * pageSize, page * pageSize);

  function exportCsv() {
    const rows = [
      ["ID", "Họ tên", "Email", "Tuổi", "Ngày tạo"],
      ...filteredUsers.map((user) => [
        user._id,
        user.name,
        user.email,
        user.age,
        user.createdAt,
      ]),
    ];
    const csv = rows
      .map((row) =>
        row
          .map((value) => `"${String(value ?? "").replaceAll('"', '""')}"`)
          .join(","),
      )
      .join("\n");
    const url = URL.createObjectURL(
      new Blob([`\uFEFF${csv}`], { type: "text/csv;charset=utf-8" }),
    );
    const link = document.createElement("a");
    link.href = url;
    link.download = "users.csv";
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <section className="rounded-lg border border-white/[0.04] bg-[#1f2a3c] p-4 shadow-xl sm:p-5">
      <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
        <label className="flex w-full items-center gap-3 rounded border border-white/[0.04] bg-[#152031] px-3 py-2 text-[#908fa0] md:max-w-sm">
          <Search size={16} />
          <input
            className="w-full bg-transparent text-sm text-[#d8e3fb] outline-none placeholder:text-[#908fa0]"
            onChange={(event) => {
              setQuery(event.target.value);
              setPage(1);
            }}
            placeholder="Tìm kiếm theo tên, email..."
            value={query}
          />
        </label>
        <button
          className="flex items-center gap-2 self-end rounded bg-[#152031] px-3 py-2 text-sm text-[#d8e3fb] hover:bg-[#2a3548]"
          onClick={exportCsv}
          type="button"
        >
          <Download size={15} /> Xuất CSV
        </button>
      </div>
      <div className="mt-5 overflow-x-auto">
        <table className="w-full min-w-[760px] border-collapse text-left text-sm">
          <thead className="border-b border-white/[0.07] text-[10px] uppercase tracking-wider text-[#c7c4d7]">
            <tr>
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
            {loading ? (
              <tr>
                <td className="px-2 py-8 text-center" colSpan="7">
                  Đang tải dữ liệu...
                </td>
              </tr>
            ) : pageUsers.length === 0 ? (
              <tr>
                <td className="px-2 py-8 text-center" colSpan="7">
                  Không tìm thấy người dùng.
                </td>
              </tr>
            ) : (
              pageUsers.map((user) => (
                <tr
                  className="group border-b border-white/[0.06] last:border-0 hover:bg-[#2a3548]/40"
                  key={user._id}
                >
                  <td className="px-2 py-5 font-mono text-xs text-[#908fa0]">
                    {user._id}
                  </td>
                  <td className="px-2 py-5">
                    <div className="flex items-center gap-3">
                      <span className="flex size-8 items-center justify-center rounded-full bg-[#c0c1ff]/20 text-xs font-semibold text-[#c0c1ff]">
                        {user.name?.trim()?.charAt(0)?.toUpperCase() || "?"}
                      </span>
                      <span className="font-semibold">{user.name}</span>
                    </div>
                  </td>
                  <td className="px-2 py-5 text-[#c7c4d7]">{user.email}</td>
                  <td className="px-2 py-5">{user.age}</td>
                  <td className="px-2 py-5 font-mono text-xs text-[#c7c4d7]">
                    {new Date(user.createdAt).toLocaleDateString("vi-VN")}
                  </td>
                  <td className="px-2 py-5">
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#c0c1ff]/10 px-2 py-1 text-[10px] text-[#c0c1ff]">
                      <span className="size-1.5 rounded-full bg-[#c0c1ff]" />
                      Hoạt động
                    </span>
                  </td>
                  <td className="px-2 py-5">
                    <div className="flex justify-end gap-1 opacity-0 transition-opacity group-hover:opacity-100">
                      <button
                        className="rounded p-2 text-[#c7c4d7] hover:bg-[#152031] hover:text-[#c0c1ff]"
                        onClick={() => onView({ ...user, id: user._id })}
                        title="Xem chi tiết"
                        type="button"
                      >
                        <Eye size={16} />
                      </button>
                      <button
                        className="rounded p-2 text-[#c7c4d7] hover:bg-[#152031] hover:text-[#ffb783]"
                        onClick={() => onEdit({ ...user, id: user._id })}
                        title="Chỉnh sửa"
                        type="button"
                      >
                        <Pencil size={16} />
                      </button>
                      <button
                        className="rounded p-2 text-[#c7c4d7] hover:bg-[#152031] hover:text-[#ffb4ab]"
                        onClick={() => onDelete({ ...user, id: user._id })}
                        title="Xóa"
                        type="button"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex flex-col gap-3 border-t border-white/[0.06] pt-4 text-xs text-[#c7c4d7] sm:flex-row sm:items-center sm:justify-between">
        <span>
          Hiển thị {filteredUsers.length ? (page - 1) * pageSize + 1 : 0}-
          {Math.min(page * pageSize, filteredUsers.length)} trong số{" "}
          {filteredUsers.length} người dùng
        </span>
        <div className="flex items-center gap-2">
          <button
            className="size-8 rounded text-[#908fa0] hover:bg-[#152031]"
            disabled={page === 1}
            onClick={() => setPage((current) => Math.max(1, current - 1))}
            type="button"
          >
            ‹
          </button>
          <span>
            {page} / {pageCount}
          </span>
          <button
            className="size-8 rounded text-[#908fa0] hover:bg-[#152031]"
            disabled={page === pageCount}
            onClick={() =>
              setPage((current) => Math.min(pageCount, current + 1))
            }
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
