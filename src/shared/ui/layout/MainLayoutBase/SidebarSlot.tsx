export const SidebarSlot = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="fixed inset-y-0 left-0 border-r w-[15rem] lg:w-[20rem] border-slate-700 -translate-x-full md:translate-x-0">
      {children}
    </div>
  );
};
