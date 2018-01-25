class AddAttrsToProducts < ActiveRecord::Migration[5.0]
  def change
    change_table "products" do |t|
      t.decimal :weight
      t.integer :width
      t.integer :density
      t.decimal :dollar_price
      t.decimal :dollar_rate
    end
  end
end
