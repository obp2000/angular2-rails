class OrderItem < ActiveRecord::Base
  belongs_to :order
  belongs_to :product
  
  PERMITTED_ATTRIBUTES = %w(id order_id product_id amount price created_at updated_at _destroy)
end
