import Link from "next/link";
import Image from "next/image";

import classes from "./meal-item.module.css";
import { MealItemType } from "./MealsGrid";

type MealItemProps = MealItemType;

export default function MealItem({
  title,
  slug,
  image,
  summary,
  creator,
}: MealItemProps) {
  //-special "fill" prop needs to "Image" comp. because when we sre using this comp. it needs to know width and height.
  // next is able to define it from inmorted local images, but it is not able to define it from dynamic images.
  // simply because the info is not availible in build time as it is the case for all imported images, but only in run time.
  // so with this prop it fills the availible space of it's parent component.
  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}
