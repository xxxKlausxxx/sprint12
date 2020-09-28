const router = require('express').Router();
const cards = require('../data/cards.json');

const readCards = async (req, res) => {
  try {
    res.send(cards);
  } catch (err) {
    res.status(500).send({ message: 'Ошибка чтения файла карточек' });
  }
};

router.get('/cards', readCards);
module.exports = router;
