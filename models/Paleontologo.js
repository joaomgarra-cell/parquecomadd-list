import conexao from "../config/conexao.js";
const PaleontologoSchema = new conexao.Schema({
  nome: { type: String,required: true},
  nascimento: { type: String,required: true},
  descoberta: { type: String,required: true} 

});
const paleontologo = 
conexao.model("paleontologo", paleontologoSchema);
export default paleontologo;