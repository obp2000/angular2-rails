class CreateOrderItems < ActiveRecord::Migration[5.0]
  def change
    create_table :order_items do |t|
      t.references :order, :product, index: true
      t.decimal :amount
      t.decimal :price
      t.timestamps
    end
  end
end
