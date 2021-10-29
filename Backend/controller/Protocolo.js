const Protocolo = require('../model/Protocolo')
//CRUD - CREATE - READ- UPDATE - DELETE
module.exports ={
    async index(req, res){    
      let protocolos = await Protocolo.find()
        return res.json(protocolos);
    },

    async store(req,res){
         let protocolo = req.body;
         protocolo = await Protocolo.create(protocolo)
        return res.json(protocolo);
      },

      async update(req,res){
        //recupera o Id que pela url query e guarda na variavel id
       
        //recupera as inf do post em 

        let protocolos = await Protocolo.findById(req.query.id);
        protocolos.name = req.body.name;
        protocolos = await Protocolo.updateOne({'_id': req.query.id} , protocolos)
    
        return res.json({messagem : 'Atualizar o protocolo ' + id +' com os dados do post '+ protocolos.name})
      },

    async delete(req,res){
    let protocolos = await Protocolo.findById(req.query.id);
    protocolos = await Protocolo.deleteOne(protocolos);
    return res.json(protocolos);
    
  },

  }

