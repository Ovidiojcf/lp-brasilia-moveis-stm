"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";

const navigation = [
  { label: "Ambientes", href: "#solucoes" },
  { label: "Projetos", href: "#projetos" },
  { label: "Localização", href: "#localizacao" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-transparent font-sans transition-[background-color,box-shadow,border-color] duration-300 ease-in-out ${
        isScrolled
          ? "border-[rgb(20_17_13/8%)] bg-(--color-cream) shadow-[0_20px_60px_-20px_rgb(20_17_13/18%)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
        <a
          href="#inicio"
          aria-label="Brasília Móveis Planejados - início"
          onClick={closeMenu}
        >
          <Image
            src="/logo-brasilia-imoveis.PNG"
            alt="Brasília Móveis Planejados"
            width={132}
            height={74}
            priority
            className="h-14 w-auto object-contain"
          />
        </a>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Navegação principal"
        >
          {navigation.map((item) => (
            <a
              className="text-sm font-medium text-(--color-ink) transition-colors duration-300 hover:text-(--color-gold) focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--color-gold)"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="#orcamento">Solicitar Orçamento Gratuito</Button>
        </div>

        <button
          type="button"
          className="relative flex h-11 w-11 items-center justify-center rounded-full text-(--color-ink) transition-colors hover:bg-(--color-sand) focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--color-gold) md:hidden"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span
            className={`absolute h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
              isMenuOpen ? "rotate-45" : "-translate-y-2"
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
              isMenuOpen ? "-rotate-45" : "translate-y-2"
            }`}
          />
        </button>
      </div>

      <div
        className={`fixed inset-0 top-20 z-40 bg-(--color-cream) transition-[visibility,opacity] duration-300 md:hidden ${
          isMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <nav
          className="flex h-full flex-col px-6 pb-10 pt-10"
          aria-label="Navegação mobile"
        >
          <div className="flex flex-col gap-7">
            {navigation.map((item) => (
              <a
                className="font-sans text-4xl font-medium text-(--color-ink) transition-colors hover:text-(--color-gold) focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--color-gold)"
                href={item.href}
                key={item.href}
                tabIndex={isMenuOpen ? 0 : -1}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="mt-auto">
            <Button href="#orcamento" className="w-full" onClick={closeMenu}>
              Solicitar Orçamento Gratuito
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
