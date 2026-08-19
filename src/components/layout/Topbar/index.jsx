import { Bell, Search, UserCircle } from "lucide-react";

function Topbar() {
  return (
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-white/[0.06] bg-[#081425]/95 px-5 backdrop-blur lg:px-6">
      <div className="flex w-full max-w-xl items-center gap-3 rounded bg-[#1f2a3c] px-3 py-2 text-[#908fa0]">
        <Search size={16} />
        <input
          className="w-full bg-transparent text-sm text-[#d8e3fb] outline-none placeholder:text-[#908fa0]"
          placeholder="Search users, logs, or documentation..."
          type="search"
        />
      </div>
      <div className="ml-6 flex items-center gap-5">
        <button
          className="text-[#c7c4d7] hover:text-[#c0c1ff]"
          title="Thông báo"
          type="button"
        >
          <Bell size={17} />
        </button>
        <div className="hidden text-right sm:block">
          <p className="text-xs font-semibold text-[#d8e3fb]">Admin Root</p>
          <p className="text-[10px] uppercase tracking-widest text-[#908fa0]">
            Developer
          </p>
        </div>
        <div className="flex size-7 items-center justify-center rounded-full bg-[#c0c1ff] text-[#1000a9]">
          <UserCircle size={17} />
        </div>
      </div>
    </header>
  );
}

export default Topbar;
