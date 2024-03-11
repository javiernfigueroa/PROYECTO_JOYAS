const joyasService = require('../services/joyasService');
const { prepareHATEOAS } = require('../utils/hateoas');

const getJoyas = async (req, res) => {
  try {
    const result = await joyasService.getJoyas(req.query);
    if (result.code != undefined) {
      res.json(result);
    } else {
      const HATEOAS = await prepareHATEOAS(result);
      res.json(HATEOAS);
    }
  } catch (error) {
    console.error('Error al obtener las joyas:', error);
    res.status(500).json({ code: 500, message: 'Error interno del servidor' });
  }
};

const getJoyasByFilters = async (req, res) => {
  try {
    const joyas = await joyasService.getJoyasByFilters(req.query);
    res.json(joyas);
  } catch (error) {
    console.error('Error al obtener las joyas por filtros:', error);
    res.status(500).json({ code: 500, message: 'Error interno del servidor' });
  }
};

const getJoyasById = async (req, res) => {
  try {
    const joya = await joyasService.getJoyasById(req.params.id);
    if (joya.length > 0) {
      res.json(joya);
    } else {
      if (joya.length === undefined) {
        res.json(joya);
      } else {
        res.status(404).json({ code: 404, message: 'Recurso no encontrado' });
      }
    }
  } catch (error) {
    console.error('Error al obtener la joya por ID:', error);
    res.status(500).json({ code: 500, message: 'Error interno del servidor' });
  }
};

module.exports = {
  getJoyas,
  getJoyasByFilters,
  getJoyasById,
};
