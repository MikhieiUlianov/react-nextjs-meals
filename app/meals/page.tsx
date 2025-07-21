import Share from "@/app/meals/share/page";
import Link from "next/link";

export default function MealsPage() {
  return (
    <main>
      <h1>Meals page</h1>
      <Link href="/meals/share">
        <Share />
      </Link>
      <Link href="/meals/some">some</Link>{" "}
      <Link href="/meals/some1">some1</Link>
    </main>
  );
}
