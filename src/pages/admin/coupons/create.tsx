import React from 'react';
import { createCoupon } from '../../../utils/api';
import { Coupons } from '../../../../../api/src/models/models';
import CouponForm from '../components/CouponForm';

const CreateCouponPage: React.FC = () => {
  const handleCreateCoupon = async (coupon: Coupons) => {
    try {
      await createCoupon(coupon);
      alert('Coupon created successfully!');
    } catch (error) {
      alert('Failed to create coupon');
    }
  };

  return (
    <div>
      <h1>Create Coupon</h1>
      <CouponForm onSubmit={handleCreateCoupon} />
    </div>
  );
};

export default CreateCouponPage;
