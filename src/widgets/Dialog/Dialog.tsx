import * as Dialog from "@radix-ui/react-dialog";

interface DialogProps {
  trigger: React.ReactNode;
  title?: string;
  description?: string;
  content: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DialogComponent = ({
  trigger,
  title,
  description,
  content,
  isOpen,
  setIsOpen,
}: DialogProps) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-70" />
        <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[450px] p-6 bg-white rounded-md shadow-lg focus:outline-none">
          <Dialog.Title className="font-medium text-indigo-900 font-caveat text-4xl mb-3 text-center">
            {title}
          </Dialog.Title>
          <Dialog.Description className="mt-2 mb-7 text-sm text-gray-500">
            {description}
          </Dialog.Description>
          {content}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
