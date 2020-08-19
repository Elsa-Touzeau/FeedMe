recipes = []
file= File.open("recipes.txt", "r")
file.each_line { |line|
  recipes << eval(line)
}
file.close

task create_data_from_json: :environment do
  recipes.each do |receipt|
    recipe = Recipe.create(name: receipt[:name])
    receipt[:ingredients].each do |ingredient|
      ingredient = Ingredient.find_or_create_by(name: ingredient)
      recipe.ingredients << ingredient
    end
  end
end