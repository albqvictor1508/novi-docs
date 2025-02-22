export const Header = ({ title, description, category, buttons }: Readonly<{ title: string; description: string; category: string; buttons?: { label: string; href: string; }[] }>) => {
  return (
    <header className="relative">
      <div>
        <p>
          {category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
        </p>
        <div className="flex items-center">
          <h1 className="mt-2 sm:text-4xl/10">
            {title}
          </h1>
        </div>
      </div>
    </header>
  )
}