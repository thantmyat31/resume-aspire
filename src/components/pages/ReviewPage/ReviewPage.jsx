import React, {useState} from 'react';
import Layout from '../../modules/Layout/Layout';
import Review from '../../modules/Review/Review';
import Aside from '../../organisms/Aside/Aside';

export default function ReviewPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <Layout>
        <Aside onDrawerOpen={setIsDrawerOpen} isDrawerOpen={isDrawerOpen} />
        <Review isDrawerOpen={isDrawerOpen} />
    </Layout>
  )
}
