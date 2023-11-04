import React, { useState } from 'react';
import './Basket.css';

const Basket = () => {
    const [ingredients, setIngredients] = useState([""]);
    const [instructions, setInstructions] = useState([""]);
    const [description, setDescription] = useState("");

    const addIngredient = () => {
        const newIngredients = [...ingredients, ""];
        setIngredients(newIngredients);
    };

    const removeIngredient = (index) => {
        const newIngredients = [...ingredients];
        newIngredients.splice(index, 1);
        setIngredients(newIngredients);
    };

    const handleIngredientChange = (index, event) => {
        const newIngredients = [...ingredients];
        newIngredients[index] = event.target.value;
        setIngredients(newIngredients);
    };

    const addInstruction = () => {
        const newInstructions = [...instructions, ""];
        setInstructions(newInstructions);
    };

    const removeInstruction = (index) => {
        const newInstructions = [...instructions];
        newInstructions.splice(index, 1);
        setInstructions(newInstructions);
    };

    const handleInstructionChange = (index, event) => {
        const newInstructions = [...instructions];
        newInstructions[index] = event.target.value;
        setInstructions(newInstructions);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // You can handle form submission here, e.g., by sending the data to a server.
    };

    return (
        <div className="Basket">
            <form onSubmit={handleSubmit}>
                <label htmlFor="fname">Name of Dish:</label><br />
                <input type="text" id="fname" name="fname" required /><br />

                <label>Ingredients:</label><br />
                {ingredients.map((ingredient, index) => (
                    <div key={`ingredient${index}`}>
                        <input
                            type="text"
                            name={`ingredient${index}`}
                            value={ingredient}
                            onChange={(event) => handleIngredientChange(index, event)}
                        />
                        <button type="button" onClick={() => removeIngredient(index)}>
                            Remove
                        </button>
                    </div>
                ))}
                <button type="button" onClick={addIngredient}>
                    Add Ingredient
                </button>

                <label>Instructions:</label><br />
                {instructions.map((instruction, index) => (
                    <div key={`instruction${index}`}>
                        <input
                            type="text"
                            name={`instruction${index}`}
                            value={instruction}
                            onChange={(event) => handleInstructionChange(index, event)}
                        />
                        <button type="button" onClick={() => removeInstruction(index)}>
                            Remove
                        </button>
                    </div>
                ))}
                <button type="button" onClick={addInstruction}>
                    Add Instruction
                </button>

                <label htmlFor="description">Description:</label><br />
                <textarea
                    id="description"
                    name="description"
                    value={description}
                    onChange={handleDescriptionChange}
                ></textarea>

                <button type="submit" className="submit-button">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Basket;
