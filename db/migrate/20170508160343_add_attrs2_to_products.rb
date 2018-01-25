class AddAttrs2ToProducts < ActiveRecord::Migration[5.0]
  def change
    change_table "products" do |t|
      t.integer :width_shop
      t.integer :density_shop
      t.integer :weight_for_count
      t.decimal :length_for_count, default: 1
      t.integer :price_pre
    end
  end
end
