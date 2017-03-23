const recipe = {
  name: 'Key Lime Pie',
  author: 'Alan Henderson',
  steps: ['Mix the things', 'Eat it'],
  servings: 1,
  ingredientQuantity: [{
    ingredient: {
      name: 'Sweetened condensed milk',
      onHand: true
    },
    unitOfMeasure: 'can',
    quantity: 1,
    notes: ''
  },
  {
    ingredient: {
      name: 'egg yolks',
      onHand: true
    },
    unitOfMeasure: '',
    quantity: 4,
    notes: ''
  },
  {
    ingredient: {
      name: 'key lime juice',
      onHand: true
    },
    unitOfMeasure: 'tbsp',
    quantity: 4,
    notes: ''
  },
  {
    ingredient: {
      name: 'graham cracker crust',
      onHand: true
    },
    unitOfMeasure: '',
    quantity: 1,
    notes: ''
  },
  {
    ingredient: {
      name: 'heavy cream',
      onHand: true
    },
    unitOfMeasure: 'cups',
    quantity: 1.5,
    notes: ''
  },

  {
    ingredient: {
      name: 'powdered sugar',
      onHand: true
    },
    unitOfMeasure: 'tbsp',
    quantity: 2,
    notes: ''
  }
  ],
  print: function () {
    const numberIngredients = recipe.ingredientQuantity.length
    console.log('')
    console.log(recipe.name)
    console.log('')
    console.log('Ingredients')
    console.log('')
    for (let i = 0; i < numberIngredients; i++) {
      let ingredientString = ''
      ingredientString = ingredientString + recipe.ingredientQuantity[i].quantity
      if (recipe.ingredientQuantity[i].unitOfMeasure !== '') {
        ingredientString = ingredientString + ' ' + recipe.ingredientQuantity[i].unitOfMeasure
      }
      ingredientString = ingredientString + ' ' + recipe.ingredientQuantity[i].ingredient.name
      console.log(ingredientString)
    }
    console.log('')
    console.log('Steps:')
    for (let i = 0; i < recipe.steps.length; i++) {
      const stepNumber = i + 1
      const stepString = stepNumber + ') ' + recipe.steps[i]
      console.log(stepString)
    }
  }
}
