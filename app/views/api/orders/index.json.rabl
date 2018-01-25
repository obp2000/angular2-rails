node :totalCount do
  @orders.total_count
end

child @orders => :results do
  collection @orders

  attributes :id, :customer_id, :customer_nick, :created_at, :updated_at
end
