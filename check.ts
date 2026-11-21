import { CALCULATORS } from "./src/data/calculators";
import { STATE_CALCULATORS } from "./src/data/stateCalculators";

STATE_CALCULATORS.forEach(calc => {
  const parent = CALCULATORS.find(c => c.id === calc.id);
  const categorySlug1 = parent ? parent.href.split('/')[1] : 'other-calculators';
  const categorySlug2 = calc.category.toLowerCase();
  
  if (categorySlug1 !== categorySlug2) {
    console.log(`Mismatch for ${calc.id}: ${categorySlug1} vs ${categorySlug2}`);
  }
});
