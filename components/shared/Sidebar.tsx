import Link from "next/link"
import type { MenuItem } from "@/app/models/types"

const menuItems: MenuItem[] = [
  { id: 1, title: "Главная", href: "/" },
  { id: 2, title: "Видео", href: "/videos" },
  { id: 3, title: "Подписки", href: "/subscriptions" },
  { id: 4, title: "Профиль", href: "/profile" },
]

export const Sidebar = () => {
  return (
    <aside className="min-h-screen w-60 bg-zinc-900 p-6 text-white">
      <h2 className="mb-6 text-xl font-semibold">Навигация</h2>

      <nav className="flex flex-col gap-2">
        {menuItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="rounded-lg px-4 py-3 text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white"
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
