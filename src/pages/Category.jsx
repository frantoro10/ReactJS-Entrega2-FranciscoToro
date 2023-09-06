
import { useParams } from 'react-router-dom'
import { ProductsData } from '../json/ProductsData'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'

const Category = () => {
  const { categoryId } = useParams()
  const category = ProductsData.filter(product => product.category === categoryId)
  console.log(category)
  
  if (category.length === 0) {
    return (
      <div>
        <p>No se encontraron productos en esta categoría.</p>
      </div>
    );
  }

  return (
    <ItemListContainer productsData={category} />
  );
}

export default Category