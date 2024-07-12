import Link from "next/link";

const navItems = [
  { href: "/dashboard/settings", label: "Site Settings" },
  { href: "/dashboard/settings/roles-and-permission", label: "User Roles and Permissions" },
  { href: "/dashboard/settings/payment-settings", label: "Payment Settings" },
  { href: "/dashboard/settings/notification-settings", label: "Notification Settings" },
  { href: "/dashboard/settings/language-settings", label: "Language Settings" },
  { href: "/dashboard/settings/api-keys", label: "API Keys" },
  { href: "/dashboard/settings/advanced-settings", label: "Advanced Settings" },
];

export default function SettingsLayout({ children }) {
  return (
    <>
      <div className="flex items-center gap-4 my-10 ml-5">
        <h1 className="fixed text-3xl font-semibold tracking-tight sm:grow-0">
          Settings
        </h1>
      </div>
      <div className="grid my-10 w-full md:grid-cols-[220px_1fr] lg:grid-cols-[248px_1fr] h-screen">
        <div className="flex flex-1 h-full">
          <div className="fixed flex h-full flex-1   rounded-lg flex-col gap-2">
            <div className="flex-1 mt-6">
              <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-1 rounded-lg shadow-sm h-full">
          {children}
        </div>
      </div>
    </>
  );
}
