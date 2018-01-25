class Order < ActiveRecord::Base
  belongs_to :customer
  has_many :order_items
  
  accepts_nested_attributes_for :order_items, allow_destroy: true
  
  PERMITTED_ATTRIBUTES = [:id, :customer_id, {order_items_attributes: OrderItem::PERMITTED_ATTRIBUTES}]
    
#  def order_items=(val)
#    self.order_items = val
#  end
  scope :with_customer, ->{
    select("orders.*").select("customers.nick customer_nick").joins(:customer)
  }

end
