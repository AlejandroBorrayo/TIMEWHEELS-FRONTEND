import Image from "next/image";
import Link from "next/link";
import { Manrope } from "next/font/google";

import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
  LANDING_LOGO_URL,
  TIME_TREK_LOGO_URL,
  TIME_WHEELS_LOGO_URL,
} from "@/components/landing/constants";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

const ownFleet = [
  {
    title: "3.5 toneladas",
    description:
      "Unidades para distribución local y servicios urgentes, con respuesta ágil en rutas metropolitanas y regionales.",
  },
  {
    title: "Rabón (caja seca)",
    description:
      "Capacidad máxima de 8 toneladas para carga general, ideal para embarques que requieren protección y volumen controlado.",
  },
];

const heavyNetwork = [
  {
    title: "Tortón y tráiler (48′ y 53′)",
    description:
      "Servicio de carga completa (sencillo y full) mediante una red certificada de permisionarios, con cobertura alineada a tus corridas.",
  },
  {
    title: "Supervisión de red",
    description:
      "Coordinación y auditoría de operadores externos bajo estándares de seguridad internos del grupo.",
  },
];

const groupCompanies = [
  {
    name: "Time Forwarding",
    role: "Gestión de fletes internacionales",
    detail: "Marítimo, aéreo y terrestre: visibilidad y coordinación de punta a punta.",
    logoUrl: LANDING_LOGO_URL,
    logoAlt: "Time Forwarding",
    logoWidth: 220,
    logoHeight: 64,
    href: "/" as const,
  },
  {
    name: "Time Wheels",
    role: "Transporte terrestre nacional",
    detail: "Línea de transporte del grupo con equipo propio y red administrada.",
    logoUrl: TIME_WHEELS_LOGO_URL,
    logoAlt: "Time Wheels",
    logoWidth: 200,
    logoHeight: 72,
    href: "/timewheels" as const,
  },
  {
    name: "Time Trek Couriers",
    role: "Paquetería y mensajería",
    detail: "Plataforma de gestión para envíos express y operaciones de última milla.",
    logoUrl: TIME_TREK_LOGO_URL,
    logoAlt: "Time Trek Couriers",
    logoWidth: 200,
    logoHeight: 72,
    href: null,
  },
];

const technicalSpecs = [
  {
    title: "Seguridad",
    body: "Monitoreo de unidades y rastreo satelital para dar visibilidad continua a tu operación.",
  },
  {
    title: "Compliance",
    body: "Emisión de Complemento Carta Porte y cumplimiento con normativas de la SCT.",
  },
  {
    title: "Gestión",
    body: "Punto de contacto único para la coordinación de todas las unidades, propias y de red.",
  },
];

function buildWhatsAppHref(raw: string | undefined): string | null {
  const s = raw?.trim();
  if (!s) return null;
  const digits = s.replace(/\D/g, "");
  return digits.length > 0 ? `https://wa.me/${digits}` : null;
}

type TimeWheelsLandingPageProps = {
  whatsAppPhoneRaw?: string;
};

export default function TimeWheelsLandingPage({
  whatsAppPhoneRaw,
}: TimeWheelsLandingPageProps) {
  const whatsAppHref = buildWhatsAppHref(
    whatsAppPhoneRaw?.trim() ||
      process.env.NEXT_TIME_WHATS_APP?.trim() ||
      process.env.NEXT_PUBLIC_NEXT_TIME_WHATS_APP?.trim(),
  );

  return (
    <div
      className={`${manrope.className} min-h-screen bg-zinc-50 text-zinc-900 antialiased [font-feature-settings:'ss01']`}
    >
      <header className="sticky top-0 z-50 border-b-4 border-brand bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-y-3 px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/timewheels" className="flex shrink-0 items-center">
            <Image
              src={TIME_WHEELS_LOGO_URL}
              alt="Time Wheels"
              width={260}
              height={92}
              className="h-11 w-auto object-contain sm:h-12"
              priority
            />
          </Link>
          <nav className="flex flex-wrap items-center justify-end gap-x-1 gap-y-1 text-[13px] font-semibold tracking-wide text-zinc-600 sm:gap-x-0 sm:text-sm">
            <a href="#operacion" className="px-2 py-1.5 hover:text-brand sm:px-3">
              Operación
            </a>
            <span className="hidden text-zinc-300 sm:inline" aria-hidden>
              /
            </span>
            <a href="#equipo-propio" className="px-2 py-1.5 hover:text-brand sm:px-3">
              Equipo
            </a>
            <span className="hidden text-zinc-300 sm:inline" aria-hidden>
              /
            </span>
            <a href="#carga-pesada" className="px-2 py-1.5 hover:text-brand sm:px-3">
              Carga pesada
            </a>
            <span className="hidden text-zinc-300 sm:inline" aria-hidden>
              /
            </span>
            <a href="#grupo" className="px-2 py-1.5 hover:text-brand sm:px-3">
              Grupo
            </a>
            <span className="hidden text-zinc-300 sm:inline" aria-hidden>
              /
            </span>
            <a href="#especificaciones" className="px-2 py-1.5 hover:text-brand sm:px-3">
              Compliance
            </a>
            <a
              href="#contacto"
              className="ml-1 rounded-full bg-brand px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-brand-hover sm:ml-2 sm:text-[13px]"
            >
              Contacto
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero partido: editorial + panel operativo */}
        <section className="relative overflow-hidden border-b border-zinc-200 lg:grid lg:min-h-[min(640px,85vh)] lg:grid-cols-2">
          <div className="flex flex-col justify-center px-4 py-14 sm:px-8 sm:py-20 lg:py-24 lg:pl-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))]">
            <span className="inline-flex w-fit items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500">
              Time Group · Terrestre nacional
            </span>
            <h1 className="mt-6 max-w-xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
              Transporte que conecta tu cadena en México.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-zinc-600 sm:text-lg">
              Equipo propio para carga media y red administrada para carga pesada, con los mismos
              estándares de seguridad y compliance del grupo.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 rounded-full border-2 border-brand bg-brand px-8 py-3.5 text-sm font-bold text-white transition hover:bg-brand-hover"
              >
                Cotizar transporte
                <span aria-hidden className="text-lg leading-none">
                  →
                </span>
              </a>
              <a
                href="#equipo-propio"
                className="text-sm font-bold text-brand underline decoration-2 underline-offset-4 transition hover:text-brand-hover"
              >
                Ver unidades y red
              </a>
            </div>
          </div>
          <div className="relative flex flex-col justify-center border-t border-white/10 bg-brand px-6 py-14 text-white sm:px-10 lg:border-t-0 lg:border-l lg:py-20">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.12]"
              aria-hidden
              style={{
                backgroundImage:
                  "repeating-linear-gradient(-45deg, #fff 0, #fff 1px, transparent 1px, transparent 12px)",
              }}
            />
            <div className="relative space-y-10">
              <div className="border-l-2 border-white/40 pl-5">
                <p className="font-mono text-3xl font-bold tabular-nums sm:text-4xl">01</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-white/60">
                  Carga media
                </p>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/85">
                  Flota propia para rutas locales, urgentes y caja seca hasta 8 t.
                </p>
              </div>
              <div className="border-l-2 border-white/40 pl-5">
                <p className="font-mono text-3xl font-bold tabular-nums sm:text-4xl">02</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-white/60">
                  Carga pesada
                </p>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/85">
                  Tortón y tráiler 48′ / 53′ vía red certificada de permisionarios.
                </p>
              </div>
              <div className="border-l-2 border-white/40 pl-5">
                <p className="font-mono text-3xl font-bold tabular-nums sm:text-4xl">03</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-white/60">
                  Una sola mesa de control
                </p>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/85">
                  Coordinación unificada de unidades propias y externas auditadas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Operación: franja oscura + texto */}
        <section
          id="operacion"
          className="scroll-mt-20 border-b border-zinc-800 bg-zinc-900 py-16 text-white sm:py-20"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className="max-w-3xl font-mono text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
              Operación integrada
            </p>
            <h2 className="mt-4 max-w-3xl text-2xl font-bold leading-snug sm:text-3xl lg:text-4xl">
              Propios + red certificada, con una sola coordinación.
            </h2>
            <div className="mt-10 grid gap-10 border-t border-zinc-700 pt-10 lg:grid-cols-2 lg:gap-16">
              <p className="text-base leading-relaxed text-zinc-400 sm:text-lg">
                <strong className="font-semibold text-white">Time Wheels</strong> es la línea de
                transporte de <strong className="font-semibold text-white">Time Group</strong>:
                unidades propias para carga media y red administrada de hombres-camión para carga
                pesada.
              </p>
              <p className="text-base leading-relaxed text-zinc-400 sm:text-lg">
                Desde distribución local urgente hasta embarques completos en plataformas de 48′ y
                53′, con supervisión y auditoría de operadores externos bajo los mismos criterios de
                seguridad que el resto del grupo.
              </p>
            </div>
          </div>
        </section>

        {/* Equipo: bento */}
        <section id="equipo-propio" className="scroll-mt-20 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-[0.22em] text-brand">
                  Capacidades y equipo
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Unidades propias</p>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-zinc-600 sm:text-right sm:text-base">
                Flota directa para movimientos ágiles y carga general con especificaciones claras.
              </p>
            </div>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:grid-rows-2 lg:gap-5">
              <li className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm lg:col-span-3 lg:row-span-2 lg:flex lg:flex-col lg:justify-center lg:p-10">
                <span className="text-xs font-bold uppercase tracking-widest text-brand">
                  {ownFleet[0].title}
                </span>
                <p className="mt-4 text-lg font-semibold leading-relaxed text-zinc-800 sm:text-xl">
                  {ownFleet[0].description}
                </p>
              </li>
              <li className="rounded-2xl border border-zinc-200 bg-zinc-100 p-8 lg:col-span-2 lg:row-span-2 lg:flex lg:flex-col lg:justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                  {ownFleet[1].title}
                </span>
                <p className="mt-4 text-sm leading-relaxed text-zinc-700 sm:text-base">
                  {ownFleet[1].description}
                </p>
                <div className="mt-8 hidden h-1 w-12 rounded-full bg-brand lg:block" aria-hidden />
              </li>
            </ul>
          </div>
        </section>

        {/* Carga pesada: timeline */}
        <section
          id="carga-pesada"
          className="scroll-mt-20 border-y border-zinc-200 bg-white py-16 sm:py-24"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-xs font-bold uppercase tracking-[0.22em] text-brand">Carga pesada</h2>
            <p className="mt-2 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
              Gestión de red
            </p>
            <p className="mt-4 max-w-2xl text-zinc-600">
              Acceso a tortón y tráiler con permisionarios auditados y coordinación centralizada.
            </p>
            <ol className="relative mt-12 space-y-0 border-l-2 border-zinc-200 pl-8 sm:pl-10">
              {heavyNetwork.map((item, i) => (
                <li key={item.title} className="relative pb-12 last:pb-0">
                  <span
                    className="absolute -left-[calc(0.5rem+2px)] top-1.5 flex h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-brand sm:-left-[calc(0.625rem+2px)]"
                    aria-hidden
                  />
                  <span className="font-mono text-xs font-bold text-zinc-400">
                    {(i + 1).toString().padStart(2, "0")}
                  </span>
                  <h3 className="mt-1 text-xl font-bold text-zinc-900">{item.title}</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-600 sm:text-base">
                    {item.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Grupo: filas horizontales */}
        <section id="grupo" className="scroll-mt-20 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-xs font-bold uppercase tracking-[0.22em] text-brand">
              Servicios del grupo
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-center text-3xl font-bold tracking-tight sm:text-4xl">
              Tres marcas complementarias
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-600">
              Forwarding internacional, transporte terrestre nacional y paquetería bajo una misma
              visión operativa.
            </p>
            <ul className="mt-12 divide-y divide-zinc-200 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
              {groupCompanies.map((c) => {
                const row = (
                  <div className="flex flex-col gap-6 p-6 transition-colors sm:flex-row sm:items-center sm:gap-10 sm:p-8">
                    <div className="flex h-20 shrink-0 items-center justify-start sm:w-44">
                      <Image
                        src={c.logoUrl}
                        alt={c.logoAlt}
                        width={c.logoWidth}
                        height={c.logoHeight}
                        className="max-h-16 w-auto max-w-[200px] object-contain sm:max-h-[4.5rem]"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-bold text-zinc-900">{c.name}</h3>
                      <p className="mt-0.5 text-xs font-bold uppercase tracking-wider text-brand">
                        {c.role}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:text-[15px]">
                        {c.detail}
                      </p>
                    </div>
                  </div>
                );
                return (
                  <li key={c.name}>
                    {c.href ? (
                      <Link
                        href={c.href}
                        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand"
                      >
                        <div className="hover:bg-zinc-50">{row}</div>
                      </Link>
                    ) : (
                      row
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* Especificaciones: tres columnas con divisores */}
        <section
          id="especificaciones"
          className="scroll-mt-20 border-t border-zinc-200 bg-zinc-100 py-16 sm:py-20"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-xs font-bold uppercase tracking-[0.22em] text-brand">
              Especificaciones técnicas
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Seguridad, compliance y gestión
            </p>
            <ul className="mt-12 grid gap-10 rounded-2xl border border-zinc-200 bg-white px-6 py-10 sm:px-10 lg:grid-cols-3 lg:gap-0 lg:divide-x lg:divide-zinc-200 lg:px-0 lg:py-12">
              {technicalSpecs.map((spec) => (
                <li key={spec.title} className="lg:px-10">
                  <h3 className="text-lg font-bold text-zinc-900">{spec.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:text-[15px]">
                    {spec.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contacto: dos columnas */}
        <section id="contacto" className="scroll-mt-20 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-lg shadow-zinc-900/5 lg:grid lg:grid-cols-5">
              <div className="border-b border-zinc-200 bg-zinc-100 px-8 py-12 lg:col-span-2 lg:border-b-0 lg:border-r">
                <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                  Contacto
                </p>
                <h2 className="mt-3 text-2xl font-bold leading-tight sm:text-3xl">
                  Coordinemos tu siguiente movimiento.
                </h2>
                <ul className="mt-8 space-y-4 text-sm text-zinc-600">
                  <li>
                    <span className="block text-xs font-bold uppercase text-zinc-400">Teléfono</span>
                    <a
                      href={`tel:${CONTACT_PHONE_TEL}`}
                      className="mt-1 inline-block font-semibold text-brand hover:underline"
                    >
                      {CONTACT_PHONE_DISPLAY}
                    </a>
                  </li>
                  <li>
                    <span className="block text-xs font-bold uppercase text-zinc-400">Correo</span>
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="mt-1 inline-block break-all font-semibold text-brand hover:underline"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col justify-center px-8 py-12 lg:col-span-3 lg:px-12 lg:py-14">
                <p className="text-zinc-600">
                  Cuéntanos origen, destino, tipo de unidad y ventanas de carga. Te respondemos con
                  opciones alineadas a tu operación y a la normativa vigente.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                    href={`tel:${CONTACT_PHONE_TEL}`}
                    className="inline-flex items-center justify-center rounded-xl bg-brand px-8 py-3.5 text-sm font-bold text-white transition hover:bg-brand-hover"
                  >
                    Llamar ahora
                  </a>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="inline-flex items-center justify-center rounded-xl border-2 border-zinc-300 px-8 py-3.5 text-sm font-bold text-zinc-800 transition hover:border-zinc-400 hover:bg-zinc-50"
                  >
                    Enviar correo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-800 bg-zinc-950 text-zinc-500">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-12 lg:gap-8 lg:px-8">
          <div className="lg:col-span-5">
            <Image
              src={TIME_WHEELS_LOGO_URL}
              alt="Time Wheels"
              width={280}
              height={96}
              className="h-11 w-auto object-contain sm:h-12"
            />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-zinc-400">
              Transporte terrestre nacional · Equipo propio y red administrada · Parte de Time Group
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-4 lg:col-start-7">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-zinc-600">Grupo</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <Link href="/" className="text-zinc-400 transition hover:text-white">
                    Time Forwarding
                  </Link>
                </li>
                <li>
                  <span className="text-white">Time Wheels</span>
                </li>
                <li>
                  <span className="text-zinc-400">Time Trek Couriers</span>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-zinc-600">Legal</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li className="text-xs leading-relaxed text-zinc-600">
                  © {new Date().getFullYear()} Tempus Wheels S.A. de C.V.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {whatsAppHref ? (
        <a
          href={whatsAppHref}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 z-[100] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition hover:scale-105 hover:bg-[#20bd5a] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#25D366] sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
          aria-label="Contactar por WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-8 w-8 sm:h-9 sm:w-9"
            aria-hidden
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      ) : null}
    </div>
  );
}
