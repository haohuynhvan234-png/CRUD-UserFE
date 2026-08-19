import { Users } from "lucide-react";

function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 border-r border-white/[0.06] bg-[#111c2d] lg:flex lg:flex-col">
      <div className="flex h-16 items-center gap-3 border-b border-white/[0.06] px-6">
        <div className="flex size-8 items-center justify-center rounded bg-[#f5f7fb] text-[#34346b]">
          <span className="text-lg font-bold">⌁</span>
        </div>
        <span className="text-sm font-semibold tracking-tight text-[#d8e3fb]">
          DevShell
        </span>
      </div>
      <nav className="flex-1 px-3 py-6">
        <a
          className="flex items-center gap-3 rounded bg-[#8083ff] px-3 py-3 text-sm font-semibold text-[#0d0096]"
          href="#"
        >
          <Users size={17} strokeWidth={1.8} />
          <span>Danh sách người dùng</span>
        </a>
      </nav>
    </aside>
  );
}

export default Sidebar;
