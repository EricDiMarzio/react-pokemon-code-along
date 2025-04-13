# React Pokemon Code Along

## Getting Started
To run this code:

1. Install dependencies:
   ```bash
   npm i
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

You can also view the completed application here:  
[React Pokemon Tutorial](https://react-pokemon-tutorial.netlify.app/)

---

## Starting from Scratch
This code is complete. To create a new Vite project and follow along, use the steps below:

### Initial Setup
1. **Create a Vite App**  
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **View scripts in `package.json`** to understand how to run the template app.

4. **Prepare files**:
   - Empty `App.jsx`, `App.css`, and `index.css`.
   - Copy the completed `index.css` from this repository and ensure it's connected to your `main.jsx`.

### Building the Application
1. **Create the `App` component**  
   - Use the RFC snippet from the React Snippets VS Code extension (optional).

2. **Create a static `Card` component**  
   - Populate the `App` component with a couple of static `<Card>` components.

3. **Fetch Data**  
   - Create a function called `fetchData()` to perform a fetch request to a static URL.  
     Example: `https://pokeapi.co/api/v2/pokemon/25`

4. **Parse Data**  
   - Extract the following from the API response:
     - `data.name`
     - `data.sprite`
     - `data.id`

5. **Manage State**  
   - Use `useState` to create a `team` array.

6. **Fetch Random Pokemon**  
   - For each fetch request, search using a random index (1–151 for Generation 1 Pokémon) and append the new data to the `team` array.

7. **Render Cards Dynamically**  
   - Use `team.map()` to display a unique `Card` for each Pokémon in the `team`.  
     - Pass a unique value for each `key`.  
     - Pass the Pokémon data into the `Card` component.

8. **Dynamic Card Rendering**  
   - Ensure the `Card` component renders dynamic data.

9. **Add Buttons**  
   - **Fetch Button**: Fetches a new Pokémon and adds it to the team.  
   - **Clear Button**: Resets the `team` array to empty.

---

## Stretch Goals
1. **Disable Fetch Button**  
   - Make the "Fetch" button disappear once the team has 6 Pokémon.

2. **Disable Clear Button**  
   - Prevent the "Clear" button from working until the team has 6 Pokémon.