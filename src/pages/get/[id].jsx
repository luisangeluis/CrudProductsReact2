//Hooks
import useGetProductById from '@/hooks/useGetProductById';
//Components
import MainLayout from '@/components/layout/mainLayout/MainLayout';
import { useRouter } from 'next/router';
import ProductBanner from '@/components/molecules/productBanner/ProductBanner';
import { useSelector } from 'react-redux';
import Loader from '@/components/organisms/loader/Loader';

const Get = () => {
  const router = useRouter();
  const { id } = router.query;
  const loader = useSelector(state=>state.loader);
  const { product } = useGetProductById(id);


  return (
    <section>
      <MainLayout>
        {product.isLoading && <Loader />}
        <div className="container">
          <ProductBanner product={product} />
        </div>
      </MainLayout>
    </section>
  )
}

export default Get;
