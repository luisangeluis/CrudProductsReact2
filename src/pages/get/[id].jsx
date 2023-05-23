//Hooks
import useGetProductById from '@/hooks/useGetProductById';
//Components
import MainLayout from '@/components/layout/mainLayout/MainLayout';
import { useRouter } from 'next/router';
import ProductBanner from '@/components/molecules/productBanner/ProductBanner';

const Get = () => {
  const router = useRouter();
  const { id } = router.query;
  const { product } = useGetProductById(id);

  // console.log(product);

  return (
    <section>
      <MainLayout>
        <ProductBanner />
      </MainLayout>
    </section>
  )
}

export default Get;
