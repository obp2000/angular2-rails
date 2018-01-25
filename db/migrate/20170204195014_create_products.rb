class CreateProducts < ActiveRecord::Migration[5.0]
  def change
    create_table "products" do |t|
      t.string   "name",       null: false
      t.integer  "price",      default: 0, null: false
      t.datetime "created_at",                         null: false
      t.datetime "updated_at",                         null: false
    end
  end
end
