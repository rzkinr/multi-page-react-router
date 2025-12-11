import { Link, useParams } from 'react-router-dom';

function ProductDetailPage() {
  const params = useParams();
  // params.productId
  return (
    <>
      <h1>Product Detail Page</h1>
      <p>Product ID: {params.productId}</p>
      <p>
        <Link to='/products'>Back to Products</Link>
      </p>
    </>
  );
}
export default ProductDetailPage;
