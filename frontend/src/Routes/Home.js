import React from 'react';
import { useState } from "react";
import { FcNext, FcPrevious } from 'react-icons/fc';
const FoodOptions = ["Lunch", "Dinner", "Breakfast", "Snacks", "Dessert", "Brunch", "Drinks", "All"];
const optionsPerPage = 2;


const menuItems = [
    {
      calories: 500,
      item_name: "grilled_chicken_salad",
      description: "A healthy and delicious salad with grilled chicken breast.",
      ingredients: [
        "2 boneless, skinless chicken breasts",
        "Mixed greens (lettuce, spinach, arugula, etc.)",
        "Cherry tomatoes",
        "Cucumber",
        "Red onion",
        "Feta cheese",
        "Olive oil",
        "Balsamic vinegar",
        "Salt and pepper to taste"
      ],
      cooking_instructions: [
        "Season the chicken breasts with salt and pepper.",
        "Preheat a grill or grill pan over medium-high heat.",
        "Grill the chicken for 6-7 minutes on each side or until cooked through.",
        "Let the chicken rest for a few minutes, then slice it into thin strips.",
        "In a large bowl, combine the mixed greens, cherry tomatoes, cucumber, red onion, and feta cheese.",
        "Drizzle with olive oil and balsamic vinegar and toss to coat.",
        "Add the grilled chicken on top of the salad.",
        "Serve and enjoy!"
      ],
      nutrition_information: {
        protein: "30g",
        carbohydrates: "10g",
        fat: "12g",
        fiber: "5g"
      },
      image_url: ""
    },
    // Add more items here
  ];
  
  // You can now use the 'menuItems' array with the defined interface.
  

const jsonData = [
    {
      "calories": 500,
      "item_name": "Grilled Chicken Salad",
      "description": "A healthy and delicious salad with grilled chicken breast.",
      "ingredients": [
        "2 boneless, skinless chicken breasts",
        "Mixed greens (lettuce, spinach, arugula, etc.)",
        "Cherry tomatoes",
        "Cucumber",
        "Red onion",
        "Feta cheese",
        "Olive oil",
        "Balsamic vinegar",
        "Salt and pepper to taste"
      ],
      "cooking_instructions": [
        "Season the chicken breasts with salt and pepper.",
        "Preheat a grill or grill pan over medium-high heat.",
        "Grill the chicken for 6-7 minutes on each side or until cooked through.",
        "Let the chicken rest for a few minutes, then slice it into thin strips.",
        "In a large bowl, combine the mixed greens, cherry tomatoes, cucumber, red onion, and feta cheese.",
        "Drizzle with olive oil and balsamic vinegar and toss to coat.",
        "Add the grilled chicken on top of the salad.",
        "Serve and enjoy!"
      ],
      "nutrition_information": {
        "protein": "30g",
        "carbohydrates": "10g",
        "fat": "12g",
        "fiber": "5g"
      },
      "image_url": "https://example.com/grilled_chicken_salad.jpg",
      "category": "Lunch"
    },
    {
      "calories": 600,
      "item_name": "Pasta with Tomato Sauce",
      "description": "Classic pasta dish with a flavorful tomato sauce.",
      "ingredients": [
        "8 oz pasta",
        "2 cups tomato sauce",
        "1/2 cup grated Parmesan cheese",
        "1/4 cup fresh basil leaves",
        "2 cloves garlic",
        "Olive oil",
        "Salt and pepper to taste"
      ],
      "cooking_instructions": [
        "Cook the pasta according to package instructions and drain.",
        "In a saucepan, heat olive oil and sauté garlic until fragrant.",
        "Add tomato sauce, salt, and pepper. Simmer for 10 minutes.",
        "Toss cooked pasta in the sauce and garnish with Parmesan cheese and basil leaves.",
        "Serve hot."
      ],
      "nutrition_information": {
        "protein": "15g",
        "carbohydrates": "80g",
        "fat": "10g",
        "fiber": "5g"
      },
      "image_url": "https://example.com/pasta_with_tomato_sauce.jpg",
      "category": "Dinner"
    },
    {
      "calories": 400,
      "item_name": "Oatmeal with Berries",
      "description": "A wholesome breakfast with oatmeal and fresh berries.",
      "ingredients": [
        "1 cup rolled oats",
        "2 cups milk",
        "1 cup mixed berries (strawberries, blueberries, raspberries)",
        "Honey",
        "Chopped nuts (optional)"
      ],
      "cooking_instructions": [
        "In a saucepan, combine oats and milk. Cook over medium heat, stirring until thickened.",
        "Serve hot, topped with mixed berries, a drizzle of honey, and chopped nuts if desired."
      ],
      "nutrition_information": {
        "protein": "10g",
        "carbohydrates": "60g",
        "fat": "5g",
        "fiber": "10g"
      },
      "image_url": "https://example.com/oatmeal_with_berries.jpg",
      "category": "Breakfast"
    },
    {
      "calories": 700,
      "item_name": "Veggie Stir-Fry",
      "description": "A colorful and nutritious vegetable stir-fry with tofu.",
      "ingredients": [
        "1 block of tofu, cubed",
        "Assorted vegetables (bell peppers, broccoli, carrots, snow peas)",
        "Soy sauce",
        "Sesame oil",
        "Garlic and ginger",
        "Rice or noodles"
      ],
      "cooking_instructions": [
        "Stir-fry tofu until golden brown, then remove from the pan.",
        "In the same pan, stir-fry vegetables, garlic, and ginger with soy sauce and sesame oil.",
        "Add tofu back to the pan, toss, and serve over rice or noodles."
      ],
      "nutrition_information": {
        "protein": "20g",
        "carbohydrates": "45g",
        "fat": "10g",
        "fiber": "8g"
      },
      "image_url": "https://example.com/veggie_stir_fry.jpg",
      "category": "Dinner"
    },
    {
      "calories": 450,
      "item_name": "Fruit Salad",
      "description": "A refreshing fruit salad with a variety of seasonal fruits.",
      "ingredients": [
        "Assorted fruits (e.g., apples, oranges, grapes, kiwi, pineapple)",
        "Lime juice",
        "Honey (optional)"
      ],
      "cooking_instructions": [
        "Wash, peel, and cut fruits into bite-sized pieces.",
        "Toss fruits with a drizzle of lime juice and honey if desired.",
        "Chill before serving."
      ],
      "nutrition_information": {
        "protein": "2g",
        "carbohydrates": "110g",
        "fat": "1g",
        "fiber": "10g"
      },
      "image_url": "https://example.com/fruit_salad.jpg",
      "category": "Snacks"
    },
    {
      "calories": 550,
      "item_name": "Mushroom Risotto",
      "description": "Creamy and savory mushroom risotto with Arborio rice.",
      "ingredients": [
        "1 cup Arborio rice",
        "8 oz mushrooms, sliced",
        "Onion and garlic",
        "Vegetable broth",
        "White wine (optional)",
        "Parmesan cheese",
        "Butter",
        "Fresh thyme"
      ],
      "cooking_instructions": [
        "Sauté onions, garlic, and mushrooms. Add Arborio rice and cook for a few minutes.",
        "Gradually add vegetable broth and white wine while stirring until the rice is creamy and tender.",
        "Stir in Parmesan cheese, butter, and fresh thyme. Serve hot."
      ],
      "nutrition_information": {
        "protein": "12g",
        "carbohydrates": "70g",
        "fat": "14g",
        "fiber": "4g"
      },
      "image_url": "https://example.com/mushroom_risotto.jpg",
      "category": "Dinner"
    },
    {
      "calories": 300,
      "item_name": "Pancakes",
      "description": "Fluffy and delicious pancakes with syrup and berries.",
      "ingredients": [
        "1 cup all-purpose flour",
        "2 tbsp sugar",
        "1 tsp baking powder",
        "1/2 tsp baking soda",
        "1 cup buttermilk",
        "1 egg",
        "Butter and maple syrup",
        "Mixed berries"
      ],
      "cooking_instructions": [
        "In a bowl, mix flour, sugar, baking powder, and baking soda.",
        "In another bowl, whisk buttermilk and egg. Combine with the dry ingredients.",
        "Cook pancakes on a griddle and serve with butter, maple syrup, and mixed berries."
      ],
      "nutrition_information": {
        "protein": "7g",
        "carbohydrates": "55g",
        "fat": "3g",
        "fiber": "2g"
      },
      "image_url": "https://example.com/pancakes.jpg",
      "category": "Breakfast"
    },
    {
      "calories": 250,
      "item_name": "Fruit Smoothie",
      "description": "A refreshing fruit smoothie with a blend of your favorite fruits.",
      "ingredients": [
        "Assorted fruits (e.g., banana, berries, mango)",
        "Greek yogurt",
        "Honey (optional)",
        "Ice cubes"
      ],
      "cooking_instructions": [
        "Combine fruits, Greek yogurt, and ice cubes in a blender.",
        "Blend until smooth. Add honey if desired.",
        "Pour into a glass and enjoy."
      ],
      "nutrition_information": {
        "protein": "5g",
        "carbohydrates": "45g",
        "fat": "2g",
        "fiber": "8g"
      },
      "image_url": "https://example.com/fruit_smoothie.jpg",
      "category": "Breakfast"
    },
    {
      "calories": 350,
      "item_name": "Hummus and Veggie Wrap",
      "description": "A quick and healthy wrap with hummus and fresh vegetables.",
      "ingredients": [
        "Whole-wheat tortilla",
        "Hummus",
        "Assorted veggies (e.g., cucumber, bell peppers, carrots)",
        "Lettuce or spinach leaves"
      ],
      "cooking_instructions": [
        "Spread hummus on a tortilla, add veggies and lettuce or spinach leaves.",
        "Roll up the tortilla and serve."
      ],
      "nutrition_information": {
        "protein": "8g",
        "carbohydrates": "45g",
        "fat": "5g",
        "fiber": "8g"
      },
      "image_url": "https://example.com/hummus_veggie_wrap.jpg",
      "category": "Lunch"
    },
    {
      "calories": 450,
      "item_name": "Avocado Toast",
      "description": "A trendy and nutritious avocado toast with a variety of toppings.",
      "ingredients": [
        "Sliced bread (whole wheat or sourdough)",
        "Avocado",
        "Cherry tomatoes",
        "Feta cheese",
        "Red pepper flakes",
        "Salt and pepper to taste"
      ],
      "cooking_instructions": [
        "Toast the bread until golden brown.",
        "Spread mashed avocado on the toasted bread and top with sliced cherry tomatoes, feta cheese, and red pepper flakes.",
        "Season with salt and pepper. Serve."
      ],
      "nutrition_information": {
        "protein": "6g",
        "carbohydrates": "30g",
        "fat": "10g",
        "fiber": "8g"
      },
      "image_url": "https://example.com/avocado_toast.jpg",
      "category": "Breakfast"
    }
  ]
  
  


const Home = () => {
    return (
        <div className="Home">
            <TopUserBar />
            <Search />
            <OptionDisplay />
            <NewThisWeek />
        </div>
    );
};




const Search =  () => {
    return (
        <div className="search">
            <h2>What do you want to cook today?</h2>
           <input type="text" className="searchBox" placeholder="Search" />
        </div>
    );
}



const TopUserBar = () => {
    return (
        <div className="topUserBar">
            <div className='userText'>
                <h3>Welcome back</h3>
                <h2>John Doe</h2>
            </div>
            <div className='userImage'>
                 <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="user" />
            </div>
        </div>
    )
};    




function displayOptions(options, optionsPerPage, currentPage) {
  const startIndex = (currentPage - 1) * optionsPerPage;
  const endIndex = startIndex + optionsPerPage;
  const visibleOptions = options.slice(startIndex, endIndex);
  return visibleOptions;
}

const OptionDisplay = () => {

  const [currentPage, setCurrentPage] = useState(1);
 const [currentCategory, setCurrentCategory] = useState("All");
  const handleNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const changeVisibleOptions = (option) => {
    setCurrentCategory(option);
  }

  const visibleOptions = displayOptions(FoodOptions, optionsPerPage, currentPage);
  const shownOptions = jsonData.map((item) => { 
  if (currentCategory === "All" || currentCategory === item.category) {
    return (
        <FoodItem item={item.item_name} />
    )
  };
}
  );
  return (
    <div>

        <div className='optionsContainer'>
            <div className='optionNav'>
            <button  onClick={handlePrevious} disabled={currentPage === 1}>
            <FcPrevious />
            </button>
            </div>
        <div className='optionsHolder'>
            {visibleOptions.map((option, index) => (
            <div className = "optionsDiv" onClick = {() => changeVisibleOptions(option)} key={index}>{option}</div>
            ))}
        </div>
        <div className='optionNav'>
            <button  onClick={handleNext} disabled={currentPage * optionsPerPage >= FoodOptions.length}>
            <FcNext />
            </button>
        </div>
        </div>
        <div className='foodContainer'>
             {shownOptions}
        </div>
      
    </div>
  );
};



const FoodItem = (props) => {
    const { item } = props;
    return (
        <div className='food'>
            <img src={require("../momo.jpg")} alt="food" />
            <h1>{item}</h1>
        </div>
    )


}

const NewThisWeek = () => {
    return (
        <div className='newThisWeekContainer'>
            <h1>Popular recipes this week</h1>
            <div className='foodContainer'>
            <div className='food'>
                <img src={require("../momo.jpg")} alt="food" />
                <h1>Momo</h1>
            </div>
            <div className='food'>
                <img src={require("../momo.jpg")} alt="food" />
                <h1>Momo</h1>
            </div>
            <div className='food'>
                <img src={require("../momo.jpg")} alt="food" />
                <h1>Momo</h1>
            </div>
            <div className='food'>
                <img src={require("../momo.jpg")} alt="food" />
                <h1>Momo</h1>
            </div>
        </div>
        </div>
    )
}



export default Home;
