import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useSidebar } from "~/lib/states/use-sidebar";
import { cn } from "~/lib/utils/cn";

export const Sidebar = ({ onMobile }: { onMobile: boolean }) => {
  const [isMobile, setIsMobile] = useState(false);
  const isOpen = useSidebar(state => state.open);
  const toggleSidebar = useSidebar(state => state.toggleSidebar);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);



  return (

    <>

      {isOpen && (
        <div className="fixed inset-0 z-[99] bg-black/50 lg:hidden" />
      )}
      <div className={cn("-translate-x-full lg:bg-transparent transition-all lg:translate-x-0 top-0 fixed z-[100] inset-0 lg:top-[65px] left-[max(0px,calc(50%-49rem))] right-auto w-full border-r lg:border-none max-w-[19rem] pb-10 overflow-y-auto", {
        "translate-x-0": isOpen,
        "lg:hidden": false,
        'block lg:hidden': onMobile
      })}>
        <div className="lg:hidden flex items-center justify-center gap-4 py-4 pl-8 pr-6">
          <Link to="/" className="mr-3 flex items-center gap-2 flex-none overflow-hidden">
            <span className="sr-only">Novi Home Page</span>

            <span className="text-xl font-semibold">Novi</span>
          </Link>
          <button type="button" className="flex items-center justify-center w-10 h-10 rounded-md lg:hidden bg-zinc-500/10" onClick={toggleSidebar}>
            <span className="sr-only">Navigation</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={16}
              height={16}
              color={'currentColor'}
              fill={'none'}
            >
              <path
                d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <nav className="lg:text-sm lg:leading-6 relative overflow-y-auto pl-8 pr-6 pt-10">
          <ul>
            <li className="mt-6 lg:mt-8">
              <ul className="space-y-1">
                <li className="pb-3 last:pb-0 pt-4 first:p-0">
                  <p className="text-sm px-0.5 mb-2">Teste</p>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}