import classes from "@/components/Meals/meals-grid.module.css";
import MealItem from "./MealItem";

export type MealItemType = {
  id: string;
  slug: string;
  image: File | string;
  title: string;
  summary: string;
  creator: string;
  creator_email: string;
  instructions: string;
};
type MealsProps = {
  meals: MealItemType[];
};

export default function MealsGrid({ meals }: MealsProps) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
