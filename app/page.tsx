import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { button as buttonStyles } from "@nextui-org/theme";
import { title, subtitle } from "@/components/primitives";
import Image from "next/image";
import "@/styles/global.css"; // Import global CSS file


export default function Home() {
	return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Make&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>Your&nbsp;</h1>
        <br />
        <h1 className={title()}>Home Beautiful 🏠</h1>
        <h2 className={subtitle({ class: "mt-4" })}>Elegant & Lovely</h2>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          href={`https://api.whatsapp.com/send/?phone=+918529594634&text=Hello%2C+I%27m+interested+in+your+home+services.&type=phone_number&app_absent=0
`}
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
        >
          Let&apos;s&apos; Connect Over WhatsApp
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={"https://www.instagram.com/in.design27/"}
        >
          Instagram
        </Link>
      </div>

      <div className="mt-8">
        <Snippet hideSymbol hideCopyButton variant="flat">
          <span>Let&apos;s&apos; Redesign Your House 🚀</span>
        </Snippet>
      </div>
      <Image
        src="/indesign.jpg" // Path to your image
        alt="Image of Designs"
        width={500} // Desired width
        height={300} // Desired height
      />
    </section>
  );
}
