class AddDishReferencesToCartItems < ActiveRecord::Migration[5.2]
  def change
    add_reference :cart_items, :dish, foreign_key: true
  end
end
