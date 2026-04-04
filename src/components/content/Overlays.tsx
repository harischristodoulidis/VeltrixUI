import { useState } from "react";
import Card from "../ui/Card";
import Button from "../ui/Button";
import ModalContent from "./ModalContent";
import Dropdown from "../ui/Dropdown";
import { Download, LogOut, MoreVertical, Settings, User } from "lucide-react";

export default function Overlays() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <section className="mb-12 sm:mb-16">
        <h2 className="text-foreground mb-4 text-xl font-semibold sm:mb-6 sm:text-2xl">
          Overlays
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          <Card>
            <h3 className="text-foreground mb-4 text-lg font-semibold">
              Modal Dialog
            </h3>
            <Button onClick={() => setShowModal(true)}>Open Modal</Button>
          </Card>
          <Card>
            <h3 className="text-foreground mb-4 text-lg font-semibold">
              Dropdown Menu
            </h3>
            <Dropdown
              trigger={
                <Button
                  variant="outline"
                  className="inline-flex items-center justify-center gap-2"
                >
                  Actions <MoreVertical className="ml-1 h-4 w-4" />
                </Button>
              }
              items={[
                { label: "Profile", icon: <User className="h-4 w-4" /> },
                { label: "Settings", icon: <Settings className="h-4 w-4" /> },
                { divider: true },
                { label: "Download", icon: <Download className="h-4 w-4" /> },
                { divider: true },
                { label: "Logout", icon: <LogOut className="h-4 w-4" /> },
              ]}
            />
          </Card>
        </div>
      </section>
      <ModalContent isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
