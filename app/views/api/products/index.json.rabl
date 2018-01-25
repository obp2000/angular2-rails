node :totalCount do
  @products.total_count
end

node :per_page do
  Product::PER_PAGE
end

child @products => :results do
  collection @products

  attributes :id, :name, :price, :created_at, :updated_at, :weight, :width, :density, 
    		 :dollar_price, :dollar_rate, :image
end
