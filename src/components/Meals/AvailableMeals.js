import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'non-vej meal',
    description: 'Finest fish and veggies',
    price: 200.00,
  },
  {
    id: 'm2',
    name: 'Grill Sandwish',
    description: 'extra cheese ',
    price: 70.00,
  },
  {
    id: 'm3',
    name: 'cheese Burger',
    description: ' raw, meaty,mayonies',
    price: 60.99,
  },
  {
    id: 'm4',
    name: 'Piza',
    description: 'With extra cheese',
    price: 500.00,
  },
  {
    id: 'm5',
    name: 'Chiken Biryani',
    description: 'Served With Delicious Gravy',
    price: 200.00,
  },

];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
