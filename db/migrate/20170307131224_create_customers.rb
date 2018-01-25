class CreateCustomers < ActiveRecord::Migration[5.0]
  def change
    create_table :customers do |t|
      t.string :nick
      t.string :name
      t.timestamps
    end
  end
end
