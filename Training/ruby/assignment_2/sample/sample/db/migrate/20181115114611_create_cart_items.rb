class CreateCartItems < ActiveRecord::Migration[5.2]
  def change
    create_table :cart_items do |t|
      t.string :name
      t.float :price
      t.integer :quantity
      t.float :total

      t.timestamps
    end
  end
end
