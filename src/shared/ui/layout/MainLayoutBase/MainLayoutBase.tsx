import { SidebarSlot } from "./SidebarSlot";

interface Props {
  children: React.ReactNode;
  sidebarSlot?: React.ReactNode;
}

export const MainLayoutBase = ({ children, sidebarSlot }: Props) => {
  return (
    <>
      {sidebarSlot && <SidebarSlot>{sidebarSlot}</SidebarSlot>}
      <div className="p-[2rem] md:pl-[17rem] lg:pl-[22rem]">{children}</div>
    </>
  );
};
