import { CalendarDays, Mail, Save, UserRound, X } from "lucide-react";

function ModalShell({ title, eyebrow, children, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#040e1f]/80 p-4 backdrop-blur-sm">
      <div className="w-full max-w-xl overflow-hidden rounded-lg border border-white/10 bg-[#1f2a3c] shadow-2xl">
        <div className="flex items-start justify-between border-b border-white/[0.06] bg-[#2a3548]/60 px-5 py-4">
          <div>
            <p className="text-sm font-semibold text-[#d8e3fb]">{title}</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-[#908fa0]">
              {eyebrow}
            </p>
          </div>
          <button
            aria-label="Đóng modal"
            className="text-[#c7c4d7] hover:text-[#d8e3fb]"
            onClick={onClose}
            type="button"
          >
            <X size={19} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

function Info({ label, value, icon: Icon, wide }) {
  return (
    <div className={wide ? "sm:col-span-2" : ""}>
      <p className="flex items-center gap-2 text-[11px] text-[#908fa0]">
        <Icon size={13} /> {label}
      </p>
      <div className="mt-2 bg-[#0f1b2d] px-3 py-3 text-sm text-[#d8e3fb]">
        {value}
      </div>
    </div>
  );
}

function Field({ label, value, icon: Icon }) {
  return (
    <label className="block text-xs text-[#c7c4d7]">
      {label} <span className="text-[#ffb4ab]">*</span>
      <div className="mt-2 flex items-center gap-2 rounded border border-white/10 bg-[#2a3548] px-3 py-2.5">
        <Icon size={15} className="text-[#908fa0]" />
        <input
          className="w-full bg-transparent text-sm text-[#d8e3fb] outline-none"
          defaultValue={value}
        />
      </div>
    </label>
  );
}

function UserModal({ mode, user, onClose }) {
  if (!user) return null;
  if (mode === "detail")
    return (
      <ModalShell
        eyebrow="Hồ sơ cá nhân"
        onClose={onClose}
        title="Chi tiết người dùng"
      >
        <div className="grid gap-5 p-5 sm:grid-cols-[150px_1fr]">
          <div className="rounded bg-[#152031] p-4 text-center">
            <div className="mx-auto flex size-16 items-center justify-center rounded-lg bg-[#c0c1ff]/10 text-3xl font-semibold text-[#c0c1ff]">
              {user.initial}
            </div>
            <p className="mt-3 text-sm font-semibold">{user.name}</p>
            <p className="mt-1 font-mono text-[10px] text-[#908fa0]">
              {user.id}
            </p>
          </div>
          <div className="rounded bg-[#152031] p-4">
            <h3 className="flex items-center gap-2 text-sm font-semibold text-[#d8e3fb]">
              <UserRound size={16} className="text-[#c0c1ff]" /> Thông tin cá
              nhân
            </h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <Info label="HỌ VÀ TÊN" value={user.name} icon={UserRound} />
              <Info label="TUỔI" value={user.age} icon={CalendarDays} />
              <Info label="EMAIL LIÊN HỆ" value={user.email} icon={Mail} wide />
            </div>
          </div>
        </div>
      </ModalShell>
    );
  return (
    <ModalShell
      eyebrow="Cập nhật thông tin tài khoản"
      onClose={onClose}
      title="Chỉnh sửa người dùng"
    >
      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between rounded bg-[#152031] px-3 py-3 text-xs text-[#c7c4d7]">
          <span>ID NGƯỜI DÙNG</span>
          <span className="font-mono text-[#d8e3fb]">{user.id}</span>
        </div>
        <Field label="Họ tên" value={user.name} icon={UserRound} />
        <Field label="Email" value={user.email} icon={Mail} />
        <Field label="Tuổi" value={user.age} icon={CalendarDays} />
        <div className="flex justify-end gap-2 border-t border-white/[0.06] pt-5">
          <button
            className="rounded border border-white/10 px-4 py-2 text-sm text-[#c7c4d7] hover:bg-[#152031]"
            onClick={onClose}
            type="button"
          >
            Hủy
          </button>
          <button
            className="flex items-center gap-2 rounded bg-[#c0c1ff] px-4 py-2 text-sm font-semibold text-[#1000a9] hover:brightness-110"
            type="button"
          >
            <Save size={15} /> Cập nhật thay đổi
          </button>
        </div>
      </div>
    </ModalShell>
  );
}

export default UserModal;
