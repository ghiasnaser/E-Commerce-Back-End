const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try{
    const tags = await Tag.findAll({
      include:[{model:Product,as:'Products'}],
    });
    res.json(tags);
  }catch(error){
    console.error('Error fetching tags:', error);
    res.status(500).json({ error: 'Error fetching tags' });
  };
});

router.get('/:id', async(req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  const tag_id=req.params.id;
 try{
  const tag = await Tag.findByPk(tag_id,{
    include:[{model:Product,as:'Products'}],
  });
  if (!tag){
    return res.status(404).json({error:'tag not found'});
  }
  res.status(200).json(tag);
 }catch(error){
  console.error('Error fetching tag:', error);
  res.status(500).json({ error: 'Error fetching tag' });
 };
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
