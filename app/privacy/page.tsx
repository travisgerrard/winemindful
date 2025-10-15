import Link from "next/link";

export const metadata = {
  title: "Privacy Policy • WineMindful"
} as const;

export default function PrivacyPolicyPage() {
  return (
    <main className="page" style={{ background: "#fff" }}>
      <div className="wrapper" style={{ maxWidth: "820px", padding: "4rem 1.5rem" }}>
        <Link href="/" className="button button--ghost" style={{ marginBottom: "1.5rem" }}>
          ← Back to WineMindful
        </Link>
        <header style={{ marginBottom: "2.5rem" }}>
          <p className="hero__eyebrow" style={{ color: "var(--color-accent)" }}>
            WineMindful Privacy Policy
          </p>
          <h1 className="hero__title" style={{ fontSize: "2.4rem" }}>
            Mindful about your data, too.
          </h1>
          <p className="hero__subtitle" style={{ maxWidth: "640px" }}>
            WineMindful keeps your pouring history and personal notes private. This policy explains
            what we collect, how we use it, and how you can reach us with questions.
          </p>
        </header>

        <article className="contact-card" style={{ gap: "1.5rem" }}>
          <section>
            <h2>Summary</h2>
            <p>
              WineMindful stores the data you log (ounces, tasting notes, photos, reminder settings, and
              badge progress) locally on your devices and, if enabled, in your private iCloud storage via
              Apple&apos;s CloudKit/App Group container. We never sell your data or use it for advertising.
            </p>
          </section>

          <section>
            <h2>Information We Collect</h2>
            <ul>
              <li>
                <strong>Account data:</strong> WineMindful does not create its own account system. Apple
                manages your identity when you use iCloud sync.
              </li>
              <li>
                <strong>Usage data you log:</strong> Drink entries, notes, photos, reminder schedules, and
                badge unlocks that you choose to record in the app.
              </li>
              <li>
                <strong>Support messages:</strong> If you email us at winemindful@gmail.com, we retain the
                message solely for troubleshooting and follow-up.
              </li>
            </ul>
          </section>

          <section>
            <h2>How Your Data Is Stored</h2>
            <p>
              By default, all information lives securely on your device, protected by iOS. If you enable
              iCloud syncing, Apple stores encrypted copies in your personal iCloud App Group container so
              your iPhone and widgets stay in sync.
            </p>
          </section>

          <section>
            <h2>Third-Party Services</h2>
            <ul>
              <li>
                <strong>Apple iCloud &amp; CloudKit:</strong> optional sync and backup for entries/settings.
              </li>
              <li>
                <strong>Apple Push Notifications:</strong> the app schedules local reminder notifications on
                your device; no external analytics or ad SDKs are used.
              </li>
            </ul>
          </section>

          <section>
            <h2>Your Choices</h2>
            <ul>
              <li>
                Delete entries any time within the app. Removing the app also deletes locally stored data.
              </li>
              <li>
                Disable iCloud syncing in iOS Settings &gt; Apple ID &gt; iCloud &gt; WineMindful if you prefer to
                keep data solely on-device.
              </li>
              <li>
                Revoke notifications in iOS Settings if you no longer want reminders.
              </li>
            </ul>
          </section>

          <section>
            <h2>Children&apos;s Privacy</h2>
            <p>
              WineMindful is intended for adults 21+ in regions where that is the legal drinking age. We do
              not knowingly collect personal data from children.
            </p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>
              Questions or data requests? Email <a href="mailto:winemindful@gmail.com">winemindful@gmail.com</a>.
              We aim to reply within two business days.
            </p>
          </section>

          <section>
            <h2>Updates</h2>
            <p>
              We may update this policy as the app evolves. Changes will appear on this page with an
              updated revision date.
            </p>
            <p>
              <em>Last updated: October 2025</em>
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
