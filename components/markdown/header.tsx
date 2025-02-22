export const Header = ({ title, description, category, buttons }: Readonly<{ title: string; description: string; category: string; buttons?: { label: string; href: string; }[] }>) => {
  return (
    <header className="relative">
      <div>
        <p className="leading-6 sm:text-sm">
          {category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
        </p>
        <div className="flex items-center">
          <h1 className="mt-2 sm:text-4xl/10 text-2xl/7 font-semibold tracking-[-0.01rem]">
            {title}
          </h1>
        </div>
      </div>
      <p className="leading-6 sm:text-base mt-2">{description}</p>
    </header>
  )
}