node :totalCount do
  @customers.total_count
end

child @customers => :results do
  collection @customers

  attributes :id, :nick, :name, :created_at
  node :updated_at do |customer|
    I18n.l(customer.updated_at, format: :short)
    # customer.updated_at
  end
  
end
