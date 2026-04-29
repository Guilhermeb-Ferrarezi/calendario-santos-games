import { useState } from "react";
import {
  ArrowRightIcon,
  CalendarDaysIcon,
  MapPinIcon,
  SearchIcon,
  TrophyIcon,
} from "lucide-react";

import { AppProviders } from "@/components/shared/app-providers";
import { SiteShell } from "@/components/shared/site-shell";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";


type Championship = {
  title: string;
  date: string;
  game: string;
  location: string;
  category: string;
  image?: string;
  imageAlt?: string;
  href: string;
};

const championships: Championship[] = [
  {
    title: "VCT Ribeirão - Free Elo",
    date: "17/05",
    game: "Valorant",
    location: "Ribeirão Preto",
    category: "Free Elo",
    image: "/vct-ribeirao_sga.avif",
    imageAlt: "Arena SGA com clima de campeonato Valorant",
    href: `${siteConfig.url}/vct-ribeirao`,
  },
  {
    title: "VCT Ribeirão - Série C",
    date: "31/05",
    game: "Valorant",
    location: "Ribeirão Preto",
    category: "Série C",
    image: "/vct-ribeirao_sga.avif",
    imageAlt: "Arena SGA com clima de campeonato Valorant",
    href: `${siteConfig.url}/vct-ribeirao/serie-c`,
  },
  {
    title: "VCT Ribeirão - Série B",
    date: "07/06",
    game: "Valorant",
    location: "Ribeirão Preto",
    category: "Série B",
    image: "/vct-ribeirao_sga.avif",
    imageAlt: "Arena SGA com clima de campeonato Valorant",
    href: `${siteConfig.url}/vct-ribeirao/serie-b`,
  },
  {
    title: "CS Maior do Interior - Ribeirão Preto",
    date: "14/06",
    game: "Counter-Strike",
    location: "Ribeirão Preto",
    category: "A definir",
    image: "/cs-prime_sga.avif",
    imageAlt: "Arena SGA com clima de campeonato Counter-Strike",
    href: `${siteConfig.url}/campeonatos/cs-maior-do-interior-ribeirao-preto`,
  },
  {
    title: "SGA League Ribeirão - Campeonato de LOL",
    date: "12/07",
    game: "League of Legends",
    location: "Ribeirão Preto",
    category: "A definir",
    image: undefined,
    href: `${siteConfig.url}/campeonatos/sga-league-ribeirao-campeonato-de-lol`,
  },
];

const games = [...new Set(championships.map((c) => c.game))];

const stats = [
  { label: "Campeonatos", value: "5" },
  { label: "Jogos", value: "3" },
  { label: "Times", value: "32+" },
  { label: "Temporada", value: "Ativa" },
];

function ChampionshipCard({ championship }: { championship: Championship }) {
  return (
    <Card className="group relative flex flex-col overflow-hidden border-white/10 bg-[#0d0d14]/90 shadow-[0_24px_80px_-36px_rgba(255,43,43,0.35)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_32px_80px_-28px_rgba(255,43,43,0.55)]">
      <div className="relative aspect-[16/9] overflow-hidden">
        {championship.image ? (
          <img
            src={championship.image}
            alt={championship.imageAlt}
            className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,43,43,0.28),transparent_60%),linear-gradient(180deg,rgba(8,8,12,0.85),rgba(8,8,12,0.98))]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d14] via-[#0d0d14]/40 to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,rgba(255,255,255,0.06)_50%,transparent_100%)] opacity-0 transition group-hover:opacity-100" />

        <Badge
          variant="outline"
          className="absolute left-4 top-4 rounded-full border-white/15 bg-black/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70 backdrop-blur-sm"
        >
          {championship.date}
        </Badge>

        <Badge className="absolute right-4 top-4 rounded-full bg-primary/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-white backdrop-blur-sm">
          {championship.game}
        </Badge>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div>
          <CardTitle className="text-xl font-bold leading-snug text-white">
            {championship.title}
          </CardTitle>
          <CardDescription className="mt-1.5 text-sm text-white/55">
            Competição presencial — vagas limitadas
          </CardDescription>
        </div>

        <div className="mt-auto grid grid-cols-2 gap-2">
          <div className="flex items-center gap-2 rounded-xl border border-white/8 bg-white/4 px-3 py-2.5">
            <CalendarDaysIcon className="size-3.5 shrink-0 text-primary" />
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">Data</p>
              <p className="text-xs font-semibold text-white">{championship.date}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-white/8 bg-white/4 px-3 py-2.5">
            <MapPinIcon className="size-3.5 shrink-0 text-primary" />
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">Local</p>
              <p className="text-xs font-semibold text-white">{championship.location}</p>
            </div>
          </div>

          <div className="col-span-2 flex items-center gap-2 rounded-xl border border-white/8 bg-white/4 px-3 py-2.5">
            <TrophyIcon className="size-3.5 shrink-0 text-primary" />
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">Categoria</p>
              <p className="text-xs font-semibold text-white">{championship.category}</p>
            </div>
          </div>
        </div>
      </div>

      <CardFooter className="border-t border-white/8 bg-black/20 px-5 py-4">
        <a
          href={championship.href}
          aria-label={`Ver detalhes do ${championship.title}`}
          rel="noreferrer"
          className={cn(
            buttonVariants({ size: "lg" }),
            "w-full rounded-full bg-primary text-sm font-bold uppercase tracking-wide text-white hover:bg-primary/85",
          )}
        >
          Garantir minha vaga
          <ArrowRightIcon data-icon="inline-end" />
        </a>
      </CardFooter>
    </Card>
  );
}

export function App() {
  const [query, setQuery] = useState("");

  const filtered = championships.filter((c) => {
    const q = query.toLowerCase();
    return (
      c.title.toLowerCase().includes(q) ||
      c.game.toLowerCase().includes(q) ||
      c.category.toLowerCase().includes(q)
    );
  });

  return (
    <AppProviders>
      <SiteShell>
        <main className="flex flex-1 flex-col pb-16 pt-10 sm:pt-14">

          {/* Hero */}
          <section className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex flex-col gap-8">
              <a
                href={siteConfig.url}
                aria-label="Ir para o site da SGA"
                className="flex w-fit items-center gap-3 transition"
              >
                <div className="flex size-11 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-[0_0_32px_-8px_rgba(255,43,43,0.6)] transition hover:border-white/20">
                  <img
                    src="/sga-logo.png"
                    alt="Logo da SGA"
                    className="size-full object-contain p-2"
                    loading="eager"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
                    Santos Games Arena
                  </span>
                  <span className="text-xs font-medium text-white/65">
                    Ribeirão Preto
                  </span>
                </div>
              </a>

              <div className="flex flex-col gap-4">
                <h1 className="max-w-2xl text-5xl font-extrabold uppercase leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
                  A arena dos{" "}
                  <span className="text-primary">campeões</span>
                  <br />
                  te espera.
                </h1>
                <p className="max-w-xl text-base leading-7 text-white/60 sm:text-lg">
                  Campeonatos presenciais de {games.join(", ")}.
                  Escolha sua batalha e garanta sua vaga.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid shrink-0 grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/8 lg:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center justify-center gap-1 bg-[#0a0a0f]/90 px-6 py-5 backdrop-blur"
                >
                  <span className="text-2xl font-extrabold text-white">{stat.value}</span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Divider + Busca */}
          <div className="my-12 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-white/8" />
              <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-white/30">
                Calendário {new Date().getFullYear()}
              </span>
              <div className="h-px flex-1 bg-white/8" />
            </div>

            <div className="relative mx-auto w-full max-w-md">
              <SearchIcon className="pointer-events-none absolute left-4 top-1/2 z-10 size-4 -translate-y-1/2 text-white/35" />
              <input
                type="text"
                placeholder="Buscar campeonato ou jogo..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full rounded-full border border-white/10 bg-white/5 py-3 pl-11 pr-5 text-sm text-white placeholder-white/35 backdrop-blur-sm outline-none transition focus:border-primary/60 focus:bg-white/8 focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          {/* Cards */}
          <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.length > 0 ? (
              filtered.map((championship) => (
                <ChampionshipCard
                  key={championship.href}
                  championship={championship}
                />
              ))
            ) : (
              <p className="col-span-full py-16 text-center text-sm text-white/35">
                Nenhum campeonato encontrado para "{query}".
              </p>
            )}
          </section>

          {/* CTA final */}
          <div className="mt-16 flex flex-col items-center gap-5 rounded-3xl border border-white/8 bg-[radial-gradient(ellipse_at_top,rgba(255,43,43,0.14),transparent_60%),#0d0d14] px-6 py-14 text-center">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-primary">
              Santos Games Arena
            </span>
            <h2 className="text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl">
              Pronto pra <span className="text-primary">jogar?</span>
            </h2>
            <p className="max-w-md text-base text-white/55">
              Fale com a gente no WhatsApp e tire todas as suas dúvidas sobre inscrições e campeonatos.
            </p>
            <a
              href="https://wa.me/5516993443348"
              rel="noreferrer"
              target="_blank"
              className={cn(
                buttonVariants({ size: "lg" }),
                "mt-2 rounded-full bg-primary px-8 text-sm font-bold uppercase tracking-wide text-white hover:bg-primary/85",
              )}
            >
              Falar no WhatsApp
            </a>
          </div>

        </main>

        <footer className="border-t border-white/8 py-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <a
              href={siteConfig.url}
              aria-label="Ir para o site da SGA"
              className="flex items-center gap-3 opacity-70 transition hover:opacity-100"
            >
              <img src="/sga-logo.png" alt="Logo da SGA" className="size-7 object-contain" />
              <span className="text-sm font-semibold text-white">Santos Games Arena</span>
            </a>

            <p className="text-xs text-white/30">
              © {new Date().getFullYear()} SGA — Ribeirão Preto. Todos os direitos reservados.
            </p>

            <a
              href="https://wa.me/5516993443348"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-medium text-white/45 transition hover:text-white"
            >
              WhatsApp
            </a>
          </div>
        </footer>

      </SiteShell>
    </AppProviders>
  );
}
