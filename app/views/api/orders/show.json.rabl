object @order

attributes :id, :customer_id

child @customer => :customer do
  object @customer

  attributes :id, :nick, :name
end

child @order_items => :order_items do
  collection @order_items

  attributes :id, :order_id, :product_id, :amount, :price, :created_at, :updated_at, 
             :product_name, :product_density, :product_width, :product_price

  child :product do 
    node :id { |product| product.id }
    node :name { |product| product.name }
    node :density { |product| product.density }
    node :width { |product| product.width }
    node :price { |product| product.price }
  end
end
