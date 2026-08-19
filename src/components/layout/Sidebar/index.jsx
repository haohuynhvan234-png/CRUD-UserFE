import {
  BookOpen,
  LayoutDashboard,
  Settings,
  UserPlus,
  Users,
} from "lucide-react";

const navigation = [
  ["Dashboard", LayoutDashboard],
  ["Danh sách người dùng", Users],
  ["Thêm người dùng mới", UserPlus],
  ["API Documentation", BookOpen],
];

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
      <nav className="flex-1 space-y-2 px-3 py-6">
        {navigation.map(([label, Icon], index) => (
          <a
            className={`flex items-center gap-3 rounded px-3 py-3 text-sm transition-colors ${index === 1 ? "bg-[#8083ff] font-semibold text-[#0d0096]" : "text-[#c7c4d7] hover:bg-[#1f2a3c] hover:text-[#d8e3fb]"}`}
            href="#"
            key={label}
          >
            <Icon size={17} strokeWidth={1.8} />
            <span>{label}</span>
          </a>
        ))}
        <div className="my-5 h-px bg-white/[0.06]" />
        <a
          className="flex items-center gap-3 rounded px-3 py-3 text-sm text-[#c7c4d7] hover:bg-[#1f2a3c] hover:text-[#d8e3fb]"
          href="#"
        >
          <Settings size={17} strokeWidth={1.8} />
          <span>Settings</span>
        </a>
      </nav>
    </aside>
  );
}

export default Sidebar;
