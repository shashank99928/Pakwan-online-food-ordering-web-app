import classes from "./AvailableMeals.module.css";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: " Palak Paneer",
    description: "Spinach and veggies",
    price: 22.29
  },
  {
    id: "m2",
    name: "Butter Paneer",
    description: "Butter  and Paneer",
    price: 22.29
  },
  {
    id: "m3",
    name: "Alu Panner",
    description: "Alu, Paneer and veggies",
    price: 22.29
  },
  {
    id: "m4",
    name: "Thali",
    description: "Complete meal",
    price: 22.29
  }
];

const AvailableMeals = () => {
  const mealList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;