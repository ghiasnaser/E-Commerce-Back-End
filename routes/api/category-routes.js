const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async(req, res) => {
  // find all categories
  // be sure to include its associated Products
  try{
    const categories = await Category.findAll({
      include:[Product],
    });
    res.json(categories);
  }catch(error){
    console.error('Error fetching categories:', error);
    res.status(500).json({ error: 'Error fetching categories' });
  };
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
 const category_id=req.params.id;
 try{
  const category = await Category.findByPk(category_id,{
    include:[Product],
  });
  if (!category){
    return res.status(404).json({error:'Category not found'});
  }
  res.status(200).json(category);
 }catch(error){
  console.error('Error fetching category:', error);
  res.status(500).json({ error: 'Error fetching category' });
 };
});

router.post('/', async(req, res) => {
  // create a new category
  try{
    const categoryData=await Category.create(req.body);
    res.status(200).json(categoryData);
  }catch(error){
    console.error('Error creating category:', error);
    res.status(500).json({ error: 'Error creating category' });
  };
});

router.put('/:id', async(req, res) => {
  // update a category by its `id` value
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!categoryData[0]) {
      res.status(404).json({ message: 'No category with this id!' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (error) {
    console.error('Error Updating category:', error);
    res.status(500).json({ error: 'Error Updating category' });
  }
});

router.delete('/:id', async(req, res) => {
  // delete a category by its `id` value
 
});

module.exports = router;
