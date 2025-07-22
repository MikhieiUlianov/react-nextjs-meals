import classes from "@/app/meals/[mealSlug]/page.module.css";
import { getMeal } from "@/lib/meals";
import Image from "next/image";

type Props = {
  params: {
    mealSlug: string;
  };
};

export default function MealsMealPage({ params }: Props) {
  const meal = getMeal(params.mealSlug);

  if (meal.instructions) {
    meal.instructions = meal.instructions.replace(/\n/g, "<br/>");
  }
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={meal.summary}></p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={
            meal.instructions ? { __html: meal.instructions } : undefined
          }
        ></p>
      </main>
    </>
  );
}
