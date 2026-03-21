import { useState } from "react";
import type Tab from "../../interfaces/Tab";

export interface TabsProps {
  tabs: Tab[];
  defaultValue?: string;
  onChange?: (value: string) => void;
}

export default function Tabs({ tabs, defaultValue, onChange }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue ?? tabs[0]?.value);

  const activeTabContent = tabs.find((tab) => tab.value === activeTab)?.content;

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    onChange?.(value);
  };

  return (
    <div className="w-full">
      <div className="border-border border-b">
        <div className="flex min-w-max gap-1 sm:min-w-0">
          {tabs.map((tab) => {
            return (
              <button
                key={tab.label}
                onClick={() => !tab.disabled && handleTabChange(tab.value)}
                disabled={tab.disabled}
                className={`-mb-px border-b-2 px-3 py-2 text-xs font-medium whitespace-nowrap transition-all duration-200 sm:px-4 sm:text-sm ${
                  activeTab === tab.value
                    ? "border-primary text-primary"
                    : "text-muted-foreground hover:text-foreground hover:border-muted border-transparent"
                } ${tab.disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"} `}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
      <div className="pt-4">{activeTabContent}</div>
    </div>
  );
}
