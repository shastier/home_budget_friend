# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

categories = Category.create([{ name: 'Living' }, { name: 'Wants' }, { name: 'Debt' }])

Expense.create([
    {description: 'Mortgage/Rent', category: categories.first},
    {description: 'Savings', category: categories.first},
    {description: 'Groceries', category: categories.first},
    {description: 'Child Care', category: categories.first},
    {description: 'Clothing', category: categories.first},
    {description: 'Heating Oil/Gas', category: categories.first},
    {description: 'Transportation', category: categories.first},
    {description: 'Phone', category: categories.first},
    {description: 'Electricity', category: categories.first},
    {description: 'Water/Sewer', category: categories.first},
    {description: 'Car Insurance', category: categories.first},
    {description: 'Home Insurance', category: categories.first},
    {description: 'Life Insurance', category: categories.first},
    {description: 'Helth Insurance', category: categories.first},
    {description: 'Medical co-pays', category: categories.first},
    {description: 'Other', category: categories.first},
    {description: 'Vacation', category: categories.second},
    {description: 'Entertainment', category: categories.second},
    {description: 'Dining Out', category: categories.second},
    {description: 'Accessories', category: categories.second},
    {description: 'Electronics', category: categories.second},
    {description: 'Hobbies', category: categories.second},
    {description: 'Charitable Contributions', category: categories.second},
    {description: 'Education(include extracurricular)', category: categories.second},
    {description: 'Home Decor', category: categories.second},
    {description: 'Cable', category: categories.second},
    {description: 'Internet', category: categories.second},
    {description: 'Refreshments(i.e., coffee)', category: categories.second},
    {description: 'Individual Meals(i.e., lunch at office)', category: categories.second},
    {description: 'Gifts', category: categories.second},
    {description: 'Repairs', category: categories.second},
    {description: 'Sports/Fitness', category: categories.second},
    {description: 'Otther', category: categories.second},
    {description: 'Student Loan 1', category: categories.third},
    {description: 'Student Loan 2', category: categories.third},
    {description: 'Auto Loan 1', category: categories.third},
    {description: 'Auto Loan 2', category: categories.third},
    {description: 'Personal Loan 1', category: categories.third},
    {description: 'Personal Loan 2', category: categories.third},
    {description: 'Credit Card 1', category: categories.third},
    {description: 'Credit Card 2', category: categories.third},
    {description: 'Credit Card 3', category: categories.third},
    {description: 'Home Equity Loan', category: categories.third},
    {description: 'Insurance Policy Loan', category: categories.third},
    {description: 'Retirement Account Loan', category: categories.third},
    {description: 'Other', category: categories.third}
])