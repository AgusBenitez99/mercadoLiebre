const db=require('../database/models');

const getAllProducts=async(limit,offset)=>{
    try {
        const {rows,count}=await db.Product.findAndCountAll({
            limit,
            offset,
        });
        return {rows,count}
    } catch (error) {
        throw {
            
                status:false,
                message:error.message || 'ups hubo un error'
           
        }
    }
}
const getProductById=async(id)=>{
    try {
        const product = await db.Product.findByPk(id,{
            include:['category']
        })
        return product
    } catch (error) {
        throw {
            
            status:false,
            message:error.message || 'ups hubo un error'
       
    }
    }
}
const createProduct= async (data)=>{
        try {
            
        } catch (error) {
            
        }
}
const updateProduct=async()=>{
        try {
            
        } catch (error) {
            
        }
}
const deleteProduct=async (id)=>{
    try {
        
    } catch (error) {
        
    }
}

module.exports={
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
    
}

