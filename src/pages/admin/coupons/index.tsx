import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout'; // Import Layout
import { fetchCoupons } from '../../../utils/api';
import { Coupons } from '../../../../../api/src/models/models';

const CouponListPage: React.FC = () => {
  const [coupons, setCoupons] = useState<Coupons[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCoupons = async () => {
      try {
        const data = await fetchCoupons();
        setCoupons(data);
      } catch (err) {
        console.log('Error fetching coupons:', err); // Log the error for debugging
        setError('Failed to fetch coupons');
      }
    };
    loadCoupons();
  }, []);

  return (
    <Layout> {/* Wrap page content with Layout */}
      <h1>Coupons</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {coupons.map((coupon) => (
          <li key={coupon.productId}>
            Product ID: {coupon.productId}, Discount: {coupon.discount_percentage}%
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default CouponListPage;

