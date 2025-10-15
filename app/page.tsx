import Image from "next/image";
import Link from "next/link";

const HERO_SCREENSHOT = "/images/4NoAlpha.png";
const DAILY_LOG_SCREENSHOT = "/images/5NoAlpha.png";
const WIDGET_SCREENSHOT = "/images/6NoAlpha.png";

const FEATURE_POINTS = [
  {
    icon: "🍷",
    title: "Log pours in seconds",
    body: "Capture ounces, notes, and photos in one tap. Your mindful journal stays perfectly organized."
  },
  {
    icon: "⏳",
    title: "Pause before overpouring",
    body: "Gentle lockouts invite reflection when you approach your self-set limit—no guilt, just guidance."
  },
  {
    icon: "🎯",
    title: "Celebrate streaks & badges",
    body: "Weekly summaries and badges surface progress so you can toast the wins that really matter."
  }
];

export default function HomePage() {
  return (
    <div className="page">
      <header className="wrapper hero">
        <div>
          <p className="hero__eyebrow">Mindful wine tracking</p>
          <h1 className="hero__title">Enjoy every pour with intention.</h1>
          <p className="hero__subtitle">
            WineMindful helps you notice patterns, pause before overpouring, and keep a beautiful log
            of your tasting notes and wins.
          </p>
          <div className="hero__actions">
            <Link href="https://apps.apple.com" className="button button--primary">
              Download on the App Store
            </Link>
            <a href="#details" className="button button--ghost">
              Explore the app
            </a>
          </div>
        </div>

        <div className="hero__device" aria-hidden="true">
          <div className="hero__screen">
            <Image
              src={HERO_SCREENSHOT}
              alt="WineMindful app overview"
              width={600}
              height={1200}
              priority
            />
          </div>
        </div>
      </header>

      <main>
        <section id="details" className="section section--muted">
          <div className="wrapper">
            <header className="section__header">
              <h2 className="section__title">Built for mindful pours</h2>
              <p className="section__subtitle">
                Designed with reflection-first features so you can savor your favorite wines and still
                feel great the next morning.
              </p>
            </header>

            <div className="feature-grid">
              {FEATURE_POINTS.map((feature) => (
                <article className="feature-card" key={feature.title}>
                  <div className="feature-card__icon" aria-hidden="true">
                    {feature.icon}
                  </div>
                  <h3 className="feature-card__title">{feature.title}</h3>
                  <p className="feature-card__body">{feature.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrapper feature-grid">
            <article className="feature-card">
              <Image
                src={DAILY_LOG_SCREENSHOT}
                alt="Daily log screenshot"
                width={680}
                height={900}
              />
              <h3 className="feature-card__title">Daily log with photo notes</h3>
              <p className="feature-card__body">
                Capture tasting notes, food pairings, and snap a photo of the label. Everything stays in
                one timeline that is easy to revisit.
              </p>
            </article>
            <article className="feature-card">
              <Image
                src={WIDGET_SCREENSHOT}
                alt="Home screen widget screenshot"
                width={680}
                height={900}
              />
              <h3 className="feature-card__title">Widgets & smart reminders</h3>
              <p className="feature-card__body">
                Stay mindful without constant reminders. Widgets show progress at a glance and nightly
                nudges only arrive if you haven&rsquo;t logged yet.
              </p>
            </article>
          </div>
        </section>

        <section className="section section--muted">
          <div className="wrapper badge-grid">
            <div className="badge-card">Track mindful streaks</div>
            <div className="badge-card">Celebrate dry days</div>
            <div className="badge-card">Share tasting notes</div>
            <div className="badge-card">Stay within your goals</div>
          </div>
        </section>

        <section className="section">
          <div className="wrapper contact-card">
            <h2>Need a hand?</h2>
            <p>
              Have feedback, questions, or a story to share about your mindful journey? We read every
              note.
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:winemindful@gmail.com">winemindful@gmail.com</a>
            </p>
          </div>
        </section>

        <section className="cta">
          <div className="wrapper">
            <div className="cta__card">
              <div>
                <h2 className="cta__title">Pour with confidence.</h2>
                <p className="cta__body">
                  Download WineMindful and turn every glass into a mindful ritual you can feel great
                  about tomorrow.
                </p>
              </div>
              <div className="cta__actions">
                <Link href="https://apps.apple.com" className="button button--primary">
                  Get WineMindful
                </Link>
                <a href="mailto:winemindful@gmail.com" className="button button--ghost">
                  Contact support
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrapper footer__grid">
          <div>
            <span className="footer__brand">WineMindful</span>
            <p className="footer__meta">
              Mindful wine logging app for iPhone. Copyright &copy;{" "}
              {new Date().getFullYear()} WineMindful.
            </p>
          </div>
          <nav className="footer__links" aria-label="Footer">
            <Link href="#details" className="footer__link">
              Features
            </Link>
            <Link href="mailto:winemindful@gmail.com" className="footer__link">
              winemindful@gmail.com
            </Link>
            <Link href="https://apps.apple.com" className="footer__link">
              Download
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
