import React, { useState } from 'react';
import styles from './CouponForm.module.css';
import { Coupons } from '../../../../../../api/src/models/models';

interface CouponFormProps {
  onSubmit: (coupon: Coupons) => void;
}

const CouponForm: React.FC<CouponFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<Coupons>({
    productId: 0,
    discount_percentage: 0,
    start_date: Date.now(),
    end_date: Date.now(),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'productId' || name === 'discount_percentage' ? Number(value) : new Date(value).getTime(),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="number"
        name="productId"
        placeholder="Product ID"
        value={formData.productId}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="discount_percentage"
        placeholder="Discount Percentage"
        value={formData.discount_percentage}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="start_date"
        value={new Date(formData.start_date).toISOString().split('T')[0]}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="end_date"
        value={new Date(formData.end_date).toISOString().split('T')[0]}
        onChange={handleChange}
        required
      />
      <button type="submit">Create Coupon</button>
    </form>
  );
};

export default CouponForm;
