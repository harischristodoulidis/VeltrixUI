import Button from "../ui/Button";
import Input from "../ui/Input";
import Modal from "../ui/Modal";

interface ModalContentProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalContent({ isOpen, onClose }: ModalContentProps) {
  const footer = (
    <>
      <Button variant="outline" onClick={onClose}>
        Cancel
      </Button>
      <Button variant="primary" onClick={onClose}>
        Confirm
      </Button>
    </>
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Example Modal"
      size="md"
      footer={footer}
    >
      <div className="space-y-4">
        <p className="text-foreground">
          This is an example modal dialog. It can contain any content including
          forms, images, or other components.
        </p>
        <Input id="modalInput" label="Name" placeholder="Enter your name" />
        <Input
          id="modalTextArea"
          label="Message"
          as="textarea"
          placeholder="Enter your message"
        />
      </div>
    </Modal>
  );
}
